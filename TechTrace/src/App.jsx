import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Tech_Layout from "./components/Tech_Layout";
import Main_Content from "./components/Main_Content";
import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./components/Layout";
import User_profile from "./components/User_profile";
import Create_profile from "./components/Create_profile";
function App() {
 
  return (
    <>
     <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* Protected Routes */}
          <Route path="/dashboard" element={<Tech_Layout />}>
          <Route path="create_profile" element={<Create_profile />} />
          <Route path="profile" element={<User_profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
