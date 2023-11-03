import React from "react";

const Social = () => {
    return (
      <div className="home__social">
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
    );
  };
  

export default Social