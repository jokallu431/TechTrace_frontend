import React from "react";
import Edit_user from "./components/users/Edit_user";
import View_user from "./components/users/View_user";
import "../src/components/App.css";
import { BrowserRouter,Routes,Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layouts/Layout";
import Login from "./components/Pages/Login";
import Tech_Layout from "./components/layouts/Tech_Layout";
import User_list from "./components/users/User_list";
import User_profile from "./components/users/User_profile";
import Create_profile from "./components/users/Create_profile";
import CreateBranch from "./components/branches/CreateBranch";
import BranchList from "./components/branches/BranchList";
import CreateTask from "./components/tasks/Create_Task";
import Pending_List from "./components/tasks/PendingList";
import UnassignedList from "./components/tasks/UnassignedList";
import Assigned_List from "./components/tasks/AssignedList";
import Completed_List from "./components/tasks/CompletedList";
import ViewTask from "./components/tasks/View_task";
import View_map from "./components/tasks/View_map";
import Create_Accessories from "./components/accessories/Create_Accessories";
import Accessories_List from "./components/accessories/Accessories_List";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Edit_branch from "./components/branches/Edit_branch";
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
          <Route path="/dashboard/user_list/edit_user/:id" element={<Edit_user />} />
          <Route path="/dashboard/user_list/view_user/:id" element={<View_user />} />
          <Route path="create_branch" element={<CreateBranch />} />
          <Route path="branch_list" element={<BranchList />} />
          <Route path="/dashboard/branch_list/edit_branch/:branch_Id" element={<Edit_branch />} />
          <Route path="/dashboard/branch_list/view_branch/:branch_Id" element={<View_user />} />
          <Route path="Create_task" element={<CreateTask />} />
          <Route path="pending_task" element={<Pending_List />} />
          <Route path="unassigend_task" element={<UnassignedList />} />
          <Route path="assigend_task" element={<Assigned_List />} />
          <Route path="completed_task" element={<Completed_List />} />
          <Route path="/dashboard/unassigend_task/view_task/:id" element={<ViewTask />} />
          <Route path="/dashboard/assigend_task/view_task/:id" element={<ViewTask />} />
          <Route path="/dashboard/pending_task/view_task/:id" element={<ViewTask />} />
          <Route path="/dashboard/completed_task/view_task/:id" element={<ViewTask />} />
          <Route path="/dashboard/unassigend_task/view_maps" element={<View_map />} />
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
