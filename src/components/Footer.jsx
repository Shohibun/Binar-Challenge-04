import React from "react";

export default function Footer(){
    return (
        <div className="container pt-5 pb-5 my-5">
            <div className="row custom-font">
                <div className="col-md-4">
                    <p>
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </p>

                    <p>
                        binarcarrental@gmail.com
                    </p>

                    <p>
                        081-233-334-808
                    </p>
                </div>

                <div className="col-md-2">
                    <p>
                        Our services
                    </p>

                    <p>
                        Why Us
                    </p>

                    <p>
                        Testimonial
                    </p>

                    <p>
                        FAQ
                    </p>
                </div>

                <div className="col-md-3">
                    <p>
                        Connect with us
                    </p>

                    <span>
                        <img className="pr-2 custom-gap" src={require("../images/icon_facebook.png")} alt="Facebook"/>
                        <img className="pr-2 custom-gap" src={require("../images/icon_instagram.png")} alt="Instagram"/>
                        <img className="pr-2 custom-gap" src={require("../images/icon_twitter.png")} alt="Twitter"/>
                        <img className="pr-2 custom-gap" src={require("../images/icon_mail.png")} alt="Email"/>
                        <img className="pr-2 custom-gap" src={require("../images/icon_twitch.png")} alt="Twitch"/>
                    </span>
                </div>

                <div className="col-md-3">
                    <p>
                        Copyright Binar 2022
                    </p>

                    <p className="custom-logo"></p>
                </div>
            </div>
        </div>
    )}
