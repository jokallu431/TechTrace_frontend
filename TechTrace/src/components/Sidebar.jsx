// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router";
// import { useEffect } from "react";
// const Sidebar = ({isOpen, sidebarData}) => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };
//   return (
//   <aside id="sidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
//    <ul className="sidebar-nav" id="sidebar-nav">
//         {/* Components Dropdown */}
//         <li className="nav-item">
//           <button
//             className="nav-link"
//             onClick={() => toggleDropdown("components")}
//           >
//             <i className="bi bi-menu-button-wide"></i>
//             <span>Components</span>
//             <i className="bi bi-chevron-down ms-auto"></i>
//           </button>
//           <ul className={`nav-content ${openDropdown === "components" ? "show" : "hidden"}`}>
//             <li>
//               <a href="components-alerts.html">
//                 <i className="bi bi-circle"></i>
//                 <span>Alerts</span>
//               </a>
//             </li>
//             <li>
//               <a href="components-accordion.html">
//                 <i className="bi bi-circle"></i>
//                 <span>Accordion</span>
//               </a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     {/*  */}
//   </aside>
// );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";

const Sidebar = ({ isOpen, sidebarData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
    navigate("/dashboard");
  };

  return (
    <aside id="sidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="sidebar-nav">
        {sidebarData.map((item, index) => (
          <li key={index} className="nav-item ">
            {item.heading ? (
              <h6 className="nav-heading">{item.name}</h6>
            ) : item.sub_items ? (
              <>
                <button className="nav-link" onClick={() => toggleDropdown(item.name)}>
                  <i className={item.icon}></i>
                  <span>{item.name}</span> 
                  <i className={`bi bi-chevron-down ms-auto transition ${openDropdown === item.name ? "" :"rotate-180"}`}></i>
                </button>
                <ul className={`nav-content ${openDropdown === item.name ? "show" : "hidden"}`}>
                  {item.sub_items.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <NavLink to={sub.link}>
                        <i className={sub.icon}></i>
                        <span>{sub.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.link} className="nav-link">
                <i className={item.icon}></i>
                <span>{item.name}</span> 
              </Link>
            )}
          </li>
        ))}
      </ul>
      <style>
        {`
          .rotate-180 {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </aside>
  );
};

export default Sidebar;
