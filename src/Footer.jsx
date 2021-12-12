import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copy @ 2021 onlinePay. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
