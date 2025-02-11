import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
const ForgotPassword = () => {
  const [visibleInput, setVisibleInput] = useState(null);

  const PasswordVisibility = (field) => {
    setVisibleInput(visibleInput === field ? null : field);
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Forgot Password</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">Forgot Password</li>
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
                {/* <!-- Change Password Form --> */}
                <form>
                  <div class="row mb-3">
                    <label
                      for="currentPassword"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Current Password
                    </label>
                    <div class="col-md-8 col-lg-9 position-relative">
                      <input
                        name="password"
                        type={
                          visibleInput === "currentPassword"
                            ? "text"
                            : "password"
                        }
                        class="form-control"
                        id="currentPassword"
                        placeholder="Enter Your Current Password"
                      />
                      <i
                        className={`bi ${
                          visibleInput === "currentPassword"
                            ? "bi-eye-slash"
                            : "bi-eye"
                        } position-absolute top-50 end-0 translate-middle-y me-4`}
                        style={{ cursor: "pointer" }}
                        onClick={() => PasswordVisibility("currentPassword")}
                      ></i>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="newPassword"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      New Password
                    </label>
                    <div class="col-md-8 col-lg-9 position-relative">
                      <input
                        name="newpassword"
                        type={
                          visibleInput === "newpassword" ? "text" : "password"
                        }
                        class="form-control"
                        id="newPassword"
                        placeholder="Enter Your New Password"
                      />
                      <i
                        className={`bi ${
                          visibleInput === "newpassword"
                            ? "bi-eye-slash"
                            : "bi-eye"
                        } position-absolute top-50 end-0 translate-middle-y me-4`}
                        style={{ cursor: "pointer" }}
                        onClick={() => PasswordVisibility("newpassword")}
                      ></i>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="renewpassword"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Confirm Password
                    </label>
                    <div class="col-md-8 col-lg-9 position-relative">
                      <input
                        name="renewpassword"
                        type={
                          visibleInput === "renewpassword" ? "text" : "password"
                        }
                        class="form-control"
                        id="renewPassword"
                        placeholder="Renter Your New Password"
                      />
                      <i
                        className={`bi ${
                          visibleInput === "renewpassword"
                            ? "bi-eye-slash"
                            : "bi-eye"
                        } position-absolute top-50 end-0 translate-middle-y me-4`}
                        style={{ cursor: "pointer" }}
                        onClick={() => PasswordVisibility("renewpassword")}
                      ></i>
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
            <div className="col-2"></div>
          </div>

          {/* <!-- End Profile Edit Form --> */}
        </section>
      </main>
    </>
  );
};

export default ForgotPassword;
