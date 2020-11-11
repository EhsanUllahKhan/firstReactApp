import React from "react"
import ContactUsComponents from "./ContactUsComponents/ContactUsComponents";
import HeroShared from "../HeroShared/Index"

const ContactUs = () => {
    return (
        <>
            <HeroShared name="Contact Us" />
            <ContactUsComponents />
        </>
    );
}

export default ContactUs;