import React from 'react'
import './skill.css'

function Skill() {
  return (
    <div>
       <section className="skills-section" id='skill'>
    <h3 className="title">My <span>Skills</span></h3>

    <div className="skills-grid">

        <div className="skill-card">
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
        </div>

        <div className="skill-card">
            <i className="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
        </div>

        <div className="skill-card">
            <i className="fa-solid fa-code"></i>
            <p>JavaScript</p>
        </div>

        <div className="skill-card">
            <i className="fa-brands fa-react"></i>
            <p>React JS</p>
        </div>

        <div className="skill-card">
            <i className="fa-brands fa-python"></i>
            <p>Python</p>
        </div>

        <div className="skill-card">
            <i className="fa-solid fa-code"></i>
            <p>Django</p>
        </div>

        <div className="skill-card">
            <i className="fa-solid fa-database"></i>
            <p>MySQL</p>
        </div>

        <div className="skill-card">
            <i className="fa-brands fa-git-alt"></i>
            <p>Git</p>
        </div>

        <div className="skill-card">
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
        </div>

    </div>
</section>

    </div>
  )
}

export default Skill
