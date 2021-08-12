import React from "react";
import BreadCrumbSection from "../components/BreadCrumbSection";
import TeamSection from "../components/TeamSection";

import blog1 from "../assets/images/blog/blog_1.jpg";
import blog2 from "../assets/images/blog/blog_2.jpg";
import blog3 from "../assets/images/blog/blog_3.jpg";
import blog4 from "../assets/images/blog/blog_4.jpg";
import blog5 from "../assets/images/blog/blog_5.jpg";
import blog6 from "../assets/images/blog/blog_6.jpg";

export default function Blog() {
  return (
    <div>
      <BreadCrumbSection title="Blog" prev="Home" />
      <section class="bg-04">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading">
                <h2>Latest News</h2>
              </div>
            </div>

            <div class="blog-main-card d-flex">
              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog1} alt="blog1" />
                </div>
                <div class="blog-content-date">
                  june
                  <span> 8</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog2} alt="blog2" />
                </div>
                <div class="blog-content-date">
                  july
                  <span> 10</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog3} alt="blog3" />
                </div>
                <div class="blog-content-date">
                  july
                  <span> 21</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog4} alt="blog4" />
                </div>
                <div class="blog-content-date">
                  july
                  <span> 21</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog5} alt="blog5" />
                </div>
                <div class="blog-content-date">
                  july
                  <span> 21</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              <article class="blog-sub">
                <div class="blog-content">
                  <img src={blog6} alt="blog6" />
                </div>
                <div class="blog-content-date">
                  july
                  <span> 21</span>
                </div>
                <div class="blog-content-section">
                  <div class="blo-content-title">
                    <h4>
                      Capitalize on low hanging fruit to identify ballpark
                    </h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque at numquam, asperiores aut praesentium facilis
                      ratione! Voluptatibus neque dignissimos ipsa atque veniam
                      sint omnis in blanditiis, nemo fugit animi assumenda.
                    </p>
                  </div>
                  <div class="blog-admin">
                    <ol>
                      <li>
                        <i class="fas fa-user-tie"></i> By Admin
                      </li>
                      <li>
                        <i class="fas fa-calendar-alt"></i> july 28, 2020
                      </li>
                    </ol>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}
