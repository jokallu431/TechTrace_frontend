import React from "react";
import profile from "../assets/img/profile-img.jpg";
import { Link } from "react-router";
const Create_profile = () => {
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
            <div className="col-xl-8">
              <form>
                <div className="row mb-3">
                  <label
                    for="profileImage"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Profile Image
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <img src={profile} alt="Profile" />
                    <div className="pt-2">
                      <button
                        href="#"
                        className="btn btn-primary btn-sm"
                        type="file"
                        title="Upload new profile image"
                      >
                        <i className="bi bi-upload"></i>
                      </button>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        title="Remove my profile image"
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="fullName"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Full Name
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="fullName"
                      type="text"
                      className="form-control"
                      id="fullName"
                      defaultValue="Kevin Anderson"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    for="company"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Company
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="company"
                      type="text"
                      className="form-control"
                      id="company"
                      defaultValue="Lueilwitz, Wisoky and Leuschke"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Job" className="col-md-4 col-lg-3 col-form-label">
                    Job
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="job"
                      type="text"
                      className="form-control"
                      id="Job"
                      defaultValue="Web Designer"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Country"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Country
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="country"
                      type="text"
                      className="form-control"
                      id="Country"
                      defaultValue="USA"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Address"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Address
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      id="Address"
                      defaultValue="A108 Adam Street, New York, NY 535022"
                    />
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
                      defaultValue="(436) 486-3538 x29071"
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
                      defaultValue="k.anderson@example.com"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Twitter"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Twitter Profile
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="twitter"
                      type="text"
                      className="form-control"
                      id="Twitter"
                      defaultValue="https://twitter.com/#"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Facebook"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Facebook Profile
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="facebook"
                      type="text"
                      className="form-control"
                      id="Facebook"
                      defaultValue="https://facebook.com/#"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Instagram"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Instagram Profile
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="instagram"
                      type="text"
                      className="form-control"
                      id="Instagram"
                      defaultValue="https://instagram.com/#"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    for="Linkedin"
                    className="col-md-4 col-lg-3 col-form-label"
                  >
                    Linkedin Profile
                  </label>
                  <div className="col-md-8 col-lg-9">
                    <input
                      name="linkedin"
                      type="text"
                      className="form-control"
                      id="Linkedin"
                      defaultValue="https://linkedin.com/#"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
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
