import { Link, useNavigate } from "react-router";
import React,{ useState } from "react";
import View_map from "./View_map";


const ViewTask = () => {

  const [showMap, setShowMap] = useState(false); // State to toggle between map and profile view

  const toggleMap = () => {
    setShowMap(!showMap); // Toggle the state to show or hide the map
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>View Task</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/dashboard/unassigend_task"}>Task</Link>
              </li>
              <li className="breadcrumb-item">View</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        {showMap ? (
            <View_map /> // Display the map if showMap is true
            // <>
            //   map will be displayed here
            // </>
          ) : (

        <section className="section profile">
          {/* <!-- Profile Edit Form --> */}
          <div className="row">
            <div className="col-2"></div>
            <div className="card card-body col-xl-8">
              <div className="m-5 ">
                <div
                  class="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <h5 class="card-title">Profile Details</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Username</div>
                    <div class="col-lg-9 col-md-8">name</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Branch</div>
                    <div class="col-lg-9 col-md-8">branch</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Role</div>
                    <div class="col-lg-9 col-md-8">role</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Phone</div>
                    <div class="col-lg-9 col-md-8">phone</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">email</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Branch Address</div>
                    <div class="col-lg-9 col-md-8">
                      A108 Adam Street, New York, NY 535022
                    </div>
                  </div>

                  <div class="row">
                    
                    {/* <Link
                      to={`/dashboard/unassigend_task/view_maps/`}
                      className="px-2 text-primary"
                    >
                      Show Directions
                    </Link> */}
                    <button
                      onClick={toggleMap}
                      className="btn btn-primary mt-3"
                    >
                      Show Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>

          {/* <!-- End Profile Edit Form --> */}
        </section>)}
      </main>
    </>
  );
};

export default ViewTask;
