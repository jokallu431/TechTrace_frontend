import { Link, useNavigate } from "react-router";
import React from "react";
import { useState } from "react";

const CreateBranch = () => {
    const [branchName, setBranchName] = useState("");
    const [branchPhone, setBranchPhone] = useState("");
    const [branchAddress, setBranchAddress] = useState("");

//   const branchNameRef = useRef();
//   console.log("refValue",branchNameRef);
  
//   const branchPhoneRef = useRef();
//   const branchAddressRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Collect form data using useRef
    // const formData = new FormData();
    // // formData.append("branch_Name", branchNameRef?.current.value);
    // // formData.append("branch_Phone", branchPhoneRef?.current.value);
    // // formData.append("branch_Address", branchAddressRef?.current.value);
    // console.log("before append",formData);
    // console.log("before append",branchName);
    // formData.append("branch_Name", branchName);
    // // formData.append("branch_Phone", branchPhone);
    // // formData.append("branch_Address", branchAddress);
    // console.log("after append",branchName);
    // console.log("formdata after append", formData);
    const data = {
        branch_Name: branchName,
        branch_Phone: branchPhone,
        branch_Address: branchAddress,
      };
    
      console.log("Data before sending:", data);
    

    try {
      const response = await fetch(
        "https://tech-trace-backend.vercel.app/branch/create_branch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // **IMPORTANT**
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Branch created successfully:", result);

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
          <h1>Create Branch</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">Branches</li>
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
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Branch Name
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Branch Name"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="branchPhone"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Branch Phone
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="branch_Phone"
                        type="text"
                        class="form-control"
                        id="branchPhone"
                        value={branchPhone}
                        onChange={(e) => setBranchPhone(e.target.value)}
                        placeholder="Enter Branch Contact"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="branchAddress"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Branch Address
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="branch_Address"
                        type="text"
                        class="form-control"
                        id="BranchAddress"
                        placeholder="Enter Branch Address"
                        value={branchAddress}
                        onChange={(e) => setBranchAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  

                  <div class="text-center">
                    <button class="btn btn-primary">Create Branch</button>
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

export default CreateBranch;
