import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { task_List } from "../api";

const Main = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    task_List(
      (data) => {
        setTaskData(data); // Directly set the data without filtering
        setLoading(false); // Stop loading once data is received
        console.log("taskData", data);
      },
      () => {
        setTaskData([]);
        setLoading(false);
      }
    );
  }, []);

  return (
    <>
      {/* <!-- ======= Main Section ======= --> */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section dashboard">
          <div className="row">
            <div className="row">
              <Cards />
            </div>
            {/* <!-- Left side columns --> */}
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">Task List</h5>
                      {loading ? (
                        <p>Loading tasks...</p>
                      ) : (
                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th>Sr No.</th>
                              <th>Task Name</th>
                              <th>Phone</th>
                              <th>Address</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {taskData.length > 0 ? (
                              taskData.map((task, index) => (
                                <tr key={index}>
                                  <th>{index + 1}</th>
                                  <td>{task.task_Name}</td>
                                  <td>{task.task_Phone}</td>
                                  <td>{task.task_Address}</td>
                                  <td>
                                    <span
                                      className={`badge bg-${getStatusColor(
                                        task.task_Status
                                      )}`}
                                    >
                                      {task.task_Status}
                                    </span>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="5" className="text-center">
                                  No tasks available.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const getStatusColor = (task_Status) => {
  console.log("task_Status", task_Status);
  switch (task_Status) {
    case "Completed":
      return "success";
    case "Pending":
      return "danger";
    case "Assigned":
      return "primary";
    case "Unassigned":
      return "warning";
    default:
      return "secondary";
  }
};
export default Main;
