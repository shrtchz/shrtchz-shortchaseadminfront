import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../styles/login.css";
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate()
  const location=useLocation()

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    localStorage.setItem('user','admin')
    console.log(location)
  
    if (username === "admin" && password === "12345678") {
      console.log("Username:", username);
      console.log("Password:", password);
    //  navigate('/dashboard')
    onLogin(true)
    } 
    else {
      setErrorMessage("Invalid login details");
    }
   
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://shrtchz.pw/api/auth/login', { username, password });
  //     console.log(username)
  //     if (response.data.success) {
  //       localStorage.setItem('token', response.data.token);
  //       // navigate('/dashboard');
  //     } else {
  //       console.log(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // console.log(response.data.message);
  //   }
  // }

  return (
   <div className="maincontainer">
     <div className="login-container">
      <div className="heada ">
        <img src={logo} alt="logo" style={{ width: "50px", height:'50px', }} />
        <h1> Admin Login</h1>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" >Login</button>
      </form>
    </div>
   </div>
  );
};

export default Login;
