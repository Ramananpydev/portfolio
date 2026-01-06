import React from 'react'
import './header.css'
import { useState } from 'react'

function Header() {
    // const [theme,setTheme]=useState('light')
  return (
    <div className='header'>
        <div className="logo">
            <h4>Ramanan P</h4>
        </div>
        <div className="nav-header">
            <nav>
                <ul>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    {/* <li onClick={()=>{
                        document.body.style.backgroundColor="white"
                        setTheme('light')
                    }}><i class="fa-regular fa-sun"></i></li>
                    <li onClick={()=>{
                        document.body.style.backgroundColor="black"
                        setTheme('light')
                    }}><i class="fa-regular fa-moon"></i></li> */}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
