import React from "react";
import HeroShared from "../HeroShared/Index";
import AboutComponents from "./AboutComponents/AboutComponents";

const About = () => {
    return (
        <>
            {/* hero component */}
            <HeroShared name="About Us" />

            {/* hero component */}
            <AboutComponents />
        </>
    );
}

export default About;