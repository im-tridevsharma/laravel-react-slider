import React from "react";

import "../assets/css/feature_style.css";
import icon1 from "../assets/images/icon1.png";

export default function FeatureSection() {
  return (
    <section className="bg-01">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="main-box">
              <div className="content">
                <img src={icon1} alt="image1" />
                <h3>Get Inspired</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ad repellat labore perspiciatis est,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="main-box">
              <div className="content">
                <img src={icon1} alt="image2" />
                <h3>Give Donation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ad repellat labore perspiciatis est,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="main-box">
              <div className="content">
                <img src={icon1} alt="image3" />
                <h3>Become a Volunteer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ad repellat labore perspiciatis est,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="main-box">
              <div className="content">
                <img src={icon1} alt="image4" />
                <h3>Help The Children</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ad repellat labore perspiciatis est,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
