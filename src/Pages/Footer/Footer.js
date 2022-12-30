import React from 'react';
import './Footer.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "./../../Assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>
                <img src={logo} alt="" />
            </a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/fazle-rabbi-fahad/" target="_black"><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com/Fazlerabbi-Fahad" target="_black"><FaGithub></FaGithub></a>
                <a href="https://www.facebook.com/fablerabbi.fahad" target="_black"><FaFacebook></FaFacebook></a>
                <a href="https://www.instagram.com/fazlerabbi_fahad/" target="_black"><FaInstagram></FaInstagram></a>
            </div>

            <div className="footer-copyright">
                <small>&copy; Fazle Rabbi Fahad. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;