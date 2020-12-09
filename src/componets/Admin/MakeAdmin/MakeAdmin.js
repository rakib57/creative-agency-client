import React from 'react';
import AddminSidebar from '../AddminSidebar/AddminSidebar';

const MakeAdmin = () => {


    return (
        <div className="addService  container-fluid pr-0 ">
            <div className="addService row pt-4">
                <div className="col-md-3">
                    <AddminSidebar></AddminSidebar>
                </div>

                <div className="col-md-9">

                    <div className="header-option ml-5">
                        <h3> Add Service </h3>
                    </div>
                    <div className="rightOption ">


                        <form  className=" " action="" >
                            <div className="form">
                                <div className="formLeft">
                                    <h5>Email </h5>
                                    <input type="email" name="email"
                                        placeholder=" john@gmail.com" id=""
                                       
                                        styles={{ border: "none !important", borderTop: "1px solid", width: "100%" }}
                                    />
                                </div>

                                <div className="formRight">
                                    <div className=" mt-4 mr-5" style={{ width: " 140px", }}>
                                        <input
                                            className="submit-button submit-button btn-dark"
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MakeAdmin;