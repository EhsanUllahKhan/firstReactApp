import React from "react";
import ImagesOne from "../../../../assets/img/1.svg";


const Image = () => {
    return (
        <div className="col-lg-6 about-img">
            <img src={ImagesOne} alt="logo" />
        </div>
    );
}

export default Image;