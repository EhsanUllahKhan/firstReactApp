import React from "react"
import DesktopDevelopment from "../../../../../assets/img/desktop-apps.svg"


const DesktopApp = () => {
    return (
        <div className="col-lg-4">
            <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                <div className="icon svgImg"><img src={DesktopDevelopment} alt="" width="90px" height="90px" /></div>
                <h4 className="title"><a href="">Desktop Applications</a></h4>
                <p className="description">Our developers have broad vision of present-day technologies as well as provides complex systems
                and solutions for problems.Our desktop application development services provides an efficient,user-friendly desktop
            applications that can run offline as well.</p>
            </div>
        </div>
    )
}

export default DesktopApp;