import { Link, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { loadUserList } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit_user = () => {
  const { id } = useParams(); // Get user ID from URL params
  const navigate = useNavigate();

  const [branchesList, setBranches] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    branch: "",
    role: "",
    image: null,
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    loadUserList(
      (data) => {
        const user = data.find((u) => u._id === id);
        if (user) {
          setUserData({
            name: user.name || "",
            phone: user.phone || "",
            email: user.email || "",
            branch: user.branch || "",
            role: user.role || "",
            image: user.image || null,
          });
        }
      },
      () => {
        toast.error("Failed to load user data.");
      }
    );
  }, [id]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch("http://localhost:4000/branch/branch_list");
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setUserData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleDelete = () => {
    setFile(null);
    setUserData((prev) => ({ ...prev, image: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("email", userData.email);
    formData.append("branch", userData.branch);
    formData.append("role", userData.role);
    if (userData.image instanceof File) {
      formData.append("image", userData.image);
    }

    try {
      const response = await fetch(`http://localhost:4000/users/update_user/${id}`, {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Profile Updated successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error updating profile");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Edit User Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active">
            <Link to="/dashboard/user_list">UserList</Link>
            </li>
            <li className="breadcrumb-item active">
            EditUser
            </li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-2"></div>
          <div className="card card-body col-xl-8">
            <div className="m-5">
              <form method="Post" onSubmit={handleSubmit}>
                {/* Profile Image Upload */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div className="col-md-8 col-lg-9">
                    {file ? (
                      <img src={file} alt="Profile" style={{ width: 80, height: 70, borderRadius: 5 }} />
                    ) : userData.image ? (
                      <img src={`http://localhost:4000${userData.image}`} alt="Profile" style={{ width: 80, height: 70, borderRadius: 5 }} />
                    ) : null}
                    <div className="pt-2">
                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png"
                        className="d-none"
                        id="profileImageInput"
                        onChange={handleImageUpload}
                      />
                      {file == null ? (
                        <label htmlFor="profileImageInput" className="btn btn-primary btn-sm">
                          <i className="bi bi-upload"></i> Upload
                        </label>
                      ) : (
                        <button className="btn btn-danger btn-sm" title="Remove my profile image" onClick={handleDelete}>
                          <i className="bi bi-trash"></i> Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Username */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">Username</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="name" type="text" className="form-control" value={userData.name} onChange={handleChange} required />
                  </div>
                </div>

                {/* Phone */}
                <div className="row mb-3">
                  <label
                      for="Phone"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Phone
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        id="Phone"
                        value={userData.phone}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="Email"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="Email"
                        value={userData.email}
                        required
                      />
                    </div>
                  </div>
             {/* Branch */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">Branch</label>
                  <div className="col-md-8 col-lg-9">
                    <select name="branch" className="form-control" value={userData.branch} onChange={handleChange} required>
                      <option>Select Branch</option>
                      {branchesList.map((branch) => (
                        <option key={branch._id} value={branch.branch_Name}>
                          {branch.branch_Name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Role */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">Role</label>
                  <div className="col-md-8 col-lg-9">
                    <select name="role" className="form-control" value={userData.role} onChange={handleChange} required>
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Technician">Technician</option>
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-primary">Update Profile</button>
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

export default Edit_user;

