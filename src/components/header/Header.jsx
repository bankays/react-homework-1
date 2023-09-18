import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img src="assets/Group 190.svg" alt="Logo" />
          </a>
          <p className="product">Product</p>
          <div className="nav-items">
            <div className="nav-links">
              <a href="#about" className="nav-link">
                Product
              </a>
              <a href="#fet" className="nav-link">
                Customers
              </a>
              <a href="#pr" className="nav-link">
                Pricing
              </a>
              <a href="#tes" className="nav-link">
                Resources
              </a>
            </div>

            <div className="headerbtn">
              <button className="btn1">Sign in</button>
              <button className="btn2">Sign up</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
