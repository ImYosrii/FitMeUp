import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.jpg'

export default function Navbar(){
    const [homeClicked, setHomeClicked] = useState(true)
    const [exerciseClicked, setexErciseClicked] = useState(false)
    const [contactClicked, setContactClicked] = useState(false)

    function handleHome(){
        setHomeClicked(true)
        setexErciseClicked(false)
        setContactClicked(false)
    }
    function hanldeExercise(){
        setexErciseClicked(true)
        setHomeClicked(false)
        setContactClicked(false)
    }
    function hanldeContact(){
        setContactClicked(true)
        setexErciseClicked(false)
        setHomeClicked(false)
    }
    return (
        <div className="navbar-container">
            <img src={Logo} className="nav-logo"/>
            <div className="links-container">
                <Link to="/" 
                    className={`nav-link ${homeClicked ? 'clicked':''}`} 
                    onClick={handleHome}>Home</Link>
                <a href="#exercises"
                    className={`nav-link ${exerciseClicked ? 'clicked':''}`}
                    onClick={hanldeExercise}>Exercises</a>
                <a href="#contact"
                    className={`nav-link ${contactClicked ? 'clicked':''}`}
                    onClick={hanldeContact}>Contact Me</a>
            </div>
        </div>
    )
}