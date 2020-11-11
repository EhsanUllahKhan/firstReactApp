import React from "react"
import Logo from "./Logo/Logo";
import Items from "./Items/Items"

const HeroComponents = () => {
    return (
        <section id="hero" className="clearfix">
            <div class="container">

                <Logo />

                <Items />
            </div>
        </section>
    );
}

export default HeroComponents;