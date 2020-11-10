import React from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/Navbar";

const MainHeaderComponents = () => {
    return (
        <header id="header">
            <div className="container">
                <Logo />

                <NavBar />
            </div>
        </header>
    );
}

export default MainHeaderComponents;