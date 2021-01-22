import React from 'react';
import ReactDOM from 'react-dom';


const Sectionthree=()=>{

return(

  <section className="third text-center p-3 bg-dark text-white" id="services">
  <div className="headgr p-5">
  <h1>Beautiful and easy to use services, <br /> professional guidance and loan features</h1>
  </div>

  <div className="d-flex flex-wrap flex-md-nowrap justify-content-around">

    <div className="card m-1 text-dark">
      <div className="card-body">
<img src="https://img.icons8.com/ultraviolet/35/000000/home--v1.png"/>
<h6 className="pt-2 font-weight-bold">Seceured Housing</h6>
        <p className="card-text text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate iste harum pariatur veritatis nemo ab doloremque nisi ipsum soluta accusamus, dolorum amet vitae deserunt cupiditate, quaerat enim numquam dolore?</p>
        <button type="button" className="btn btn-danger">More</button>
      </div>
    </div>

    <div className="card m-1 text-dark">
      <div className="card-body">
<img src="https://img.icons8.com/ultraviolet/35/000000/worldwide-location.png"/>
  <h6 className="pt-2 font-weight-bold">Excellent Locations</h6>
        <p className="card-text text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate iste harum pariatur veritatis nemo ab doloremque nisi ipsum soluta accusamus, dolorum amet vitae deserunt cupiditate, quaerat enim numquam dolore?</p>
        <button type="button" className="btn btn-danger">More</button>
      </div>
    </div>

    <div className="card m-1 text-dark">
      <div className="card-body">
        <img src="https://img.icons8.com/ultraviolet/40/000000/price-tag-euro.png"/>
        <h6 className="pt-2 font-weight-bold">Affordable Price</h6>
        <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate iste harum pariatur veritatis nemo ab doloremque nisi ipsum soluta accusamus, dolorum amet vitae deserunt cupiditate, quaerat enim numquam dolore?</p>
        <button type="button" className="btn btn-danger">More</button>
      </div>
    </div>
  </div>
  </section>
)
}


export default Sectionthree;
