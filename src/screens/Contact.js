import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";

import "../assets/css/contact.css";

export default function Contact() {
  return (
    <div>
      <BreadCrumbSection title="Contact Us" prev="Home" />
      <section className="bg-0-b">
        <div className="container">
          <div className="row">
            <div className="main-card-contact d-flex">
              <div className="sup-card-contact">
                <div className="sup-content">
                  <div className="head-content">
                    <h2>Leave A Message Here</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A, neque ipsam obcaecati quis vitae odit aliquid libero
                      sapiente possimus. Distinctio, qui voluptatibus{" "}
                    </p>
                  </div>

                  <div className="contact-title">
                    <h2>Contact Details</h2>
                    <ol>
                      <li>
                        <i className="fas fa-map-marker-check"></i>USA
                      </li>
                      <li>
                        <i className="fas fa-mobile"></i>+91 9751791203{" "}
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        sales@smarteyeapps.com
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="sup-card-contact-0a">
                <div className="contact-a1">
                  <form>
                    <div className="dived d-flex">
                      <div className="form-group">
                        <div className="form-sup">
                          <div className="cal-01">
                            <input
                              type="name"
                              name="name"
                              id=""
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                            <i className="fas fa-user-tie"></i>
                          </div>

                          <div className="cal-01">
                            <input
                              type="phone"
                              name="phone"
                              id=""
                              className="form-control"
                              placeholder="Phone Number"
                            />
                            <i className="fas fa-phone"></i>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="form-sup">
                          <div className="cal-01">
                            <input
                              type="email"
                              name="email"
                              id=""
                              className="form-control"
                              placeholder="Enter Your Email"
                            />
                            <i className="fas fa-at"></i>
                          </div>
                          <div className="cal-01">
                            <input
                              type="text"
                              name="subject"
                              id=""
                              className="form-control"
                              placeholder="Enter Your Subject"
                            />
                            <i className="fas fa-envelope-open-text"></i>
                          </div>
                        </div>
                      </div>

                      <div className="ca-ool">
                        <textarea
                          name="text"
                          cols="80"
                          rows="6"
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="ca-ool">
                        <button className="btn btn-dark mt-2">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mab-01">
        <iframe
          style={{ width: "100%" }}
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
          height="450"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </section>
    </div>
  );
}
