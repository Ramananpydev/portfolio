import React from "react";
import "./project.css";

function Project() {
  return (
    <div>
      <section id="project">
        <div className="my-projects">
          <div className="title">
            <h3>
              Featured <span>Projects</span>
            </h3>
            <p className="para">
              These projects reflect my hands-on experience in full stack
              development...
            </p>
          </div>

          <div className="projects-grid">
           <a href="https://ramananpydev.github.io/sathyasaibaba/" target="_blank"> <div className="project-card">
              <img src="fullstack.PNG" alt="oops!" />

              <h4>Sweet & Savory Shop – Full-Stack E-Commerce Website </h4>

              <p>
                Built a full-stack e-commerce web application using Django and
                MySQL with JWT (JSON Web Token) authentication for secure user
                login and authorization. Users can register, log in, browse
                products, and place orders, while JWT ensures secure access to
                protected APIs. The project demonstrates backend API
                development, authentication handling, and database integration
                in a real-world e-commerce system.
              </p>

              <h5 className="tech-title">Tech Stack:</h5>

              <div className="tools">
                <p>Django</p>
                <p>Python</p>
                <p>MySql</p>
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>GitHub</p>
              </div>
            </div></a>

            <a href="https://ramananpydev.github.io/cinebook/"><div className="project-card">
              <img src="cinebook.PNG" alt="oops!" />

              <h4>Movie Ticket Booking – Modern Frontend Design</h4>

              <p>
                CineBook is a React.js-based frontend web application designed
                to display movies and provide a smooth ticket booking–style user
                experience. The project focuses on clean UI design, responsive
                layouts, and easy navigation between pages such as movie
                listings and details. It demonstrates my skills in building
                reusable components and creating interactive user interfaces
                using modern frontend technologies.
              </p>

              <h5 className="tech-title">Tech Stack:</h5>

              <div className="tools">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React Js</p>
                <p>GitHub</p>
              </div>
            </div></a>

            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="portfolio.PNG" alt="oops!" />

              <h4>Portfolio Website – Interactive & Animated</h4>

              <p>
                A clean, smooth, and responsive personal portfolio website
                showcasing skills, projects, and contact details. Includes
                modern animations, gradient styling, and a professional layout
                for recruiters and clients.
              </p>

              <h5 className="tech-title">Tech Stack:</h5>

              <div className="tools">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React Js</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
