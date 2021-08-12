import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";
import TeamSection from "../components/TeamSection";

import icon1 from "../assets/images/icon1.png";
import shape from "../assets/images/shap.png";

export default function Services() {
  return (
    <div>
      <BreadCrumbSection title="Services" prev="Home" />
      <section className="bg-02">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2>OUR SERVICES</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <ol>
                    <li>
                      <i>
                        <img src={icon1} alt="icon1" />
                      </i>
                      <h3>RAISE FUND FOR HEALTHY FOOD</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon2" />
                      </i>
                      <h3>EDUCATION FOR POOR CHILDREN</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon3" />
                      </i>
                      <h3>PROMOTING THE RIGHTS OF CHILDREN</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon4" />
                      </i>
                      <h3>MASSIVE DONATION TO POOR</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <img src={shape} alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <ol>
                    <li>
                      <i>
                        <img src={icon1} alt="icon1" />
                      </i>
                      <h3>HUGE HELP TO HOMELESS PUPIL</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon2" />
                      </i>
                      <h3>LET’S BUILD SOME HOMES.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon3" />
                      </i>
                      <h3>PURE WATER FOR POOR PEOPLE</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                        libero,
                      </p>
                    </li>
                    <li>
                      <i>
                        <img src={icon1} alt="icon4" />
                      </i>
                      <h3>MEDICAL FACILITIES</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla hic deserunt facere et animi temporibus,
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}
