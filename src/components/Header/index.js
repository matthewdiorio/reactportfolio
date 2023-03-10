import React from 'react';
import './index.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="links">
                    <ul className="nav">
                        <li><a href="https://www.linkedin.com/in/matthewdiorio" aria-label="linked-in"><img src="/img/in.png" alt="Linkedin" /></a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#examples">Designs</a> </li>
                        <li><a href="#about">About</a> </li>
                        <li><a href="https://www.github.com/matthewdiorio" aria-label="Github"><img src="/img/hub.png" alt="Github" /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )

}