import { Link, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { branchList } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit_branch = () => {
  const { branch_Id } = useParams(); // Get Branch branch_Id from URL params
  const navigate = useNavigate();

  const [branch, setBranch] = useState({
    branch_Name: "",
    branch_Address: "",
    branch_Phone: "",
  });


  useEffect(() => {
    branchList(
      (data) => {
        const Branch = data.find((u) => u.branch_Id === branch_Id);
        console.log("Branch", Branch); // Log Branch data
        
        if (Branch) {
            setBranch({
            branch_Name : Branch.branch_Name || "",
            branch_Phone: Branch.branch_Phone || "",
            branch_Address: Branch.branch_Address || "",
          });
        }
      },
      () => {
        toast.error("Failed to load Branch data.");
      }
    );
  }, [branch_Id]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/branch/branch_list"
        );
        const data = await response.json();
        setBranch(data);
        
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("branch_Name", branch.branch_Name);
    formData.append("branch_Phone", branch.branch_Phone);
    formData.append("branch_Address", branch.branch_Address);
    try {
      const response = await fetch(
        `http://localhost:4000/branch/update_branch/${branch_Id}`,
        {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(branch),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Branch updated successfully!");
        console.log("Branch updated successfully:", result);
        
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error updating branch");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Error updating branch:", error);
    }
  };

 

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Edit Branch Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/dashboard/Branch_list">BranchList</Link>
            </li>
            <li className="breadcrumb-item active">EditBranch</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-2"></div>
          <div className="card card-body col-xl-8">
            <div className="m-5">
              <form method="Post" onSubmit={handleSubmit}>
                {/* Branch Name */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Branch Name
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="branch_Name"
                      type="text"
                      className="form-control"
                      value={branch.branch_Name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="row mb-3">
                  <label
                    for="Phone"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Branch Phone
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="branch_Phone"
                      type="text"
                      className="form-control"
                      id="Phone"
                      value={branch.branch_Phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Address"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Branch Address
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="branch_Address"
                      type="text"
                      className="form-control"
                      id="Address"
                      value={branch.branch_Address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Branch */}
                {/* <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Branch
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <select
                      name="branch"
                      className="form-control"
                      value={branch.branch}
                      onChange={handleChange}
                      required
                    >
                      <option>Select Branch</option>
                      {branch.map((branch) => (
                        <option
                          key={branch._branch_Id}
                          value={branch.branch_Name}
                        >
                          {branch.branch_Name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}

                {/* Role */}
                {/* <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Role
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <select
                      name="role"
                      className="form-control"
                      value={branch.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Technician">Technician</option>
                    </select>
                  </div>
                </div> */}

                <div className="text-center">
                  <button className="btn btn-primary">Update Branch</button>
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

export default Edit_branch;
