import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="nav-menu-container" >
            <ul className="nav-menu">
                <li className="menu-active"><a href="/">Home</a></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contactUs">Contact</Link></li>
                <li><Link to="/career">Career</Link></li>
`
            </ul>
        </nav>

    );
}

export default Navbar;