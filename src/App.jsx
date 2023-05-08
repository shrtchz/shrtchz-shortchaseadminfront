import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import Login from "./pages/Login";
import Subadmin from "./pages/Subadmin";

import Dashboard from "./components/Dashboard";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Outlet,
// } from "react-router-dom";
import Accesslogs from "./components/contents/Accesslogs";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChatBox from './components/contents/ChatBox'
function App() {
  // const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  //   <Routes>
  //     {
  //       !localStorage.getItem('admin')?
  //       <Route element={<Login/>} path="/"/>
  //       :
  //       <Route path="" element={<Dashboard/>} />
  //     }
   
  //  </Routes>
  // <Login/>
  // {
    isLoggedIn ? <Dashboard/> :<Login onLogin={setIsLoggedIn}/>
  // }
  );
}

export default App;
