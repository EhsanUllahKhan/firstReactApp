import React from "react";
import DrAli from "./DrAli/DrAli"
import ProfShahzaib from "./ProfShahzaib/ProfShahzaib"
import LtHaider from "./LtHaider/LtHaider"
import DrZain from "./DrZain/DrZain";

const Testimonials = () => {
    return (
        <div className="owl-carousel testimonials-carousel">

            <DrAli />

            <ProfShahzaib />

            <LtHaider />

            <DrZain />

        </div>

    );
}

export default Testimonials;