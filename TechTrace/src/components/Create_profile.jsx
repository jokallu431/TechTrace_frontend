import { Link, useNavigate } from "react-router";
import React from "react";
import { useRef, useState } from "react";

const Create_profile = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleDelete() {
    setFile(null);
  }
  
  const imageRef =useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const branchesRef = useRef();
  const roleRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      console.log("Profile created successfully:", result);
  
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
                  <div class="row mb-3">
                    <label
                      for="profileImage"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Profile Image
                    </label>
                    <div class="col-md-8 col-lg-9">
                      {file != null ? <img src={file} alt="Profile"style={{width:80,height:70,borderRadius:5}} /> : ""}
                      <div class="pt-2">
                        <input
                          type="file"
                          name="image"
                          accept="image/jpeg,image/jpg,image/png"
                          data-original-title="upload photos"
                          onChange={handleChange}
                          ref={imageRef} 
                          className="d-none"
                          id="profileImageInput"
                        />
                        {file == null ? <label
                          htmlFor="profileImageInput"
                          class="btn btn-primary btn-sm"
                        >
                          <i class="bi bi-upload"></i> Upload
                        </label>
                        :
                        <button
                          class="btn btn-danger btn-sm"
                          title="Remove my profile image"
                          onClick={handleDelete}
                        >
                          <i class="bi bi-trash"></i> Remove
                        </button>
                        
                        }
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="UserName"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Username
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="UserName"
                        type="text"
                        class="form-control"
                        id="UserName"
                        ref={nameRef}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="Password"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Password
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="password"
                        type="Password"
                        class="form-control"
                        id="Password"
                        ref={passwordRef}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="branch"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Branch
                    </label>
                    <div class="col-md-8 col-lg-9">
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
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="Role" class="col-md-4 col-lg-3 col-form-label">
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

                  <div class="row mb-3">
                    <label for="Phone" class="col-md-4 col-lg-3 col-form-label">
                      Phone
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="phone"
                        type="text"
                        class="form-control"
                        id="Phone"
                        ref={phoneRef}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="Email" class="col-md-4 col-lg-3 col-form-label">
                      Email
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="Email"
                        ref={emailRef}
                      />
                    </div>
                  </div>

                  {/* <div class="row mb-3">
                  <label
                    for="Branch Address"
                    class="col-md-4 col-lg-3 col-form-label"
                  >
                    Branch Address
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="Branch address"
                      type="text"
                      class="form-control"
                      id="Branch Address"
                    />
                  </div>
                </div> */}

                  <div class="text-center">
                    <button class="btn btn-primary">Create Profile</button>
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
