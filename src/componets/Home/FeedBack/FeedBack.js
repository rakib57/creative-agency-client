import React from 'react';
import './FeedBack.css'
const reviews = [
    {
        name:"Nipun Reza" ,
        companyName:"Web and Mobile Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam illo a mollitia dolor eum suscipit alias fuga dolores, fugiat nemo earum. Cumque, harum voluptas doloremque ex suscipit impedit fugiat culpa?"
    },
    {
        name:"Jhankar Mahabub",
        companyName: "Graphic design",
        description:"Amazing flyers, social media posts  and brand representations that would make your brand  stand out."
    },
    {
        name:"Rakib Reza",
        companyName: "Web development",
        description:" With will writen codes, we build amazing apps for all platsforms, mobile and web apps  in general."
    }
]

const FeedBack = () => {
    return (
        <div className="container">
            <h3 style={{ fontSize: "2.2rem" }} className="text-center  font-weight-bold mb-5 mt-3" > Clients <p style={{ fontSize: "2.2rem" }} className="text-success font-weight-bold d-inline"> Feedback </p> </h3>

            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-5 py-5 px-5 mx-3">

                {
                    reviews.map(review =>
                        <div key={review._id} className="col mb-4">
                            <div className="card p-3">

                                <div className="card-img">
                                 

                                    <div className="card-header-text">
                                        <h5 style={{ lineHeight: "22px" }} className="card-title "> {review.name} </h5>
                                        <strong > {review.companyName} </strong>
                                    </div>

                                </div>

                                <div className="card-body">

                                    <p className="card-text"> {review.description} </p>
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default FeedBack;
<h1></h1>
