import { useState } from "react"
import Sidebar from "./Sidebar"
import React from "react";
import{ Link } from "react-router-dom";


function Navbar(){
//const[showSidebar,setShowSidebar] = useState(false)
//  const links = [
//    {
//      name: "Home",
//      path: "/"
//    },
//    {
//      name: "Company",
//      path: "/company"
//    },
//    {
//      name: "Services",
//      path: "/services"
//    },
//    {
//      name: "Projects",
//      path: "/projects"
//    }
//  ]

//  function closeSidebar(){
//    setShowSidebar(false)
//  }
  
  return(
    <>
    <div className="navbar container">
      <div><img src="./PNG/Groupe12@2x.png" alt="INFLEXIT" width="200" height="40"></img></div>
      <div className="navbar4">
      <div className="nav-links ">
     
      
      <Link to="/">Home</Link>
      <Link to="/technologies">Technologies</Link>
      
      
      
      </div>
      <div className="contact-us"><Link to="/contact" >Contact us <img  src="./PNG/vuesax-twotone-arrow-right@2x.png" alt="INFLEXIT" width="20" height="20"></img></Link>
      </div>
      </div>

    </div >
   
    
    </>
  )
}

export default Navbar;

