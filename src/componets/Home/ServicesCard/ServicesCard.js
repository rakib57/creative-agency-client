import React from 'react';
import './ServicesCard.css'
import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png'

const ServicesCard = ({service}) => { 
    return (
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4 ">
        <Link className="link-primary" to="/order" >
          <div className="card d-flex align-items-center justify-content-center service-card py-4">
      
            <img style={{ width: "100px", height: "100px" }} src={service1}alt=""/>
  
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bolder"> {service.title} </h5>
              <p className="card-text text-light-dark"> {service.description} </p>
            </div>
  
          </div>
        </Link>
      </div>
    );
};

export default ServicesCard;