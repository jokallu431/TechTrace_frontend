import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router";
import { task_List } from "../api";
import Pagination from "../Pages/Pagination"; // Import Pagination component

const Assigned_List = () => {
  const [assigned_List, setAssignedList] = useState([]);
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
            const filteredData = data.filter(task => task.task_Status === "Assigned");
            setAssignedList(filteredData);
            setLoading(false); // Stop loading once data is received
          },
          () => {
            setAssignedList([]);
            setLoading(false);
          }
        );
  }, []);

  const totalPages = Math.ceil(assigned_List.length / itemsPerPage);
  const displayedassigned_List = assigned_List.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Assigned List <span className="text-muted fw-normal ms-2">({assigned_List.length})</span>
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
        ) : assigned_List.length === 0 ? (
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
                  {displayedassigned_List.map((assignedList, index) => (
                    <tr key={assignedList.task_Id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>
                        <a href="#" className="text-body">
                          {assignedList.task_Name}
                        </a>
                      </td>
                      <td>{assignedList.task_Phone}</td>
                      <td>{assignedList.task_Address}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link to={`./edit_task/${assignedList.task_Id}`} className="px-2 text-primary">
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`tel:${assignedList.task_Phone}`} className="px-2 text-primary">
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`./view_task/${assignedList.task_Id}`} className="px-2 text-primary">
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
                  {Math.min(currentPage * itemsPerPage, assigned_List.length)} of {assigned_List.length} entries
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

export default Assigned_List;