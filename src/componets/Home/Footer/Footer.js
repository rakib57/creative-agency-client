import React from 'react';
import './Footer.css';

const Footer = () => {



    return (
        <footer className="footer">
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 ml-5">
                            <h3 style={{ fontSize: "2.2rem" }} className="  font-weight-bold mb-3 mt-3" > Let us handle your <br /> project, professionally.</h3>
                            <p> With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 ">
                        <form className="order-form footer-form" action="" >
                                <div className="form-group">


                                    <input type="text" name="companyName"
                                        placeholder="Your name / Company's name " id=""
                                         required
                                    />
                                    <input type="email" name="name"
                                        placeholder="Your email address " id=""
                                        required
                                        
                                    />

                                    <textarea type="text-area" name="description"
                                        placeholder=" Your message " id=""
                                         required
                                        rows="4" cols="38"
                                        className="order-text-area footer-text-area"
                                    />

                                </div>

                                <div className="submit">
                                    <input
                                        className="submit-button btn-dark "
                                        type="submit"
                                        value="Send"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    <p className="text-center pt-5"> &copy;  copyright MD NIPUN REZA 2020 </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;