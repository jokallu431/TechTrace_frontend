// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { Link } from "react-router";
// import { accessoriesList } from "../api";
// import Pagination from "../Pages/Pagination"; // Import the Pagination component

// const Accessories_List = () => {
//   const [accessories, setAccessories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     accessoriesList(
//       (data) => setAccessories(data),
//       () => setAccessories([])
//     );
//   }, []);

//   const totalPages = Math.ceil(accessories.length / itemsPerPage);
//   const displayedaccessories = accessories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <main id="main" className="main">
//       <div className="container w-80">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <h5 className="card-title">
//               Accessories List <span className="text-muted fw-normal ms-2">({accessories.length})</span>
//             </h5>
//           </div>
//           <div className="col-md-6 d-flex justify-content-end">
//             <Link to="../edit" className="btn btn-primary">
//               <i className="bx bx-plus me-1"></i> Add New
//             </Link>
//           </div>
//         </div>

//         {accessories.length === 0 ? (
//           <div className="d-flex justify-content-center">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Please wait...</span>
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="table-responsive">
//               <table className="table project-list-table table-nowrap align-middle table-borderless">
//                 <thead>
//                   <tr>
//                     <th>Sr No.</th>
//                     <th>Name</th>
//                     <th>Description</th>
//                     <th>Quantity</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {displayedaccessories.map((accessories, index) => (
//                     <tr key={accessories._id}>
//                       <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                       <td>{accessories.accessories_Name}</td>
//                       <td>{accessories.accessories_Desc}</td>
//                       <td>{accessories.accessories_Quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination Component */}
//             <div className="row g-0 align-items-center pb-4">
//               <div className="col-sm-6">
//                 <p className="mb-sm-0">
//                   Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
//                   {Math.min(currentPage * itemsPerPage, accessories.length)} of {accessories.length} entries
//                 </p>
//               </div>
//               <div className="col-sm-6">
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={setCurrentPage}
//                 />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </main>
//   );
// };

// export default Accessories_List;

import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router";
import { accessoriesList } from "../api";
import Pagination from "../Pages/Pagination"; // Import the Pagination component

const Accessories_List = () => {
  const [accessories, setAccessories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Track loading state
  const [userRole, setUserRole] = useState(""); // Track user role
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true); // Start loading before fetching data
    const role = localStorage.getItem("role"); // Get user role from local storage
    setUserRole(role);
    
    accessoriesList(
      (data) => {
        setAccessories(data);
        setLoading(false); // Stop loading after data is received
      },
      () => {
        setAccessories([]);
        setLoading(false); // Stop loading on error
      }
    );
  }, []);

  const totalPages = Math.ceil(accessories.length / itemsPerPage);
  const displayedAccessories = accessories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Accessories List{" "}
              <span className="text-muted fw-normal ms-2">
                ({accessories.length})
              </span>
            </h5>
          </div>
          {userRole === "Admin" && ( // Show button only if user is Admin
            <div className="col-md-6 d-flex justify-content-end">
              <Link to="../edit" className="btn btn-primary">
                <i className="bx bx-plus me-1"></i> Add New
              </Link>
            </div>
          )}
        </div>

        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Please wait...</span>
            </div>
          </div>
        ) : accessories.length === 0 ? (
          // Show "Nothing to fetch" when no data is available
          <div className="text-center mt-5">
            <h5 className="mt-3">Nothing to fetch</h5>
            <p className="text-muted">No accessories available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedAccessories.map((accessory, index) => (
                    <tr key={accessory._id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{accessory.accessories_Name}</td>
                      <td>{accessory.accessories_Desc}</td>
                      <td>{accessory.accessories_Quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Component */}
            <div className="row g-0 align-items-center pb-4">
              <div className="col-sm-6">
                <p className="mb-sm-0">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, accessories.length)} of{" "}
                  {accessories.length} entries
                </p>
              </div>
              <div className="col-sm-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Accessories_List;
