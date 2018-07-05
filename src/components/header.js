import React from 'react';

import './header.css';

export default function Header() {
    return (
        <header className="header">
            <nav>
              <div className="left">
                <a href="#home">HOME</a>
                <a href="#tour">TOUR</a>
                <a href="#blog">BLOG</a>
              </div>
              <h2><em>Trello</em></h2>
              <div className="right">
                <button className="btn">Sign Up</button>
                <button className="btn inactive">Log In</button>
              </div>
            </nav>
            <div className="signUp">
              <p><strong>Visually collaborate with anyone, anywhere.</strong> <button className="btn">Sign up for free</button></p>
            </div>
        </header>
    );
};
