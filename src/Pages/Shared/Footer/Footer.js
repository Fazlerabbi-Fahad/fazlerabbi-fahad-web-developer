import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <ul className='flex justify-center absolute bottom-0 left-[35%] ul'>
                <li ><a className='relative overflow-hidden flex justify-center items-center w-[5vw] h-[5vh] inline-block a' href='https://www.facebook.com/fablerabbi.fahad/'><FaFacebookF className='w-[4vw] h-[4vh]'></FaFacebookF></a></li>
                <li ><a className='relative overflow-hidden flex justify-center items-center w-[5vw] h-[5vh] inline-block a' href="https://www.instagram.com/fazlerabbi_fahad/"><FaInstagram className='w-[4vw] h-[4vh]'></FaInstagram></a></li>
                <li ><a className='relative overflow-hidden flex justify-center items-center w-[5vw] h-[5vh] inline-block a' href="https://github.com/Fazlerabbi-Fahad"><FaGithub className='w-[4vw] h-[4vh]'></FaGithub></a></li>
                <li ><a className='relative overflow-hidden flex justify-center items-center w-[5vw] h-[5vh] inline-block a' href="https://www.linkedin.com/in/fazle-rabbi-fahad/"><FaLinkedinIn className='w-[4vw] h-[4vh]'></FaLinkedinIn></a></li>
                <li ><Link className='relative overflow-hidden flex justify-center items-center w-[5vw] h-[5vh] inline-block a' to='/contact'><HiMail className='w-[4vw] h-[4vh]'></HiMail></Link></li>
            </ul>
        </div>
    );
};

export default Footer;