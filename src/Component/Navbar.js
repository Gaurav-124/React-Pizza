import React from 'react'
import Logo from "../assets/pizzaLogo.png"
import {Link} from "react-router-dom"
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
        <Link to ="/">Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/about">About us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to ="/">Home</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/about">About</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
      </div>
    </div>
  )
}

export default Navbar
