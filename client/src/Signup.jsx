import React from "react";
import { useState } from "react";
import "./App.css";
import {Link,useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [dob, setDob] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {name, email, dob, password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  }

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="login-box">
            <h2 className="login-title">Register</h2>
            <div className="login-avatar">
              <img src="./images/user.png" alt="user" />
            </div>
            <div className="login-input">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="login-input">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input">
              <i className="fa fa-calendar"></i>
              <input
                type="date"
                placeholder="DOB"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="login-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button className="login-button">Register</button>
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
