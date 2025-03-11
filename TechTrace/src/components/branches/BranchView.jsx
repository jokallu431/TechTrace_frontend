import { Link, useParams } from "react-router";
import React, { useEffect, useState,useRef } from "react";
import { branch_List_Id } from "../api"; // Ensure this function fetches a branch by ID
import { toast } from "react-toastify";


const BranchView = () => {
  const { branch_Id } = useParams(); // Get branch ID from URL params

  const [branchData, setBranchData] = useState({
    branch_Name: "",
    branch_Location: "",
    branch_Phone: "",
  });

  const toastShown = useRef(false);

useEffect(() => {
  branch_List_Id(
    branch_Id,
    (data) => {
      if (!toastShown.current) {
        toast.success("Branch data loaded successfully!");
        toastShown.current = true;
      }
      setBranchData(data);
    },
    () => {
      toast.error("Failed to load branch data.");
    }
  );
}, [branch_Id]);


  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>View Branch Details</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/dashboard/branch_list">Branch List</Link>
            </li>
            <li className="breadcrumb-item active">View Branch</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-2"></div>
          <div className="card card-body col-xl-8">
            <div className="m-5">
              <form method="POST">
                {/* Branch Name */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Branch Name
                  </label>
                  <div className="col-md-8 col-lg-9">{branchData.branch_Name}</div>
                </div>

                {/* Branch Location */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Location
                  </label>
                  <div className="col-md-8 col-lg-9">{branchData.branch_Address}</div>
                </div>

                {/* Branch Phone */}
                <div className="row mb-3">
                  <label className="col-md-4 col-lg-3 col-form-label">
                    Phone
                  </label>
                  <div className="col-md-8 col-lg-9">{branchData.branch_Phone}</div>
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

export default BranchView;
