import { Link, useParams } from "react-router";
import React, { useState, useEffect } from "react";
import View_map from "./View_map";
import { task_List_Id } from "../api";

const ViewTask = () => {
  const { task_Id } = useParams(); // Get task_Id from the URL params
  const [taskView, setTaskView] = useState({});
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (task_Id) {
      task_List_Id(
        task_Id,
        (data) => setTaskView(data),
        () => setTaskView({})
      );
    }
  }, [task_Id]); // Add task_Id as a dependency

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>View Task</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to={
                    taskView.task_Status === "Unassigned"
                      ? "/dashboard/unassigned_task"
                      : taskView.task_Status === "Assigned"
                      ? "/dashboard/assigned_task"
                      : taskView.task_Status === "Pending"
                      ? "/dashboard/pending_task"
                      : taskView.task_Status === "Completed"
                      ? "/dashboard/completed_task"
                      : "/dashboard"
                  }
                >
                  Task {taskView.task_Status}
                </Link>
              </li>
              <li className="breadcrumb-item active">{taskView.task_Id}</li>
            </ol>
          </nav>
        </div>

        {showMap ? (
          <View_map address={taskView.task_Address} />
        ) : (
          <section className="section profile">
            <div className="row">
              <div className="col-2"></div>
              <div className="card card-body col-xl-8">
                <div className="m-5">
                  <div className="tab-pane fade show active profile-overview">
                    <h5 className="card-title">Task Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Task ID</div>
                      <div className="col-lg-9 col-md-8">
                        {taskView.task_Id}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Task Name</div>
                      <div className="col-lg-9 col-md-8">
                        {taskView.task_Name}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">
                        {taskView.task_Phone}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">
                        Task Address
                      </div>
                      <div className="col-lg-9 col-md-8">
                        {taskView.task_Address}
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-lg-3 col-md-4 label">Description</div>
                      <div className="col-lg-9 col-md-8">{taskView.task_Desc}</div>
                    </div> */}
                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Description</div>
                      <div className="col-lg-9 col-md-8">
                        {Array.isArray(taskView.task_Desc)
                          ? taskView.task_Desc.map((desc, index) => (
                              <div key={index}>{desc}</div>
                            ))
                          : taskView.task_Desc}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Status</div>
                      <div className="col-lg-9 col-md-8">
                        {taskView.task_Status}
                      </div>
                    </div>

                    <button
                      onClick={toggleMap}
                      className="btn btn-primary mt-3"
                    >
                      Show Map
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default ViewTask;
