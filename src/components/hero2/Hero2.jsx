import React from "react";
import "./Hero2.css";

function Hero2() {
  return (
    <div className="hero2">
      <div className="container">
        <p className="hero2-p1">Product was Built Specifically for You</p>
        <div className="hero2-obj1">
          <div className="hero2-card1">
            <img className="hero2-img1" src="assets/hero2-img1.svg" alt="" />
            <p className="hero2-p2">First click tests</p>
            <p className="hero2-p3">While most people enjoy casino gambling,</p>
          </div>

          <div className="hero2-card1">
            <img className="hero2-img1" src="assets/hero2-img2.svg" alt="" />
            <p className="hero2-p2">Design surveys</p>
            <p className="hero2-p3">
              Sports betting, lottery and bingo playing for the fun,
            </p>
          </div>

          <div className="hero2-card1">
            <img className="hero2-img1" src="assets/hero2-img3.svg" alt="" />
            <p className="hero2-p2">Preference tests</p>
            <p className="hero2-p3">The Myspace page defines the individual.</p>
          </div>

          <div className="hero2-card1">
            <img className="hero2-img1" src="assets/hero2-img4.svg" alt="" />
            <p className="hero2-p2">First click tests</p>
            <p className="hero2-p3">While most people enjoy casino gambling,</p>
          </div>
        </div>
        <button className="hero2-btn1">SIGN UP NOW</button>
      </div>
    </div>
  );
}

export default Hero2;
