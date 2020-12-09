import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const AddminSidebar = () => {
    return (
        <section className="sidebar">
        <NavLink  to="/" className="logo " > <img style={{width:"150px"}} src={logo} alt="" /> </NavLink>

        <div className="sidebar-option" >
            <NavLink to="serviceList"  activeClassName="active" className="sidebar-link"> <h6>   Services list </h6> </NavLink>
            <NavLink to="addService"  activeClassName="active" className="sidebar-link"> <h6>   Add Service </h6> </NavLink>
            <NavLink to="makeAdmin" activeClassName="active" className="sidebar-link"> <h6>   Make Admin </h6> </NavLink>
        </div>
    </section>
    );
};

export default AddminSidebar;