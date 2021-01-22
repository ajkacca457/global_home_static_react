import React from 'react';
import ReactDOM from 'react-dom';


const Sectionthree=()=>{

return(

  <section className="third text-center p-3 bg-dark text-white">
  <div className="headgr p-5">
  <h1>Beautiful and easy to use services, <br /> professional guidance and loan features</h1>
  </div>

  <div className="d-flex flex-wrap flex-md-nowrap justify-content-around">

    <div className="card m-1 text-dark">
      <div className="card-body">
        <i className="fas fa-dungeon fa-3x p-3 bg-danger text-white rounded-circle mb-3"></i>
        <h6 className="pt-2 font-weight-bold">Seceured Housing</h6>
        <p className="card-text text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate iste harum pariatur veritatis nemo ab doloremque nisi ipsum soluta accusamus, dolorum amet vitae deserunt cupiditate, quaerat enim numquam dolore?</p>
        <button type="button" className="btn btn-danger">More</button>
      </div>
    </div>

    <div className="card m-1 text-dark">
      <div className="card-body">
      <i className="fas fa-street-view fa-3x p-3 bg-danger text-white rounded-circle mb-3"></i>
        <h6 className="pt-2 font-weight-bold">Excellent Locations</h6>
        <p className="card-text text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate iste harum pariatur veritatis nemo ab doloremque nisi ipsum soluta accusamus, dolorum amet vitae deserunt cupiditate, quaerat enim numquam dolore?</p>
        <button type="button" className="btn btn-danger">More</button>
      </div>
    </div>

    <div className="card m-1 text-dark">
      <div className="card-body">
        <i className="fas fa-money-bill fa-3x p-3 bg-danger text-white rounded-circle mb-3"></i>
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
