import React from 'react';
import CTA from './CTA';
import ME from "../../../Assets/ME.png";
import './Header.css';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Fazle Rabbi Fahad</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;