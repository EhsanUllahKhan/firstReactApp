import React from "react";
import Welcome from "./Welcome/Welcome";
import Image from "./Information/Components/Image"
import Information from "./Information/Information";
import HeroShared from "../HeroShared/Index";

const About = () => {
    return (
        <>
            <HeroShared name="About Us" />
            <section id="about" className="wow fadeInUp">
                <div className="container">

                    <Welcome />

                    <div className="row">
                        <Image />
                        <Information />
                    </div>

                </div>
            </section >
        </>
    );
}

export default About;