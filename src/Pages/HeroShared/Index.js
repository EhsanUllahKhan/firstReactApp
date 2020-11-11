import React from "react";
import HeroSharedComponents from "./HeroSharedComponents/HeroSharedComponents";

const HeroShared = (props) => {
    return (
        <>
            <HeroSharedComponents name={props.name} />
        </>
    );
}

export default HeroShared;