import React from "react";
import Header from "./Header/Header"
import Services from './Services/Services'

const ServicesComponents = () => {
    return (
        <section id="services">
            <div class="container">
                <Header />

                <Services />
            </div>
        </section>
    );
}

export default ServicesComponents;