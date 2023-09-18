import React from "react";
import "./Hero1.css";

function Hero1() {
  return (
    <div className="hero1">
      <div className="container">
        <div className="obj1">
          <div className="left">
            <p className="hero1-p1">Work at the speed of thought</p>
            <p className="hero1-p2">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero1-group-btn1">
              <button className="hero1-btn1">Get started</button>
              <button className="hero1-btn2">Watch the vidio</button>
            </div>
          </div>
          <div className="right">
            <img className="hero1-img1" src="assets/hero1-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
