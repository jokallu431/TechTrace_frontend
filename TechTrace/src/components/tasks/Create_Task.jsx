import { Link, useNavigate } from "react-router";
import React from "react";
import { useState } from "react";

const CreateTask = () => {
    const [TaskName, setTaskName] = useState("");
    const [TaskPhone, setTaskPhone] = useState("");
    const [TaskAddress, setTaskAddress] = useState("");
    const [TaskDesc, setTaskDesc] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        task_Name: TaskName,
        task_Phone: TaskPhone,
        task_Address: TaskAddress,
        task_Desc: TaskDesc,
      };
    
      console.log("Data before sending:", data);
    try {
      const response = await fetch(
        "http://localhost:4000/task/create_task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // **IMPORTANT**
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Task created successfully:", result);

      if (response.ok) {
        navigate("/dashboard");
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create Task</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">Tasks</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section profile">
          {/* <!-- Profile Edit Form --> */}
          <div className="row">
            <div className="col-2"></div>
            <div className="card card-body col-xl-8">
              <div className="m-5 ">
                <form method="Post" onSubmit={handleSubmit}>
                  <div class="row mb-3">
                    <label
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Task Title
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Task Title"
                        value={TaskName}
                        onChange={(e) => setTaskName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="TaskPhone"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Task Phone
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="Task_Phone"
                        type="text"
                        class="form-control"
                        id="TaskPhone"
                        value={TaskPhone}
                        onChange={(e) => setTaskPhone(e.target.value)}
                        placeholder="Enter Task Contact"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="TaskAddress"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Task Address
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="Task_Address"
                        type="text"
                        class="form-control"
                        id="TaskAddress"
                        placeholder="Enter Task Address"
                        value={TaskAddress}
                        onChange={(e) => setTaskAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label
                      for="TaskDesc"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Task Description
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <textarea
                        name="Task_Desc"
                        type="text"
                        class="form-control"
                        id="TaskDesc"
                        placeholder="Enter Task Description"
                        value={TaskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <button class="btn btn-primary">Create Task</button>
                  </div>
                </form>
                {/* <!-- End Profile Edit Form --> */}
              </div>
            </div>
            <div className="col-2"></div>
          </div>

          {/* <!-- End Profile Edit Form --> */}
        </section>
      </main>
    </>
  );
};

export default CreateTask;
