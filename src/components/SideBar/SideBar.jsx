import React, { useState } from "react";
// import '../../styles/sidebar.css'
import "../../styles/sidebar.css";
import styled from "styled-components";
import { NavLink, Link, Outlet } from "react-router-dom";
import * as FaIcons from  'react-icons/fa'
import * as AiIcons from  'react-icons/ai'
import * as IoIcons from  'react-icons/ri'
import * as RiIcons from  'react-icons/fa'
import * as CiIcons from 'react-icons/ci'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import { SidebarData } from "./SidebarData";
import SubMenu from './SubMenu'
import Headers from "../Headers";

const SideBar = ({isOpen,children}) => {
  const [activeChild, setActiveCild] =useState([])

  const handleactive=()=>{
    // let data=SidebarData.map((item, index)=>{
      
    // })
    setActiveCild(console.log("Hi"))

  }
  return (
   
   <div className="container">
    <div className={`sidebar ${isOpen ? 'close' : ''}`}>
       {SidebarData.map((item, index) =>{
        return(
          <NavLink onClick={handleactive} to={item.path} key={index} className="link" activeclassname="active">
            <div className="icon" >
              {item.icon}
            </div>
            <span className="label" style={{display: isOpen ?'none' : 'block'}}>
              {item.title}
            </span>
          </NavLink>
        )
      })} 
    </div>
    <main>
    <Headers/>
      {children}
    </main>
      <Outlet/>
   </div>
   
  );
};

export default SideBar;
