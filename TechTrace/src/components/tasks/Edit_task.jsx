import { Link, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { task_List_Id, branchList,  } from "../api"; // Assuming task_List_Id and branchList are imported from the api
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit_task = () => {
  const { task_Id } = useParams(); // Get task_Id from URL params
  const navigate = useNavigate();

  // Initialize state for task editing
  const [task_Edit, setTask_Edit] = useState({
    task_Name: "",
    task_Address: "",
    task_Phone: "",
    task_Desc: "",
    task_Status: "",
    branch_Id: "", // Store branch ID here
  });

  const [branches, setBranches] = useState([]); // Store list of branches
  const [loading, setLoading] = useState(false); // Track loading state

  // Fetch branch list on component mount
  useEffect(() => {
    setLoading(true);
    branchList(
      (data) => {
        setBranches(data); // Update branches state with the fetched data
        setLoading(false); // End loading after fetching branches
      },
      () => {
        toast.error("Failed to load branches.");
        setLoading(false);
      }
    );

    // console.log("branch",data);
  }, []);

  // Fetch task data using task_List_Id function
  useEffect(() => {
    if (task_Id) {
      setLoading(true); // Set loading to true while fetching task data
      task_List_Id(
        task_Id,
        (data) => {
          setTask_Edit({
            task_Name: data.task_Name || "",
            task_Phone: data.task_Phone || "",
            task_Address: data.task_Address || "",
            task_Desc: data.task_Desc || "",
            task_Status: data.task_Status || "",
            branch_Id: data.branch_Id?.$oid || data.branch_Id || "", // Update branch_Id with the fetched data
          });
          console.log("data", data.branch_Id);

          setLoading(false); // End loading after task data is fetched
        },
        () => {
          toast.error("Failed to load task data.");
          setLoading(false);
        }
      );
    }
  }, [task_Id]); // Fetch task data when task_Id changes

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask_Edit((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true while submitting the form
      const response = await fetch(
        `http://localhost:4000/task/update_task/${task_Id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task_Edit),
        }
      );
      const result = await response.json();
      setLoading(false); // End loading after submission

      if (response.ok) {
        toast.success("Task updated successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error updating task");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      setLoading(false);
      console.error("Error updating task:", error);
    }
  };

  // Get the branch name based on branch_Id
  const branchName =
    branches.find((branch) => branch._id === task_Edit.branch_Id)
      ?.branch_Name || "No Branch Selected";

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Edit Task</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/dashboard"}>Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link
                  to={
                    task_Edit.task_Status === "Unassigned"
                      ? "/dashboard/unassigned_task"
                      : task_Edit.task_Status === "Assigned"
                      ? "/dashboard/assigned_task"
                      : task_Edit.task_Status === "Pending"
                      ? "/dashboard/pending_task"
                      : task_Edit.task_Status === "Completed"
                      ? "/dashboard/completed_task"
                      : "/dashboard"
                  }
                >
                  Task {task_Edit.task_Status}
                </Link>
              </li>
            <li className="breadcrumb-item active">{task_Id}</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-2"></div>
          <div className="card card-body col-xl-8">
            <div className="m-5">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="tab-pane fade show active profile-overview">
                  <h5 className="card-title">Task Details</h5>
                  {/* Task Name */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Task Name</div>
                    <div className="col-lg-9 col-md-8">
                      <input
                        name="task_Name"
                        type="text"
                        className="form-control"
                        value={task_Edit.task_Name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">
                      <input
                        name="task_Phone"
                        type="text"
                        className="form-control"
                        value={task_Edit.task_Phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Task Address</div>
                    <div className="col-lg-9 col-md-8">
                      <input
                        name="task_Address"
                        type="text"
                        className="form-control"
                        value={task_Edit.task_Address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Description</div>
                    <div className="col-lg-9 col-md-8">
                      <textarea
                        name="task_Desc"
                        className="form-control"
                        value={task_Edit.task_Desc}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Status */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Status</div>
                    <div className="col-lg-9 col-md-8">
                      <select
                        name="task_Status"
                        className="form-control"
                        value={task_Edit.task_Status}
                        onChange={handleChange}
                        required
                      >
                        <option value="Unassigned">Unassigned</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  {/* Branch */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Branch</div>
                    <div className="col-lg-9 col-md-8">
                      {/* Show the branch name */}
                      <input
                        name="branch_Id"
                        type="text"
                        className="form-control"
                        value={branchName}
                        readOnly
                        disabled
                      />
                    </div>
                  </div>
                 
                  <div className="text-center">
                      <button className="btn btn-primary" disabled={loading}>
                        {loading ? "Updating..." : "Update Task"}
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </section>
    </main>
  );
};

export default Edit_task;
