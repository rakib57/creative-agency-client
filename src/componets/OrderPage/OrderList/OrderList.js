import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListCard from './OrderListCard/OrderListCard';


const orderList =[
    {
        title:"Web and Mobile design",
        description:"We craft stunning  and amazing web UI, using a well drrafted UX to fit your product"
    },
    {
        title:"Graphic design",
        description:"We craft stunning  and amazing web UI, using a well drrafted UX to fit your product"
    },
    {
        title:"Web development",
        description:" With will writen codes, we build amazing apps for all platsforms, mobile and web apps  in general."
    },
]

const OrderList = () => {
    return (
        <div className="container-fluid">
        <div className="row pt-3">
            <div className="col-md-3">
                <Sidebar />
            </div>

            <div className="col-md-9">
                <div className="header-option ml-5">
                    <h2 className=" text-brand ">  Order list </h2>
                    <div className="d-flex align-items-center mt-3 ml-auto">
                       
                    </div>
                </div>

                <div className="rightOption mt-5">
                    <div className="row mx-4">
                        {
                            orderList.map(item => <OrderListCard key={item._id} orderListItem={item} />)
                        }
                    </div>

                </div>

            </div>
        </div>
    </div>
    );
};

export default OrderList;