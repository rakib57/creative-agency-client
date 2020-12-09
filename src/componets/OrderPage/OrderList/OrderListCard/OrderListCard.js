  
import React from 'react';
import service1 from '../../../../images/icons/service1.png'

const OrderListCard = ({ orderListItem }) => {

    return (
        
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-4 ">
               
            { 
                <div className="card  service-card py-4">
                  <div className="card-body text-left">
                        <img style={{ width: "100px", height: "100px" }} src={service1} alt=""/>
                        <h5 className="card-title font-weight-bolder"> {orderListItem.title} </h5>
                        <p className="card-text text-light-dark"> {orderListItem.description} </p>
                    </div>

                </div>
            }
        </div>
    );
};

export default OrderListCard;