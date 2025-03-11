import { Link, useNavigate } from "react-router";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create_profile = () => {
  const [branches_list, setBranches] = useState([]);
  // const branchesRef = useRef(null);
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch("http://localhost:4000/branch/branch_list"); 
        const data = await response.json();
        setBranches(data);
        console.log("setBranches",branches_list);
        
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);
  
  useEffect(() => {
    console.log("Updated branches state:", branches_list);
  }, [branches_list]);

  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleDelete() {
    setFile(null);
  }

  const imageRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const branchesRef = useRef(null);
  const roleRef = useRef();
  const navigate = useNavigate();

  const validateFields = () => {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!nameRegex.test(nameRef.current.value)) {
      toast.error(
        "Invalid Name: Must be at least 3 characters and letters only."
      );
      return false;
    }
    if (!phoneRegex.test(phoneRef.current.value)) {
      toast.error("Invalid Phone Number: Must be 10 digits.");
      return false;
    }
    if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Invalid Email Address.");
      return false;
    }
    if (!passwordRegex.test(passwordRef.current.value)) {
      toast.error(
        "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }
    return true;
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;
    // Collect form data using useRef
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("phone", phoneRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("branch", branchesRef.current.value);
    formData.append("role", roleRef.current.value);

    // Append the selected file correctly
    if (imageRef.current.files.length > 0) {
      formData.append("image", imageRef.current.files[0]);
    }

    try {
      const response = await fetch("http://localhost:4000/users/profile", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      toast.success("Profile created successfully!");
      console.log("Profile created successfully:", result);

      if (response.ok) {
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error creating profile");
        console.error("Error:", result);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Error creating profile:", error);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">Users</li>
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
                  <div className="row mb-3">
                    <label
                      for="profileImage"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Profile Image
                    </label>
                    <div className="col-md-8 col-lg-9">
                      {file != null ? (
                        <img
                          src={file}
                          alt="Profile"
                          style={{ width: 80, height: 70, borderRadius: 5 }}
                        />
                      ) : (
                        ""
                      )}
                      <div className="pt-2">
                        <input
                          type="file"
                          name="image"
                          accept="image/jpeg,image/jpg,image/png"
                          data-original-title="upload photos"
                          onChange={handleChange}
                          ref={imageRef}
                          className="d-none"
                          id="profileImageInput"
                          required
                        />
                        {file == null ? (
                          <label
                            for="profileImageInput"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="bi bi-upload"></i> Upload
                          </label>
                        ) : (
                          <button
                            className="btn btn-danger btn-sm"
                            title="Remove my profile image"
                            onClick={handleDelete}
                          >
                            <i className="bi bi-trash"></i> Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="UserName"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Username
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="UserName"
                        type="text"
                        className="form-control"
                        id="UserName"
                        ref={nameRef}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="Password"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-md-8 col-lg-9 position-relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="Password"
                        ref={passwordRef}
                        required
                      />
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye-slash" : "bi-eye"
                        } position-absolute top-50 end-0 translate-middle-y me-4`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="branch"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Branch
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <select
                        className="form-control"
                        name="Branches"
                        id="Branches"
                        ref={branchesRef}
                        required
                      >
                        <option defaultValue="Select Branch">
                          Select Branch
                        </option>
                        {branches_list.map((branch) => (
                          <option key={branch._id} value={branch.branch_Name}>
                            {branch.branch_Name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="Role"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Role
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <select
                        className="form-control"
                        name="role"
                        aria-placeholder="Select Role"
                        required
                        ref={roleRef}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Technician">Technician</option>
                      </select>
                    </div>
                  </div>

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
                        ref={phoneRef}
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
                        ref={emailRef}
                        required
                      />
                    </div>
                  </div>

                  {/* <div className="row mb-3">
                  <label
                    for="Branch Address"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Branch Address
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="Branch address"
                      type="text"
                      className="form-control"
                      id="Branch Address"
                    />
                  </div>
                </div> */}

                  <div className="text-center">
                    <button className="btn btn-primary">Create Profile</button>
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

export default Create_profile;
