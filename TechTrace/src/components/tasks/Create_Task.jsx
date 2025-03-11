import { Link, useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import { branchList, loadUserList, accessoriesList } from "../api"; 


const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    task_Name: "",
    task_Phone: "",
    task_Address: "",
    task_Desc: "",
    branch_Id: "",
    technician: "",
    accessories: [],
  });
  const [branches, setBranches] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    branchList(setBranches, () => console.error("Failed to load branches."));
    loadUserList(
      (data) => setTechnicians(data.filter((user) => user.role === "Technician")),
      () => console.error("Failed to load technicians.")
    );
    accessoriesList(setAccessories, () => console.error("Failed to load accessories."));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle accessory selection and quantity
  const handleAccessoryChange = (e, acc_Id) => {
    const isChecked = e.target.checked;
    setTaskData((prev) => {
      let updatedAccessories = [...prev.accessories];

      if (isChecked) {
        updatedAccessories.push({ accessories_Id: acc_Id, quantity: 1 });
      } else {
        updatedAccessories = updatedAccessories.filter((item) => item.accessories_Id !== acc_Id);
      }

      return { ...prev, accessories: updatedAccessories };
    });
  };

  // Handle quantity change
  const handleQuantityChange = (e, acc_Id) => {
    const value = parseInt(e.target.value) || 1;
    setTaskData((prev) => {
      const updatedAccessories = prev.accessories.map((item) =>
        item.accessories_Id === acc_Id ? { ...item, quantity: value } : item
      );
      return { ...prev, accessories: updatedAccessories };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/task/create_task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...taskData,
          task_Desc: [taskData.task_Desc],
          task_Status: "Pending",
        }),
      });
      const result = await response.json();
      console.log("after", taskData);
      console.log("After", result);

      if (response.ok) navigate("/dashboard");
      else console.error("Error:", result);
    } catch (error) {
      console.error("Error creating task:", error);
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
                <Link to="/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item">Task</li>
            </ol>
          </nav>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-2"></div>
            <div className="card card-body col-xl-8">
              <div className="m-5">
                <form method="Post" onSubmit={handleSubmit}>
                  {[
                    { label: "Task Title", name: "task_Name", type: "text", placeholder: "Enter Task Title" },
                    { label: "Task Phone", name: "task_Phone", type: "text", placeholder: "Enter Task Contact" },
                    { label: "Task Address", name: "task_Address", type: "text", placeholder: "Enter Task Address" },
                  ].map((field, index) => (
                    <div className="row mb-3" key={index}>
                      <label className="col-md-4 col-lg-3 col-form-label">{field.label}</label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          type={field.type}
                          className="form-control"
                          name={field.name}
                          placeholder={field.placeholder}
                          value={taskData[field.name]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="row mb-3">
                    <label className="col-md-4 col-lg-3 col-form-label">Task Description</label>
                    <div className="col-md-8 col-lg-9">
                      <textarea
                        name="task_Desc"
                        className="form-control"
                        placeholder="Enter Task Description"
                        value={taskData.task_Desc}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {[
                    { label: "Branch", name: "branch_Id", options: branches, optionLabel: "branch_Name" },
                    { label: "Technician", name: "technician", options: technicians, optionLabel: "name" },
                  ].map((selectField, index) => (
                    <div className="row mb-3" key={index}>
                      <label className="col-md-4 col-lg-3 col-form-label">{selectField.label}</label>
                      <div className="col-md-8 col-lg-9">
                        <select
                          className="form-control"
                          name={selectField.name}
                          value={taskData[selectField.name]}
                          onChange={handleChange}
                        >
                          <option value="">Select {selectField.label}</option>
                          {selectField.options.map((option) => (
                            <option key={option._id} value={option._id}>{option[selectField.optionLabel]}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  <div className="row mb-3">
                    <label className="col-md-4 col-lg-3 col-form-label">Accessories</label>
                    <div className="col-md-8 col-lg-9">
                      <div className="dropdown">
                        <button className="btn btn-light form-control text-start dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          {taskData.accessories.length > 0 ? `Selected: ${taskData.accessories.length}` : "Select Accessories"}
                        </button>
                        <ul className="dropdown-menu p-2" style={{ width: "100%" }}>
                          {accessories.map((acc) => (
                            <li key={acc._id} className="dropdown-item">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                                id={acc._id}
                                value={acc._id}
                                checked={taskData.accessories.some((item) => item.accessories_Id === acc._id)}
                                onChange={(e) => handleAccessoryChange(e, acc._id)}
                              />
                              <label className="form-check-label me-2" htmlFor={acc._id}>{acc.accessories_Name}</label>
                              <input
                                type="number"
                                className="form-control d-inline w-25"
                                min="1"
                                value={taskData.accessories.find((item) => item.accessories_Id === acc._id)?.quantity || 1}
                                onChange={(e) => handleQuantityChange(e, acc._id)}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-primary">Create Task</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateTask;
