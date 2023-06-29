import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-orange-400 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">About me</Link> 
          <Link to="/skills" className="link link-hover">Skills</Link> 
          <Link to="/project" className="link link-hover">Projects</Link> 
          <Link to="/contact" className="link link-hover">Contact</Link>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
          <a href="https://linkedin.com/in/mehedi-hasan-4a4999276" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-3xl'/>
          </a>
          <a href="https://github.com/mehedihasan42" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-3xl'/>
          </a>
         </div>
        </div> 
        <div>
          <p>Copyright © 2023 - All right reserved by Dewan Mehedi Hasan</p>
        </div>
      </footer>
    );
};

export default Footer;