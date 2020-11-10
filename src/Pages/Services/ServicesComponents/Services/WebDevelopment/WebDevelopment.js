import React from "react";
import webDevelopment from "../../../../../assets/img/web-development.svg"

const WebDevelopment = () => {
    return (
        <div className="col-lg-4">
            <div className="box wow fadeInLeft">
                <div className="icon svgImg"><img src={webDevelopment} alt="" width="90px" height="90px" /></div>

                <h4 className="title"><a href="">Web Development</a></h4>

                <p className="description">Web Development is our strength.In case you’re looking for overhauling of your existing
                website and for creating a new website our team of skillfull web developers will assured you that we deliver a unique,
                 powerful, dynamic and efficient looking website on time.</p>
            </div>
        </div>
    );
}

export default WebDevelopment;