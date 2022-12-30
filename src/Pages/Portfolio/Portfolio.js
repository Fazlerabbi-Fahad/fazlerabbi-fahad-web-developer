import React from 'react';
import './Portfolio.css';
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import RecycleBIN from "../../Assets/RecycleBIN.png";
import Onnorokom from "../../Assets/Onnorokom.png";
import PhotoGAL from "../../Assets/PhotoGAL.png";


const data = [
    {
        id: 1,
        image: RecycleBIN,
        title: "RecycleBIN-A website for selling used furniture",
        duration: "Nov, 2022 - Dec, 2022",
        line1: "1. A responsive, fully-functional re-selling website",
        line2: "2. Allowing customers and sellers to create an account,browse products, buy products & write reviews",
        line3: "3. Admins can delete any sellers and buyers, sellers have the ability to add products, remove existing products,buyers can buy products.",
        live: "https://recycle-bin-8fe8b.web.app/",
        client: "https://github.com/Fazlerabbi-Fahad/recycle_bin_client",
        server: "https://github.com/Fazlerabbi-Fahad/recycle_bin_server"
    },
    {
        id: 2,
        image: Onnorokom,
        title: "Onnorokom Pathshala-A online learning platform",
        duration: "Nov, 2022 - Nov, 2022",
        line1: "1. A responsive, fully-functional online learning website",
        line2: "2. Allowing learners to create an account,browse classes",
        line3: "3. Has firebase authentication(Google, Github, and Email)",
        live: "https://onnorokom-pathsala-d832f.web.app/",
        client: "https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Client",
        server: "https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Server"
    },
    {
        id: 3,
        image: PhotoGAL,
        title: "PhotoGAL-A photographer's service selling website",
        duration: "Nov, 2022 - Nov, 2022",
        line1: "1. A responsive, fully-functional photographer's website",
        line2: "2. Allowing see my services and take services",
        line3: "3. Has firebase authentication(Google, Github, and Email)",
        live: "https://photogal54.netlify.app/",
        client: "https://github.com/Fazlerabbi-Fahad/photoGAL-client-side",
        server: "https://github.com/Fazlerabbi-Fahad/photoGAL-server-side"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {
                    data.map(({ id, image, title, duration, line1, line2, line3, live, client, server }) =>
                        <article className='portfolio-item'>
                            <div className="portfolio-item-image">
                                <img src={image} alt="" />
                            </div>
                            <h3><strong>{title}</strong></h3>
                            <small>{duration}</small>
                            <ul>
                                <li>{line1}</li>
                                <li>{line2}</li>
                                <li>{line3}</li>
                            </ul>
                            <div className="portfolio-item-cta">
                                <a href={live} className='btn btn-primary' target='_blank'><AiOutlineGlobal className='icon' />Live</a>
                                <a href={client} className='btn' target='_blank'><AiOutlineGithub className='icon' />Client</a>
                                <a href={server} className='btn' target='_blank'><AiOutlineGithub className='icon' />Server</a>
                            </div>
                        </article>)
                }
            </div>
        </section >
    );
};

export default Portfolio;