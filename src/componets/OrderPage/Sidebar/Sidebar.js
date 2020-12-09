import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <section className="sidebar">
        <NavLink  to="/" className="logo " > <img style={{width:'170px'}} src={logo} alt="" /> </NavLink>

        <div className="sidebar-option" >
            <NavLink to="order"  activeClassName="active" className="sidebar-link"> <h6>   Order </h6> </NavLink>
            <NavLink to="OrderList"  activeClassName="active" className="sidebar-link"> <h6>   Service list </h6> </NavLink>
            <NavLink to="review" activeClassName="active" className="sidebar-link"> <h6>  Review </h6> </NavLink>
        </div>
        
    </section>
    );
};

export default Sidebar;
