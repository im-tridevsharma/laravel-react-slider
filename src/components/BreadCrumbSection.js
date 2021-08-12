import React from "react";

import "../assets/css/breadcrub_style.css";

export default function BreadCrumbSection(props) {
  return (
    <section className="abt-01">
      <div className="container px-0">
        <div className="row">
          <div className="col-12">
            <div className="heading-wrapper">
              <h3>{props.title}</h3>
              <ol>
                <li>
                  {props.prev}
                  <i className="fas fa-angle-double-right"></i>
                </li>
                <li>{props.title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
