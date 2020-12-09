import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    return (
        <div className="container-fluid">
        <div className="row pt-4">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-9">
                <div className="header-option ml-5">
                    <h4 className=" text-brand ">  Review </h4>
                </div>

                <div className="rightOption ">
                    <form  className="order-form " action="" >
                        <div className="form-group">

                            <input type="text" name="name"
                                placeholder="Your name " id=""
                                 required
                                
                            />

                            <input type="text" name="companyName"
                                placeholder="Company's name Designation" id=""
                                 required
                            />

                            <textarea type="text-area" name="description"
                                placeholder="Enter Description " id=""
                                 required
                                rows="4" cols="28"
                                className="order-text-area"
                            />

                        </div>

                        <div className="" style={{ width: " 170px", }}>
                            <input
                                className="submit-button submit-button btn-dark"
                                type="submit"
                                value="Submit"
                                style={{
                                    background: "#111430",
                                    padding: " 0 70px 0 55px",
                                    width: "170px"
                                }}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
  </div>
    );
};

export default AddReview;