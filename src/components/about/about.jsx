import React from 'react'
import './about.css'

function About() {
  return (
    <div>
      <section className="about-section" id="about" >

    <div className="about-container">


        <div className="about-image" >
            <img src="/Ramanan.jpg" alt="Profile"/>
        </div>


        <div className="about-content" >
            <h2>About <span>Me</span></h2>

            <p>
                I’m a dedicated and enthusiastic Full-Stack Developer with practical experience gained through personal and academic projects.
                As a fresher, I focus on  fundamentals of web development — HTML, CSS, JavaScript,React Js, Python, Django, REST APIs, and MySQL — while also learning modern frameworks and development workflows.
                  </p>

            <p>I have worked on full-stack projects involving REST APIs, user authentication,
                database design, and modern frontend interfaces. I’m passionate about learning
                new technologies and applying my skills to real-world software development
            challenges</p>
            
            <p>   I am looking for opportunities to start my career in a collaborative environment where I can learn, grow, and contribute meaningfully. Whether it’s an internship, an entry-level developer role, or freelance work, I’m ready to take on real-world challenges and build impactful solutions.</p>


            <div className="about-tags">
                <p>Fresher</p>
                <p>3+ Projects Completed</p>
                <p>Learning Everyday</p>
            </div>
        </div>
    </div>

</section>
    </div>
  )
}

export default About
