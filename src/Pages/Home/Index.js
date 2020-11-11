import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Clients from "../Clients/Index";
import Testimonials from "../Testimonials/Index";
import ContactUs from "../ContactUs/Index";
import Hero from "../Hero/Index";

const HomePage = () => {
    return (
        <>

            <Hero />
            <About />
            <Services />
            <Clients />
            <Testimonials />
        </>

    );
}

export default HomePage