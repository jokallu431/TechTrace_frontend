import { Link,useNavigate} from "react-router";
import React, {useRef,useState,useEffect}from 'react'
import { verifyUser } from '../api';



const User_profile = () => {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
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
      const response = await fetch("https://tech-trace-backend.vercel.app/users/profile", {
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

  const [userDetails, setUserDetails] = useState([]);
    const userToken = localStorage.getItem("token");
    useEffect(() => {
        verifyUser(
            userToken,
        (result) => {
          setUserDetails(result);
        },
        () => {
            setUserDetails(null);
        }
      );
    }, []);
  console.log("Userdetails",userDetails);
  
  return (
    <>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li class="breadcrumb-item">Users</li>
              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section class="section profile">
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={`https://tech-trace-backend.vercel.app${userDetails.image}`} style={{width:80,height:80}} alt="Profile" class="rounded-circle" />
                  <h2>{userDetails.name}</h2>
                  <div class="social-links mt-2">
                    <a href="#" class="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="card">
                <div class="card-body pt-3">
                  {/* <!-- Bordered Tabs --> */}
                  <ul class="nav nav-tabs nav-tabs-bordered">
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div
                      class="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 class="card-title">Profile Details</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label ">Username</div>
                        <div class="col-lg-9 col-md-8">{userDetails.name}</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Branch</div>
                        <div class="col-lg-9 col-md-8">
                        {userDetails.branch}
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Role</div>
                        <div class="col-lg-9 col-md-8">{userDetails.role}</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Phone</div>
                        <div class="col-lg-9 col-md-8">
                          {userDetails.phone}
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">
                          {userDetails.email}
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Branch Address</div>
                        <div class="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      {/* <!-- Profile Edit Form --> */}
                      <form>
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
                          className="d-none"
                          id="profileImageInput"
                        />
                        {file == null ? <label
                          htmlFor="profileImageInput"
                          class="btn btn-primary btn-sm text-white"
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
                              defaultValue={userDetails.name}
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
                            <input
                              name="branch"
                              type="text"
                              class="form-control"
                              id="branch"
                              defaultValue={userDetails.branch}
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Role"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Role
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="role"
                              type="text"
                              class="form-control"
                              id="role"
                              defaultValue={userDetails.role}
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Phone"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              class="form-control"
                              id="Phone"
                              defaultValue={userDetails.phone}
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Email"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              class="form-control"
                              id="Email"
                              defaultValue={userDetails.email}
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* <!-- End Profile Edit Form --> */}
                    </div>

                    <div
                      class="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      {/* <!-- Change Password Form --> */}
                      <form>
                        <div class="row mb-3">
                          <label
                            for="currentPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              class="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="newPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              class="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="renewPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              class="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                      {/* <!-- End Change Password Form --> */}
                    </div>
                  </div>
                  {/* <!-- End Bordered Tabs --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default User_profile;
