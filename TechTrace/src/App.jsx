import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Tech_Layout from "./components/Tech_Layout";
import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./components/Layout";
import User_profile from "./components/User_profile";
import Create_profile from "./components/Create_profile";
import User_list from "./components/User_list";
import CreateBranch from "./components/CreateBranch";
import BranchList from "./components/BranchList";
import CreateTask from "./components/Create_Task";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./components/ForgotPassword";
import Create_Accessories from "./components/Create_Accessories";
import Accessories_List from "./components/Accessories_List";
import Pending_List from "./components/PendingList";
import UnassignedList from "./components/UnassignedList";
import Assigned_List from "./components/AssignedList";
import Completed_List from "./components/CompletedList";
function App() {
 
  return (
    <>
     <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
          </Route>
          {/* Protected Routes */}
          <Route path="/dashboard" element={<Tech_Layout />}>
          <Route path="create_profile" element={<Create_profile />} />
          <Route path="user_list" element={<User_list />} />
          <Route path="profiles" element={<User_profile />} />
          <Route path="create_branch" element={<CreateBranch />} />
          <Route path="branch_list" element={<BranchList />} />
          <Route path="Create_task" element={<CreateTask />} />
          <Route path="pending_task" element={<Pending_List />} />
          <Route path="unassigend_task" element={<UnassignedList />} />
          <Route path="assigend_task" element={<Assigned_List />} />
          <Route path="completed_task" element={<Completed_List />} />
          <Route path="create_accessories" element={<Create_Accessories />} />
          <Route path="accessories_list" element={<Accessories_List />} />
          <Route path="forgot_Password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
