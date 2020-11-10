import React from "react";
import webLogo from "../../../../assets/img/WebLogo.png"

const Logo = () => {
    return (<>
        <div id="logo" class="pull-left">
            <a href="https://www.capregsoft.com/" id="body" class="scrollto" >
                <span>
                    <div class="logo">
                        <img src={webLogo} alt="logo" style={{ height: "4.375rem" }} />
                    </div>
                </span>
            </a>
        </div>
    </>

    );
}

export default Logo;