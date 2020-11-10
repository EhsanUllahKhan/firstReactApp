import React from "react";
import MobileDevelopment from "../../../../../assets/img/app-development.svg"

const MobileApp = () => {
    return (<div className="col-lg-4">
        <div className="box wow fadeInRight">
            <div className="icon svgImg"><img src={MobileDevelopment} alt="" width="90px" height="90px" /></div>
            <h4 className="title"><a href="">Mobile Applications</a></h4>
            <p className="description">Mobile application development in Pakistan has grasping exceptional growth in the recent years.
            CapregSoft company develop mobile applications in Wah Cantt, Pakistan.
            We cooperate with our clients from the abstract stage to final development.
            </p>
        </div>
    </div>
    )
}

export default MobileApp;