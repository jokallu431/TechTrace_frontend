// import React from "react";
// import "../App.css";
// import { useEffect, useState } from "react";
// import { Link } from "react-router"; // Use react-router-dom instead of react-router
// import { loadaccessoriesList } from "./api";

// const Accessories_List = () => {
//   const [accessoriesList, setaccessoriesList] = useState([]);

//   useEffect(() => {
//     loadaccessoriesList(
//       (data) => {
//         const rows = data.map((accessories) => generateRow(accessories));
//         setaccessoriesList(rows);
//       },
//       () => {
//         setaccessoriesList([]);
//       }
//     );
//   }, []);

//   function generateRow(accessories) {
//     return (
//       <tr key={accessories._id}>
//         <td scope="row">{accessories._id}</td>
//         <td>
//             {accessories.name}
//         </td>
//         <td>{accessories.email}</td>
//         <td>{accessories.role}</td>
//       </tr>
//     );
//   }
//   return (
//     <>
//       <main id="main" className="main">
//         <div className="container w-80">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <h5 className="card-title">
//                   accessories List{" "}
//                   <span className="text-muted fw-normal ms-2">({accessoriesList.length})</span>
//                 </h5>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
//                 <div>
//                   <Link
//                     to="../edit" // Link to the add route
//                     className="btn btn-primary"
//                   >
//                     <i className="bx bx-plus me-1"></i> Add New
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {accessoriesList.length === 0 ? (
//             <div className="d-flex justify-content-center">
//               <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Please wait...</span>
//               </div>
//             </div>
//           ) : (
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="table-responsive">
//                   <table className="table project-list-table table-nowrap align-middle table-borderless">
//                     <thead>
//                       <tr>
//                         <th scope="col">Sr No.</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Role</th>
//                       </tr>
//                     </thead>
//                     <tbody>{accessoriesList}</tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="row g-0 align-items-center pb-4">
//             <div className="col-sm-6">
//               <div>
//                 <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <div className="float-sm-end">
//                 <ul className="pagination mb-sm-0">
//                   <li className="page-item disabled">
//                     <a href="#" className="page-link">
//                       <i className="bi bi-chevron-left"></i>
//                     </a>
//                   </li>
//                   <li className="page-item active">
//                     <a href="#" className="page-link">
//                       1
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a href="#" className="page-link">
//                       2
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a href="#" className="page-link">
//                       3
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a href="#" className="page-link">
//                       4
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a href="#" className="page-link">
//                       5
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a href="#" className="page-link">
//                       <i className="bi bi-chevron-right"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Accessories_List;

import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router";
import { accessoriesList } from "./api";
import Pagination from "./Pagination"; // Import the Pagination component

const Accessories_List = () => {
  const [accessories, setAccessories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    accessoriesList(
      (data) => setAccessories(data),
      () => setAccessories([])
    );
  }, []);

  const totalPages = Math.ceil(accessories.length / itemsPerPage);
  const displayedaccessories = accessories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              Accessories List <span className="text-muted fw-normal ms-2">({accessories.length})</span>
            </h5>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="../edit" className="btn btn-primary">
              <i className="bx bx-plus me-1"></i> Add New
            </Link>
          </div>
        </div>

        {accessories.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Please wait...</span>
            </div>
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
                  </tr>
                </thead>
                <tbody>
                  {displayedaccessories.map((accessories, index) => (
                    <tr key={accessories._id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{accessories.accessories_Name}</td>
                      <td>{accessories.accessories_Desc}</td>
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
                  {Math.min(currentPage * itemsPerPage, accessories.length)} of {accessories.length} entries
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
