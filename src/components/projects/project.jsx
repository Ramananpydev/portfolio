import React from 'react'
import './project.css'

function Project() {
  return (
    <div>
      <section>
    <div className="my-projects" data-aos="fade-up" data-aos-delay="200">

    <div className="title">
        <h3>Featured <span>Projects</span></h3>
        <p className='para'>These projects reflect my hands-on experience in full stack development...</p>
    </div>

    <div className="projects-grid">


<div className="project-card" data-aos="fade-up" data-aos-delay="200">
    <img src="fullstack.PNG" alt="oops!"/>

    <h4>Sweet & Savory Shop – Full-Stack E-Commerce Website (Django)</h4>

    <p>
        A fully functional full-stack e-commerce website built using Django, Python, and MySQL.

        Focused on clean UI, fast backend performance, and real-world shop workflows.
    </p>

    {/* <h5 className="key-title">Key Features:</h5> */}

    {/* <ul className="key-features">
        <li>User signup/sign-in (hashed passwords)</li>
        <li>Add to cart, remove, update quantity</li>
        <li>Admin panel for product and order management</li>
        <li>Responsive UI for all devices</li>
        <li>Payment-ready architecture</li>
    </ul> */}

    <h5 className="tech-title">Tech Stack:</h5>

    <div className="tools">
        <p>Django</p><p>Python</p><p>MySql</p><p>Html</p><p>Css</p><p>JavaScript</p><p>GitHub</p>
    </div>
</div>

<div className="project-card" data-aos="fade-up" data-aos-delay="200">
    <img src="moto-cycle-project.PNG" alt="oops!"/>

    <h4>Motorcycle Repair Shop – Modern Frontend Design</h4>

    <p>
        A visually appealing and fully responsive frontend UI designed for a 
        motorcycle service and repair shop. The design focuses on clean layout, 
        user-friendly navigation, and strong visual presentation to improve customer engagement.
    </p>

    {/* <h5 className="key-title">Key Features:</h5>

    <ul className="key-features">
        <li>Modern dark-themed UI layout</li>
        <li>Service listing page with icons</li>
        <li>Responsive booking/contact UI</li>
        <li>Attractive hover animations</li>
        <li>Fully mobile-friendly design</li>
    </ul> */}

    <h5 className="tech-title">Tech Stack:</h5>

    <div className="tools">
        <p>HTML</p><p>CSS</p><p>JavaScript</p><p>React Js</p><p>GitHub</p>

    </div>
</div>



    <div className="project-card" data-aos="fade-up" data-aos-delay="200">
    <img src="portfolio.PNG" alt="oops!"/>

    <h4>Portfolio Website – Interactive & Animated</h4>

    <p>
        A clean, smooth, and responsive personal portfolio website showcasing 
        skills, projects, and contact details. Includes modern animations, 
        gradient styling, and a professional layout for recruiters and clients.
    </p>
{/* 
    <h5 className="key-title">Key Features:</h5>

    <ul className="key-features">
        <li>Fully animated sections using AOS</li>
        <li>Smooth scroll behavior and UI transitions</li>
        <li>Direct WhatsApp, Email, Phone integration</li>
        <li>Responsive layout for all screen sizes</li>
        <li>Clean design with modern gradients</li>
    </ul> */}

    <h5 className="tech-title">Tech Stack:</h5>

    <div className="tools">
        <p>HTML</p><p>CSS</p><p>JavaScript</p><p>React Js</p><p>GitHub</p>
    </div>
</div>

    </div>
</div>
</section>

    </div>
  )
}

export default Project
