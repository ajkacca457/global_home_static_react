import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./Images/img logo 1.png"


const Navbar=()=>{

return(

<div>
<nav className="navbar navbar-expand-lg navbar-light mynavbar position-fixed">
  <img src={logo} alt="logo" className="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#footer">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
)
}


export default Navbar;
