import React from "react";
import Header from "../TestimonialsComponents/Header/Header";
import Testimonials from "./Testimonials/Testimonials"

const TestimonialsComponents = () => {
    return (
        <section id="testimonials" className="wow fadeInUp" style={{ textAlign: "center" }}>
            <div className="container">
                <Header />

                <Testimonials />

            </div>
        </section>
    );
}

export default TestimonialsComponents;