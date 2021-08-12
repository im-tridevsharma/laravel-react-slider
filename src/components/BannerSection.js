import React, { useState, useEffect } from "react";

import "../assets/css/slider_style.css";

export default function BannerSection() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners();
  }, []);

  function fetchBanners() {
    fetch("http://localhost:8000/api/sliders")
      .then((response) => response.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <section
      id="carouselExampleFade"
      className="carousel slide carousel-fade slider"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {banners.map((slider, index) => (
          <div
            className={index === 0 ? "carousel-item active" : "carousel-item"}
            key={"id-" + slider.id}
          >
            <img
              src={"http://localhost:8000/storage/" + slider.image}
              className="d-block"
              alt={slider.title}
            />
            <div className="carousel-caption">
              <h2>{slider.title}</h2>
              <p>{slider.description}</p>
              <div className="button-01">
                <ul>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Follow Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  );
}
