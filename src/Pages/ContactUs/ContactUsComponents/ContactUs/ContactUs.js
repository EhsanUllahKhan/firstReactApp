import React from "react";
import GitHub from "./GitHub/GitHub";
import LinkedIn from "./LinkedIn/LinkedIn"
import Twitter from "./Twitter/Twitter";
import Facebook from "./Facebook/Facebook"
import Instagram from "./Instagram/Instagram";
import Reddit from "./Reddit/Reddit"

const ContactUs = () => {
    return (

        <div className="col-lg-3 cta-btn-container text-center">

            <div className="container-footer">

                <div className="social-buttons">

                    <GitHub />

                    <LinkedIn />

                    <Twitter />

                    <Facebook />

                    <Instagram />

                    <Reddit />

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
