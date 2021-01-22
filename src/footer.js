import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./Images/img logo 1.png"

const Footer=()=>{

return(
  <section className="seven bg-light">

  <div className="contseven d-flex justify-content-around align-items-center flex-wrap flex-md-nowrap">
  <p className="font-weight-bold">Dublin based investment</p>
  <img src={logo} alt="company logo" id="clogo" />
  <div className="social d-flex">
    <p className="mr-3">On social networks</p>
  <div className="sociallogo">
    <i className="fab fa-facebook"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-google-plus-square"></i>
    <i className="fab fa-instagram"></i>
  </div>
  </div>
  </div>
  </section>
)
}


export default Footer;
