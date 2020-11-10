import React from "react";
import DesktopApp from "./DeskopApp/DesktopApp";
import MobileApp from "./MobileApp/MobileApp";
import WebDevelopment from "./WebDevelopment/WebDevelopment"

const ServicesComponents = () => {
    return (
        <div class="row">

            <WebDevelopment />

            <MobileApp />

            <DesktopApp />

        </div>

    );
}

export default ServicesComponents;