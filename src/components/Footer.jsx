import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="textFooter">
          Ever Salinas <br /> 
        </p>
        <a href="https://github.com/evers23"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
