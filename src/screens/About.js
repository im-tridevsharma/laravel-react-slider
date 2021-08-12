import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";

import "../assets/css/aboutus.css";

import image1 from "../assets/images/img-01.jpg";
import TeamSection from "../components/TeamSection";

export default function About() {
  return (
    <div>
      <BreadCrumbSection title="About Us" prev="Home" />
      <section className="_ab_er_we">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="_lk_fr_er">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis voluptatibus neque, assumenda maxime. Eaque libero
                  unde corrupti deleniti maxime ratione doloremque suscipit
                  perferendis aperiam labore debitis atque odit neque, possimus,
                  aspernatur dicta nobis recusandae numquam provident porro,
                  quam suscipit quibusdam. Commodi eum, optio quo.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis voluptatibus neque, assumenda maxime. Eaque libero
                  unde corrupti deleniti maxime ratione doloremque suscipit
                  perferendis aperiam labore debitis atque odit neque, possimus,
                  aspernatur dicta nobis recusandae numquam provident porro,
                  quam suscipit quibusdam. Commodi eum, optio quo.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="_lk_rt_we">
                <img src={image1} alt="team0" />
                <div className="_oi_yt_we">
                  <div className="accordion" id="nu_kl">
                    <div className="card">
                      <div className="card-header py-0 bg-light" id="mo_yu">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target="#my-ss"
                            aria-expanded="false"
                            aria-controls="my-ss"
                          >
                            Poor Children
                          </button>
                        </h2>
                      </div>

                      <div
                        id="my-ss"
                        className="collapse"
                        aria-labelledby="mo_yu"
                        data-parent="#nu_kl"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Corporis voluptatibus neque, assumenda maxime.
                          Eaque libero unde corrupti deleniti maxime ratione
                          doloremque suscipit perferendis aperiam labore debitis
                          atque odit neque, possimus, aspernatur dicta nobis
                          recusandae numquam provident porro, quam suscipit
                          quibusdam. Commodi eum, optio quo.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header py-0 bg-light" id="mo_yu_a">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#my-ss_a"
                            aria-expanded="false"
                            aria-controls="my-ss_a"
                          >
                            Poor Children
                          </button>
                        </h2>
                      </div>
                      <div
                        id="my-ss_a"
                        className="collapse"
                        aria-labelledby="mo_yu_a"
                        data-parent="#nu_kl"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Corporis voluptatibus neque, assumenda maxime.
                          Eaque libero unde corrupti deleniti maxime ratione
                          doloremque suscipit perferendis aperiam labore debitis
                          atque odit neque, possimus, aspernatur dicta nobis
                          recusandae numquam provident porro, quam suscipit
                          quibusdam. Commodi eum, optio quo.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header py-0 bg-light" id="mo_yu_b">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#my-ss_b"
                            aria-expanded="false"
                            aria-controls="my-ss_b"
                          >
                            Poor Children
                          </button>
                        </h2>
                      </div>
                      <div
                        id="my-ss_b"
                        className="collapse"
                        aria-labelledby="mo_yu_b"
                        data-parent="#nu_kl"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Corporis voluptatibus neque, assumenda maxime.
                          Eaque libero unde corrupti deleniti maxime ratione
                          doloremque suscipit perferendis aperiam labore debitis
                          atque odit neque, possimus, aspernatur dicta nobis
                          recusandae numquam provident porro, quam suscipit
                          quibusdam. Commodi eum, optio quo.
                        </div>
                      </div>
                    </div>
                  </div>
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
