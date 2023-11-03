import React from 'react';
import "./footer.css";

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Chris</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                           Projects 
                        </a>
                    </li>
                   
                </ul>
                <div className="footer__social">
                <a
          href="https://www.instagram.com/chris_ringler/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://github.com/Chrisringler"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-ringler-139581235/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
                </div>
            </div>
        </footer>
    )
}


export default Footer