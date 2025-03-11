import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router";
import { branchList } from "../api";
import Pagination from "../Pages/Pagination"; // Import Pagination component
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BranchList = () => {
  const navigate = useNavigate();
  const [branches, setBranches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Track loading state
  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);

    branchList(
      (data) => {
        setBranches(data);
        setLoading(false);
      },
      () => {
        setBranches([]);
        setLoading(false);
      }
    );
  }, []);

  const totalPages = Math.ceil(branches.length / itemsPerPage);
  const displayedBranches = branches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (branch_Id) => {
    if (!window.confirm("Are you sure you want to delete this branch?")) return;

    try {
      const response = await fetch(
        `https://tech-trace-backend.vercel.app/branch/delete_branch/${branch_Id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Branch deleted successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error deleting branch");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Error deleting branch:", error);
    }
  };

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Branch List{" "}
              <span className="text-muted fw-normal ms-2">({branches.length})</span>
            </h5>
          </div>
            <div className="col-md-6 d-flex justify-content-end">
              <Link to="../create_branch" className="btn btn-primary">
                <i className="bx bx-plus me-1"></i> Add New
              </Link>
            </div>
        </div>

        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Please wait...</span>
            </div>
          </div>
        ) : branches.length === 0 ? (
          // Show "Nothing to fetch" when no data is available
          <div className="text-center mt-5">
            <h5 className="mt-3">Nothing to fetch</h5>
            <p className="text-muted">No branches available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedBranches.map((branch, index) => (
                    <tr key={branch.branch_Id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>
                        <a href="#" className="text-body">
                          {branch.branch_Name}
                        </a>
                      </td>
                      <td>{branch.branch_Phone}</td>
                      <td>{branch.branch_Address}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                              className="px-2 text-primary"
                              to={`./edit_branch/${branch.branch_Id}`}
                            >
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`tel:${branch.branch_Phone}`} className="px-2 text-primary">
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`./view_branch/${branch.branch_Id}`} className="px-2 text-primary">
                              <i className="bx bx-show font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <button
                              onClick={() => handleDelete(branch.branch_Id)}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                              className="px-2 text-primary border-0 bg-transparent"
                            >
                              <i className="bx bx-trash font-size-18"></i>
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Component */}
            <div className="row g-0 align-items-center pb-4">
              <div className="col-sm-6">
                <p className="mb-sm-0">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, branches.length)} of{" "}
                  {branches.length} entries
                </p>
              </div>
              <div className="col-sm-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default BranchList;
