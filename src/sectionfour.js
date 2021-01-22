import React from 'react';
import ReactDOM from 'react-dom';
import laptop from "./Images/img laplogo.png"

const Sectionfour=()=>{

return(

  <section className="fourth">

  <div className="row maincont2">
  <div className="col-md-6">
  <div className="cont3 align-self-center p-4 text-center">
    <h2 className="mb-4">Customized housing solution for <br /> your desire</h2>

    <div className="d-flex border-bottom border-danger mb-3">
      <i className="far fa-check-circle mr-2"></i>
      <p>Beautiful and easy to understand services, professional guidance</p>
    </div>

    <div className="d-flex border-bottom border-danger mb-3">
      <i className="far fa-check-circle mr-2"></i>
      <p>House advantages are unique & clear code delivered</p>
    </div>

    <div className="d-flex border-bottom border-danger mb-3">
      <i className="far fa-check-circle mr-2"></i>
      <p>Present your services with flexible, convenient and multipurpose</p>
    </div>

    <div className="d-flex border-bottom border-danger mb-3">
      <i className="far fa-check-circle mr-2"></i>
      <p>Unlimited viewings until you are satisfied</p>
    </div>

    <div className="d-flex border-bottom border-danger mb-3">
      <i className="far fa-check-circle mr-2"></i>
      <p>Find more creative ideas for your House</p>
    </div>
  </div>
  </div>

  <div className="col-md-6 align-self-center">
    <div className="imgcont ">
  <img src={laptop} alt="design" id="limg"/>
  </div>
  </div>
  </div>
  </section>
)
}


export default Sectionfour;
