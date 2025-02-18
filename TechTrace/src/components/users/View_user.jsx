import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { loadUserList } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const View_user = () => {
  const { id } = useParams(); // Get user ID from URL params

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    branch: "",
    role: "",
    image: null,
  });

//   const [file, setFile] = useState(null);

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
        toast.success("Data loaded successfully");
      },
      () => {
        toast.error("Failed to load user data.");
      }
    );
  }, [id]);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>View User Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/dashboard/user_list">UserList</Link>
            </li>
            <li className="breadcrumb-item active">ViewUser</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-2"></div>
          <div className="card card-body col-xl-8">
            <div className="m-5">
              <form method="Post">
                {/* Profile Image Upload */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Profile Image
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <img
                      src={`http://localhost:4000${userData.image}`}
                      alt="Profile"
                      style={{ width: 80, height: 70, borderRadius: 5 }}
                    />
                  </div>
                </div>

                {/* Username */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Username
                  </label>
                  <div className="col-md-8 col-lg-9">{userData.name}</div>
                </div>

                {/* Role */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Role
                  </label>
                  <div className="col-md-8 col-lg-9">{userData.role}</div>
                </div>

                {/* Phone */}
                <div className="row mb-3">
                  <label
                    for="Phone"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Phone
                  </label>
                  <div className="col-md-8 col-lg-9">{userData.phone}</div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Email"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-md-8 col-lg-9">{userData.email}</div>
                </div>
                {/* Branch */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Branch
                  </label>
                  <div className="col-md-8 col-lg-9">{userData.branch}</div>
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

export default View_user;
