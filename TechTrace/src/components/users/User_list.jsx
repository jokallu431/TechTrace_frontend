import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router";
import { loadUserList } from "../api";
import Pagination from "../Pages/Pagination"; // Import the Pagination component

const Users_List = () => {
  const [UsersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadUserList(
      (data) => setUsersList(data),
      () => setUsersList([])
    );
  }, []);

  const totalPages = Math.ceil(UsersList.length / itemsPerPage);
  const displayedUsersList = UsersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://tech-trace-backend.vercel.app/users/delete_user/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("User deleted successfully!");
        // Refresh the user list (optional: filter out the deleted user)
        // setUsers(users.filter((user) => user._id !== id));
        navigate("/dashboard");
      } else {
        alert(result.message || "Failed to delete user");
      }
    } catch (error) {
      alert("Error deleting user");
      console.error("Delete error:", error);
    }
  };

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Users List{" "}
              <span className="text-muted fw-normal ms-2">
                ({UsersList.length})
              </span>
            </h5>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="../create_profile" className="btn btn-primary">
              <i className="bx bx-plus me-1"></i> Add New
            </Link>
          </div>
        </div> 

        {UsersList.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Please wait...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedUsersList.map((UsersList, index) => (
                    <tr key={UsersList._id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{UsersList.name}</td>
                      <td>{UsersList.email}</td>
                      <td>{UsersList.role}</td>
                      <td>{UsersList.branch}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                              className="px-2 text-primary"
                              to={`./edit_user/${UsersList._id}`}
                            >
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to={`tel:${UsersList.phone}`}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Call"
                              className="px-2 text-primary"
                            >
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to={`./view_user/${UsersList._id}`}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                              className="px-2 text-primary"
                            >
                              <i className="bx bx-show font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <button
                              onClick={() => handleDelete(UsersList._id)}
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
                  {Math.min(currentPage * itemsPerPage, UsersList.length)} of{" "}
                  {UsersList.length} entries
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

export default Users_List;
