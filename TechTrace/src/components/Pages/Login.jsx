import React from 'react'
import { useRef } from 'react';
import { Link, useNavigate} from 'react-router';
const Login = () => {
  const emailRef = useRef();
        const passwordRef = useRef();
        const navigate = useNavigate();
        const navigateTo = (path) => () => {
            navigate(path);
        };
        const handleSubmit = (e) => { 
        e.preventDefault();

        // Collect form data using useRef
        const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        };

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formData),
        redirect: "follow"
        };
        
        console.log("formdata",formData);
       
        fetch("https://tech-trace-backend.vercel.app/users/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("Login successful:", result);
          localStorage.setItem("token", result.token);
          // Navigate to another page on success
          fetchUserDetails(result.token);
        })
        .catch((error) => console.error("Error while logging", error));
    };
    const fetchUserDetails = (token) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
    
        fetch("https://tech-trace-backend.vercel.app/users/verify", {
          method: "GET",
          headers: myHeaders,
        })
          .then((response) => response.json())
          .then((userDetails) => {
            console.log("User details fetched:", userDetails);
              localStorage.setItem("role", userDetails.role);
              localStorage.setItem("id", userDetails._id);
            // Redirect to dashboard
            navigateTo("/dashboard",)(); // Replace with your routing logic

            console.log("after navigate",userDetails.role);
          })
      };
  return (
    <>
<div className="container ">

<section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div className="d-flex justify-content-center py-4">
          <a href="index.html" className="logo d-flex align-items-center w-auto">
            <img src="src/assets/img/tech_logo.png" alt=""/>
            <span className="d-none d-lg-block">TechTrace</span>
          </a>
        </div>
        {/* <!-- End Logo --> */}

        <div className="card mb-3">

          <div className="card-body">

            <div className="pt-4 pb-2">
              <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
              <p className="text-center small">Enter your username & password to login</p>
            </div>

            <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

              <div className="col-12">
                <label for="yourUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="email" ref={emailRef} name="username" className="form-control" id="yourUsername" required/>
                  <div className="invalid-feedback">Please enter your username.</div>
                </div>
              </div>

              <div className="col-12">
                <label for="yourPassword" className="form-label">Password</label>
                <input type="password" ref={passwordRef} name="password" className="form-control" id="yourPassword" required/>
                <div className="invalid-feedback">Please enter your password!</div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary w-100">Login</button>
              </div>
            </form>

          </div>
        </div>

        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> */}
          Designed by <Link>Kallupurakal Joshua Francis</Link>
        </div>

      </div>
    </div>
  </div>

</section>

</div>
    </>
  )
}

export default Login;