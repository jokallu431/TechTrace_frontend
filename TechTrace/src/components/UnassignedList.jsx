import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router";
import { task_List } from "./api";
import Pagination from "./Pagination"; // Import Pagination component

const UnassignedList = () => {
  const [unassignedList, setUnassignedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    task_List(
        (data) => {
          const filteredData = data.filter(task => task.task_Status === "Unassigned");
          setUnassignedList(filteredData),
      () => setUnassignedList([])}
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
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="../edit" className="btn btn-primary">
              <i className="bx bx-plus me-1"></i> Add New
            </Link>
          </div>
        </div>

        {unassignedList.length === 0 ? (
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
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedUnassignedList.map((pendingList, index) => (
                    <tr key={pendingList.task_Id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>
                        <a href="#" className="text-body">
                          {pendingList.task_Name}
                        </a>
                      </td>
                      <td>{pendingList.task_Phone}</td>
                      <td>{pendingList.task_Address}</td>
                      <td>{pendingList.task_Desc}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link to={`../edit/${pendingList.task_Id}`} className="px-2 text-primary">
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`tel:${pendingList.task_Phone}`} className="px-2 text-primary">
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to={`./view_task/${pendingList.task_Id}`} className="px-2 text-primary">
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