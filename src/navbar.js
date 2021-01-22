import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./Images/img logo 1.png"


const Navbar=()=>{

return(

<div>
<nav className="navbar navbar-expand-lg navbar-light">
  <img src={logo} alt="logo" className="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
</div>
)
}


export default Navbar;
