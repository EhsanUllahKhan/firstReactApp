import React from "react";
import Header from "../../Services/ServicesComponents/Header/Header";
import Testimonials from "./Testimonials/Testimonials"

const TestimonialsComponents = () => {
    return (
        <section id="testimonials" className="wow fadeInUp">
            <div className="container">
                <Header />

                <Testimonials />

            </div>
        </section>
    );
}

export default TestimonialsComponents;