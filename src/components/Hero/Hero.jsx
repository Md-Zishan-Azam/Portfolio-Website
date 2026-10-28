import React from "react";
import profile_img from "../../assets/profile_img.svg";
import "./Hero.css";
import AnchorLinkModule from "react-anchor-link-smooth-scroll";
const AnchorLink = AnchorLinkModule.default;

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Zishan Malik,</span> devops engineer based in India.
      </h1>
      <p>
        I am a devops engineer, who has worked with full stack applications,
        managing it, and working with docker, kubernetes, containerisation and
        other devops concepts.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
export default Hero;
