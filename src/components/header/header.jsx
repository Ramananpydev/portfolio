import React from 'react'
import './header.css'
import { useState,useEffect } from 'react'

function Header() {

  return (
    <div className='header'>
        <div className="logo">
            <h4>Ramanan P</h4>
        </div>
        <div className="nav-header">
            <nav>
                <ul>
                   <a href="#about"> <li>About</li></a>
                   <a href="#skill">  <li>Skill</li></a>
                   <a href="#project">  <li>Projects</li></a>
                   <a href="#contact">  <li>Contact</li></a>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
