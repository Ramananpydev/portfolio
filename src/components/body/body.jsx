import React from 'react'
import './body.css'

function Body() {
  return (
    <div>
          <section id="home">
        <div className="content" >
            <h1>Hi,i'm <span className="name">Ramanan - <span>Full Stack Developer</span></span></h1>
            <p className="p1" >Python Full Stack Developer crafting modern,responsive web apps with clean UI <span> and robust backend architecture</span></p>
            <div className="explore">

                <a href="mailto:ramanan.pydev@gmail.com"><button className='btn btn-first'>Hire Me</button></a>
                <a href="/ramanan_resume.pdf" download="Ramanan_Resume.pdf"><button className='btn btn-second'>Download CV</button> </a>
                <a href="https://github.com/Ramananpydev/" target="_blank" rel="noopener noreferrer"><button className='btn btn-third'>View My Work</button></a>
 
            </div>


        </div>
    </section>
    </div>
  )
}

export default Body
