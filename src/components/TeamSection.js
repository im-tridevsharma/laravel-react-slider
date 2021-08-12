import React from "react";

import team1 from "../assets/images/team/1.jpg";
import team2 from "../assets/images/team/2.jpg";
import team3 from "../assets/images/team/3.jpg";
import team4 from "../assets/images/team/4.jpg";

export default function TeamSection() {
  return (
    <section className="bg-07">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2>Meet Our Team</h2>
            </div>
          </div>
          <div className="main-team-card d-flex">
            <div className="team-setup">
              <div className="team-items">
                <div className="team-user">
                  <img src={team1} alt="team1" />
                </div>
                <div className="team-user-social">
                  <ol>
                    <li>
                      <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-google"></i>
                    </li>
                    <li>
                      <i className="fab fa-skype"></i>
                    </li>
                  </ol>
                </div>
                <div className="team-name">
                  <h2>JOHN</h2>
                  <b>Attorneys</b>
                </div>
              </div>
            </div>

            <div className="team-setup">
              <div className="team-items">
                <div className="team-user">
                  <img src={team2} alt="team2" />
                </div>
                <div className="team-user-social">
                  <ol>
                    <li>
                      <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-google"></i>
                    </li>
                    <li>
                      <i className="fab fa-skype"></i>
                    </li>
                  </ol>
                </div>
                <div className="team-name">
                  <h2>TURNER</h2>
                  <b>Attorneys</b>
                </div>
              </div>
            </div>

            <div className="team-setup">
              <div className="team-items">
                <div className="team-user">
                  <img src={team3} alt="team3" />
                </div>
                <div className="team-user-social">
                  <ol>
                    <li>
                      <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-google"></i>
                    </li>
                    <li>
                      <i className="fab fa-skype"></i>
                    </li>
                  </ol>
                </div>
                <div className="team-name">
                  <h2>GILBERT WILLIAMS</h2>
                  <b>Attorneys</b>
                </div>
              </div>
            </div>

            <div className="team-setup">
              <div className="team-items">
                <div className="team-user">
                  <img src={team4} alt="team4" />
                </div>
                <div className="team-user-social">
                  <ol>
                    <li>
                      <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-google"></i>
                    </li>
                    <li>
                      <i className="fab fa-skype"></i>
                    </li>
                  </ol>
                </div>
                <div className="team-name">
                  <h2>ANDERSON JHON</h2>
                  <b>Attorneys</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
