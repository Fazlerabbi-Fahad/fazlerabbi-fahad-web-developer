import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";

const Nav = () => {
    const [activeNow, setActiveNow] = useState("#");


    return (
        <nav>
            <a href="#"
                onClick={() => setActiveNow("#")}
                className={activeNow === "#" ? "active" : "'"}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNow("#about")}
                className={activeNow === "#about" ? "active" : "'"}
            ><AiOutlineUser /></a>
            <a href="#experience"
                onClick={() => setActiveNow("#experience")}
                className={activeNow === "#experience" ? "active" : "'"}
            ><BiBook /></a>
            <a href="#portfolio"
                onClick={() => setActiveNow("#portfolio")}
                className={activeNow === "#portfolio" ? "active" : "'"}
            ><AiOutlineProject /></a>
            <a href="#contact"
                onClick={() => setActiveNow("#contact")}
                className={activeNow === "#contact" ? "active" : "'"}
            ><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;