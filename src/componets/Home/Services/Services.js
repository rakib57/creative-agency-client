import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
const services =[
    {
        title:"Web and Mobile design",
        description:"We craft stunning  and amazing web UI, using a well drrafted UX to fit your product",
        img:{service1}
    },
    {
        title:"Graphic design",
        description:"We craft stunning  and amazing web UI, using a well drrafted UX to fit your product",
        img:service2
    },
    {
        title:"Web development",
        description:" With will writen codes, we build amazing apps for all platsforms, mobile and web apps  in general.",
        img:service3
    },
] 

const Services = () => {
     
    return (
        <section className="services container-fluid mt-5 mb-5 p-5 ">
        <div className="container">

            <h3 style={{fontSize: "2.2rem"}} className="text-center font-weight-bold" > Provide awesome <h4 className="text-success font-weight-bold d-inline"> services </h4> </h3>
            <div className="row row-cols-1  mt-5 pt-5">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
               
                
            </div>
        </div>
        
    </section>
    );
};

export default Services;