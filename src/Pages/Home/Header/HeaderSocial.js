import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
    return (
        <div className='header-socials'>
            <a href="https://www.linkedin.com/in/fazle-rabbi-fahad/" target="_black"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/Fazlerabbi-Fahad" target="_black"><FaGithub></FaGithub></a>
            <a href="https://www.facebook.com/fablerabbi.fahad" target="_black"><FaFacebook></FaFacebook></a>
            <a href="https://www.instagram.com/fazlerabbi_fahad/" target="_black"><FaInstagram></FaInstagram></a>
        </div>
    );
};

export default HeaderSocial;