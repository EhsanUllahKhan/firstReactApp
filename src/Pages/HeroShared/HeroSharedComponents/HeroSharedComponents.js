import React from "react";
import Header from "./HeroHeading/Heading"

const HeroSharedComponents = (props) => {
    return (
        <section id="innerBanner">
            <div className="inner-content">
                <Header name={props.name} />
            </div>
        </section>
    );
}

export default HeroSharedComponents;