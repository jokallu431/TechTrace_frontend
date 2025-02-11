import { Link, useNavigate } from "react-router";
import React from "react";
import { useState } from "react";

const Create_Accessories = () => {
    const [AccessoriesName, setAccessoriesName] = useState("");
    const [AccessoriesQuantity, setAccessoriesQuantity] = useState("");
    const [AccessoriesDesc, setAccessoriesDesc] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      accessories_Name: AccessoriesName,
      accessories_Quantity: AccessoriesQuantity,
      accessories_Desc: AccessoriesDesc,
      };
    
      console.log("Data before sending:", data);
    try {
      const response = await fetch(
        "http://localhost:4000/accessories/create_accessories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // **IMPORTANT**
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Accessories created successfully:", result);

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
          <h1>Create Accessories</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Home</Link>
              </li>
              <li className="breadcrumb-item">Accessories</li>
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
                      Accessories Name
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Accessories Name"
                        value={AccessoriesName}
                        onChange={(e) => setAccessoriesName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Accessories Quantity
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Accessories Quantity"
                        style={{
                          appearance: "textfield", // Firefox
                          WebkitAppearance: "none", // Chrome, Safari, Edge
                          MozAppearance: "textfield" // Firefox
                        }}
                        value={AccessoriesQuantity}
                        onChange={(e) => setAccessoriesQuantity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="AccessoriesDesc"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      Accessories Description
                    </label>
                    <div class="col-md-8 col-lg-9">
                      <textarea
                        name="AccessoriesDesc"
                        type="text"
                        class="form-control"
                        id="AccessoriesDesc"
                        placeholder="Enter Accessories Description"
                        value={AccessoriesDesc}
                        onChange={(e) => setAccessoriesDesc(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <button class="btn btn-primary">Create Accessories</button>
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

export default Create_Accessories;
