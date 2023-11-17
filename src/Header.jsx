import React from "react";
import logo from "./images/logo2.png";


const Header =()=>{
    return(
    <>
<div className="header">
<img src={logo} alt="logo" className="logo_pic"/>
<h1> Anjali Keep</h1>
</div>
    </>
    )
};

export default Header;