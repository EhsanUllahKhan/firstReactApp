import React from "react";
import Image from "./Image/Image";

const Section = () => {
    return (
        <section id="about" className="wow fadeInUp">
            <div className="container">
                <div className="row">
                    <Image />

                    <div className="col-lg-6 content">
                        <p>We are not just a software house in wahcantt. We are a team of highly skilfull professional developers who have ability to solve the problems for clients.
                        </p>
                        <p>We ensure and satisfy our clients thorugh our consistent performance and our team is full of passionate and hardworking professionals</p>

                        <ul>
                            <h1>What We Do?</h1>

                            <li><i className="icon ion-ios-checkmark-outline"></i> Web Development</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Desktop Applications</li>
                            <li><i className="icon ion-ios-checkmark-outline"></i> Mobile Applications</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section;