import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./Images/img logo 1.png"

const Footer=()=>{

return(
  <section className="seven bg-light" id="footer">

  <div className="contseven d-flex justify-content-around align-items-center flex-wrap flex-md-nowrap">
  <p className="font-weight-bold">Dublin based investment</p>
  <img src={logo} alt="company logo" id="clogo" />
  <div className="social d-flex">

  <div className="sociallogo d-flex align-items-center justify-content-center">
  <p className="mr-3">On social networks</p>
<img className="mr-2" src="https://img.icons8.com/ultraviolet/30/000000/facebook-new.png"/>
<img className="mr-2" src="https://img.icons8.com/ultraviolet/30/000000/instagram.png"/>
<img className="mr-2" src="https://img.icons8.com/ultraviolet/30/000000/youtube-music.png"/>
<img src="https://img.icons8.com/ultraviolet/30/000000/twitter-circled--v1.png"/>
</div>
  </div>
  </div>
  </section>
)
}


export default Footer;
