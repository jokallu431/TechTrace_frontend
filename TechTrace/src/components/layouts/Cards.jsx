import React, { useEffect, useState } from "react";

const Cards = () => {
    const [pendingCount, setPendingCount] = useState(0);
    const [unassignedCount, setUnassignedCount] = useState(0);
    const [assignedCount, setAssignedCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        const fetchTaskList = async () => {
          try {
            const response = await fetch("http://localhost:4000/task/task_list");
            const data = await response.json();
    
            // Count the pending tasks
            const pendingTasks = data.filter((task) => task.task_Status === "Pending");
            setPendingCount(pendingTasks.length);
            const unassignedTasks = data.filter((task) => task.task_Status === "Unassigned");
            setUnassignedCount(unassignedTasks.length);
            const assignedTasks = data.filter((task) => task.task_Status === "Assigned");
            setAssignedCount(assignedTasks.length);
            const completedTasks = data.filter((task) => task.task_Status === "Completed");
            setCompletedCount(completedTasks.length);
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
        };
    
        fetchTaskList();
      }, []);


  return (
    <>
      {/* <!-- Sales Card --> */}
      <div className="col-xxl-3 col-xl-12">
        <div className="card info-card unassigned-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Unassigned <span>| Today</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-files"></i>
              </div>
              <div className="ps-3">
                <h6>{unassignedCount}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sales Card --> */}

      {/* <!-- Sales Card --> */}
      <div className="col-xxl-3 col-xl-12">
        <div className="card info-card sales-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Assigned <span>| Today</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-check2-square"></i>
              </div>
              <div className="ps-3">
                <h6>{assignedCount}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sales Card --> */}

      {/* <!-- Revenue Card --> */}
      <div className="col-xxl-3 col-xl-12">
        <div className="card info-card revenue-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
                Pending <span>| Today</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-folder"></i>
              </div>
              <div className="ps-3">
                <h6>{pendingCount}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Revenue Card --> */}

      {/* <!-- Customers Card --> */}
      <div className="col-xxl-3 col-xl-12">
        <div className="card info-card customers-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Compeleted <span>| Today</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-award"></i>
              </div>
              <div className="ps-3">
                <h6>{completedCount}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Customers Card --> */}
    </>
  );
};

export default Cards;
