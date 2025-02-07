import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import sidebarData from "./Data";
import { Outlet, useLocation } from "react-router";
import '../assets/css/style.css';

const Tech_Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  let [roleSpecificSidebarData, setRoleSpecificSidebarData] = useState([]);
  // const [role, setRole] = useState("Admin");
  const [userRole, setUserRole] = useState("Admin"); // Change this dynamically

  useEffect(() => {
    setUserRole(localStorage.getItem("role"));
    console.log("role", userRole);
  }, []);

  useEffect(() => {
    setRoleSpecificSidebarData(
      userRole == "Admin" ? sidebarData.admin : sidebarData.technician
    );
  }, [userRole]);

  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard/");
  return (
    <div className={`app-container ${isSidebarOpen ? "toggle-sidebar" : ""}`}>
      {/*  <!-- ======= Header ======= --> */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="main-layout">
        {/* <!-- ======= Sidebar ======= --> */}
        <Sidebar isOpen={isSidebarOpen} sidebarData={roleSpecificSidebarData} />

        <div className="main-content">
          {/* <!-- ======= Main Section ======= --> */}
          {isDashboard ? <Outlet /> : <Main />}
          {/* <Main/> */}
          {/* <!-- End #main --> */}

          {/* <!-- ======= Footer ======= --> */}
          <Footer />
          {/* <!-- End Footer --> */}
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Tech_Layout;
