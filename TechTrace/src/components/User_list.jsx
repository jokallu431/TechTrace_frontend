// import React from "react";
// import "../App.css";
// import { useEffect, useState } from "react";
// import { Link } from "react-router"; // Use react-router-dom instead of react-router
// import { loadUserList } from "./api";

// const User_list = () => {
//   const [usersList, setUsersList] = useState([]);

//   useEffect(() => {
//     loadUserList(
//       (data) => {
//         const rows = data.map((user) => generateRow(user));
//         setUsersList(rows);
//       },
//       () => {
//         setUsersList([]);
//       }
//     );
//   }, []);

//   function generateRow(user) {
//     return (
//       <tr key={user._id}>
//         <td scope="row">{user._id}</td>
//         <td>
//           <img
//             src={`http://localhost:4000${user.image}`}
//             alt=""
//             className="avatar-sm rounded-circle me-2"
//           />
//           <a href="#" className="text-body">
//             {user.name}
//           </a>
//         </td>
//         <td>{user.email}</td>
//         <td>{user.role}</td>
//         <td>
//           <span className="badge badge-soft-success mb-0">{user.branch}</span>
//         </td>
//         <td>
// <ul className="list-inline mb-0">
//   <li className="list-inline-item">
//     <Link
//       data-bs-toggle="tooltip"
//       data-bs-placement="top"
//       title="Edit"
//       className="px-2 text-primary"
//       to={`../edit/${user._id}`}
//     >
//       <i className="bx bx-pencil font-size-18"></i>
//     </Link>
//   </li>
//   <li className="list-inline-item">
//     <Link
//       to={`../view/${user._id}`}
//       data-bs-toggle="tooltip"
//       data-bs-placement="top"
//       title="Call"
//       className="px-2 text-primary"
//     >
//       <i className="bx bx-phone font-size-18"></i>
//     </Link>
//   </li>
//   <li className="list-inline-item">
//     <Link
//       to={`../view/${user._id}`}
//       data-bs-toggle="tooltip"
//       data-bs-placement="top"
//       title="View"
//       className="px-2 text-primary"
//     >
//       <i className="bx bx-show font-size-18"></i>
//     </Link>
//   </li>
//   <li className="list-inline-item">
//     <Link
//       to="delete"
//       data-bs-toggle="tooltip"
//       data-bs-placement="top"
//       title="Delete"
//       className="px-2 text-primary"
//     >
//       <i className="bx bx-trash font-size-18"></i>
//     </Link>
//   </li>
// </ul>
//         </td>
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
//                   User List{" "}
//                   <span className="text-muted fw-normal ms-2">({usersList.length})</span>
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

//           {usersList.length === 0 ? (
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
//                         <th scope="col">Branch</th>
//                         <th scope="col">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>{usersList}</tbody>
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
//                       <i className="mdi mdi-chevron-left"></i>
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
//                       <i className="mdi mdi-chevron-right"></i>
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

// export default User_list;

import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router";
import { loadUserList } from "./api";
import Pagination from "./Pagination"; // Import the Pagination component

const Users_List = () => {
  const [UsersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadUserList(
      (data) => setUsersList(data),
      () => setUsersList([])
    );
  }, [UsersList]);

  const totalPages = Math.ceil(UsersList.length / itemsPerPage);
  const displayedUsersList = UsersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:4000/users/delete_user/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("User deleted successfully!");
        // Refresh the user list (optional: filter out the deleted user)
        // setUsers(users.filter((user) => user._id !== id));
        navigate("/dashboard");
      } else {
        alert(result.message || "Failed to delete user");
      }
    } catch (error) {
      alert("Error deleting user");
      console.error("Delete error:", error);
    }
  };

  return (
    <main id="main" className="main">
      <div className="container w-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="card-title">
              UsersList List{" "}
              <span className="text-muted fw-normal ms-2">
                ({UsersList.length})
              </span>
            </h5>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="../edit" className="btn btn-primary">
              <i className="bx bx-plus me-1"></i> Add New
            </Link>
          </div>
        </div>

        {UsersList.length === 0 ? (
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
                    <th scope="col">Sr No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedUsersList.map((UsersList, index) => (
                    <tr key={UsersList._id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{UsersList.name}</td>
                      <td>{UsersList.email}</td>
                      <td>{UsersList.role}</td>
                      <td>{UsersList.branch}</td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                              className="px-2 text-primary"
                              to={`./edit_user/${UsersList._id}`}
                            >
                              <i className="bx bx-pencil font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to={`tel:${UsersList.phone}`}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Call"
                              className="px-2 text-primary"
                            >
                              <i className="bx bx-phone font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to={`./view_user/${UsersList._id}`}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                              className="px-2 text-primary"
                            >
                              <i className="bx bx-show font-size-18"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <button
                              onClick={() => handleDelete(UsersList._id)}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                              className="px-2 text-primary border-0 bg-transparent"
                            >
                              <i className="bx bx-trash font-size-18"></i>
                            </button>
                          </li>
                        </ul>
                      </td>
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
                  {Math.min(currentPage * itemsPerPage, UsersList.length)} of{" "}
                  {UsersList.length} entries
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

export default Users_List;
