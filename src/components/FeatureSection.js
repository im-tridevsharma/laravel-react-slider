import React, { useEffect, useState } from "react";

import "../assets/css/feature_style.css";

export default function FeatureSection() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/features")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-01">
      <div className="container px-0">
        <div className="row">
          {features.map((feature, index) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="main-box">
                  <div className="content">
                    <img
                      src={"http://localhost:8000/storage/" + feature.image}
                      alt={feature.title}
                    />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
