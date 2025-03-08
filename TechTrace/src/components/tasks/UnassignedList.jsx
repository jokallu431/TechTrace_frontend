import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router";
import { task_List } from "../api";
import Pagination from "../Pages/Pagination"; // Import Pagination component

const UnassignedList = () => {
  const [unassignedList, setUnassignedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [userRole, setUserRole] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    
    setLoading(true);
    const role = localStorage.getItem("role");
    setUserRole(role);
    task_List(
      (data) => {
        const filteredData = data.filter(task => task.task_Status === "Unassigned");
        setUnassignedList(filteredData);
        setLoading(false); // Stop loading once data is received
      },
      () => {
        setUnassignedList([]);
        setLoading(false);
      }
    );
  }, []);

  const totalPages = Math.ceil(unassignedList.length / itemsPerPage);
  const displayedUnassignedList = unassignedList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Unassigned List <span className="text-muted fw-normal ms-2">({unassignedList.length})</span>
            </h5>
          </div>
          {userRole === "Admin" && (
            <div className="col-md-6 d-flex justify-content-end">
              <Link to="../Create_task" className="btn btn-primary">
                <i className="bx bx-plus me-1"></i> Add New
              </Link>
            </div>
          )}
        </div>

        {loading ? (
          // Show loader while fetching data
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Please wait...</span>
            </div>
          </div>
        ) : unassignedList.length === 0 ? (
          // Show "No Data" message if the list is empty
          <div className="text-center mt-5">
            <h5 className="mt-3">Nothing to fetch</h5>
            <p className="text-muted">No completed tasks available at the moment.</p>
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
                  {displayedUnassignedList.map((unassignedList, index) => (
                    <tr key={unassignedList.task_Id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>
                        <a href="#" className="text-body">
                          {unassignedList.task_Name}
                        </a>
                      </td>
                      <td>{unassignedList.task_Phone}</td>
                      <td>{unassignedList.task_Address}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link to={`./edit_task/${unassignedList.task_Id}`} className="px-2 text-primary">
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`tel:${unassignedList.task_Phone}`} className="px-2 text-primary">
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`./view_task/${unassignedList.task_Id}`} className="px-2 text-primary">
                              <i className="bx bx-show font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="delete" className="px-2 text-primary">
                              <i className="bx bx-trash font-size-18"></i>
                            </Link>
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
                  {Math.min(currentPage * itemsPerPage, unassignedList.length)} of {unassignedList.length} entries
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

export default UnassignedList;