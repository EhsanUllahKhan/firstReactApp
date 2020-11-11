import React from "react";
import Header from "./Header/Header";
import ContactUs from "./ContactUs/ContactUs"

const ContactUsComponents = () => {
    return (
        <section id="call-to-action" class="wow fadeInUp">
            <div class="container">
                <div class="row">
                    <Header />

                    <ContactUs />
                </div>

            </div>
        </section>
    );
}

export default ContactUsComponents;