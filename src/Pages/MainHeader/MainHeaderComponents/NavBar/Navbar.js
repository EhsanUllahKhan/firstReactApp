import React from "react";

const Navbar = () => {
    return (
        <nav id="nav-menu-container" style={{ background: "#000" }}>
            <ul className="nav-menu">
                <li className="menu-active"><a href="https://www.capregsoft.com">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="career.html">Career</a></li>

            </ul>
        </nav>

    );
}

export default Navbar;