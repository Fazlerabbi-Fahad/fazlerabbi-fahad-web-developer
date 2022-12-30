import React from 'react';
import img1 from "./../../Assets/img1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './About.css';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={img1} alt="About Image" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className='about-card'>
                            <FaAward className='about-icon'></FaAward>
                            <h5>Experience</h5>
                            <small>6+ Months Working</small>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon'></FiUsers>
                            <h5>Clients</h5>
                            <small>4+ Worldwide</small>
                        </article>
                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>12+ Completed</small>
                        </article>
                    </div>
                    <p>
                        <ul>
                            <li><h2><strong>My Information</strong></h2></li>
                            <li><strong>Name :</strong> Fazle Rabbi Fahad</li>
                            <li><strong>Age :</strong> 21</li>
                            <li><strong>Nationality:</strong> Bangladeshi</li>
                            <li><strong>Address :</strong> Dhaka, Bangladesh</li>
                            <li><strong>Phone :</strong> +8801729992254</li>
                            <li><strong>E-mail :</strong> fazlerabbifahad.54@gmail.com</li>
                            <li><strong>Study :</strong> Completing Bachelor's on Computer Science and Engineering at American International University, Bangladesh </li>
                        </ul>
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;