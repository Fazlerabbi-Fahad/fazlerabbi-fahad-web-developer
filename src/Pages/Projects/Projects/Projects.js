import React from 'react';
import './Projects.css';
import RecycleBIN from "../../../Images/RecycleBIN.png";
import Onnorokom from "../../../Images/Onnorokom.png";
import PhotoGAL from "../../../Images/PhotoGAL.png";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='project-img'>
            <h1 class="text-work">Projects I Completed</h1>
            <div>
                <div className="carousel w-full  ">
                    <div id="item1" className="carousel-item w-full mt-10">
                        <div className="relative overflow-hidden flex flex-col justify-center items-center h-[80vh] left-[40vh]">
                            <div className="card lg:card-side shadow-xl">
                                <figure>
                                    <img src={RecycleBIN} className="lg:w-[50vh] w-[30vh] lg:h-[50vh] h-[30vh]" alt="RecycleBIN" />
                                </figure>
                                <div className="card-body relative overflow-hidden section1">
                                    <h1 className="card-title">RecycleBIN-A website for selling used furniture</h1>
                                    <p>Nov, 2022 - Dec, 2022</p>
                                    <p className='absolute top-[12vh] mb-5'>
                                        <ol className='text-white lg:visible invisible ' align="justify">
                                            <li>1. A responsive, fully-functional re-selling website</li>
                                            <li>2. Allowing customers and sellers to create an account,<br></br> browse products, buy products & write reviews</li>
                                            <li>3. Admins can delete any sellers and buyers, sellers have<br></br> the ability to add products, remove existing products,<br></br> buyers can buy products.</li>
                                        </ol>
                                    </p>
                                    <div>
                                        <ul className='grid grid-cols-5 gap-3 text-sm'>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#ReactJs</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#JavaScript</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#HTML5</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#CSS</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#Tailwind</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#React Router</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Firebase</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Node JS</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#Express JS</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#MongoDB</li>
                                        </ul>
                                    </div>
                                    <div className='flex'>
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGlobe className='w-3 mr-1' /><a href='https://recycle-bin-8fe8b.web.app/'>Live Site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/recycle_bin_client'>Client site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/recycle_bin_server'>Server site</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full mt-10">
                        <div className="relative overflow-hidden flex flex-col justify-center items-center h-[80vh] left-[40vh] ">
                            <div className="card lg:card-side shadow-xl">
                                <figure>
                                    <img src={Onnorokom} className="lg:w-[50vh] w-[30vh] lg:h-[50vh] h-[30vh]" alt="RecycleBIN" />
                                </figure>
                                <div className="card-body relative overflow-hidden section1">
                                    <h1 className="card-title">Onnorokom Pathshala - A online learning platform</h1>
                                    <p>Nov, 2022 - Nov, 2022</p>
                                    <p className='absolute top-[12vh] mb-5'>
                                        <ol className='text-white lg:visible invisible ' align="justify">
                                            <li>1. A responsive, fully-functional online learning website</li>
                                            <li>2. Allowing learners to create an account,<br></br> browse classes</li>
                                            <li>3. Has firebase authentication(Google, Github, and Email)</li>
                                        </ol>
                                    </p>
                                    <div>
                                        <ul className='grid grid-cols-5 gap-3 text-sm'>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#ReactJs</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#JavaScript</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#HTML5</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#CSS</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#Tailwind</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#React Router</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Firebase</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Node JS</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#Express JS</li>
                                        </ul>
                                    </div>
                                    <div className='flex'>
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGlobe className='w-3 mr-1' /><a href='https://onnorokom-pathsala-d832f.web.app/'>Live Site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Client'>Client site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/Onnorokom-Pathsala-Server'>Server site</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full mt-10">
                        <div className="relative overflow-hidden flex flex-col justify-center items-center h-[80vh] left-[40vh] ">
                            <div className="card lg:card-side shadow-xl">
                                <figure>
                                    <img src={PhotoGAL} className="lg:w-[50vh] w-[30vh] lg:h-[50vh] h-[30vh]" alt="RecycleBIN" />
                                </figure>
                                <div className="card-body relative overflow-hidden section1">
                                    <h1 className="card-title">PhotoGAL-A photographer's service selling website</h1>
                                    <p>Nov, 2022 - Nov, 2022</p>
                                    <p className='absolute top-[12vh] mb-5'>
                                        <ol className='text-white lg:visible invisible ' align="justify">
                                            <li>1. A responsive, fully-functional photographer's website</li>
                                            <li>2. Allowing see my services and take services</li>
                                            <li>3. Has firebase authentication(Google, Github, and Email)</li>
                                        </ol>
                                    </p>
                                    <div>
                                        <ul className='grid grid-cols-5 gap-3 text-sm'>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#ReactJs</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#JavaScript</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#HTML5</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#CSS</li>
                                            <li className='outline w-[70%] mr-0 rounded-md text-green-400'>#Tailwind</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#React Router</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Firebase</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#Node JS</li>
                                            <li className='outline w-[100%] mr-0 rounded-md text-green-400'>#Express JS</li>
                                            <li className='outline w-[80%] mr-0 rounded-md text-green-400'>#MongoDB</li>
                                        </ul>
                                    </div>
                                    <div className='flex'>
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGlobe className='w-3 mr-1' /><a href='https://photogal54.netlify.app/'>Live Site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/photoGAL-client-side'>Client site</a></button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center rounded-md"><FaGithub className='w-3 mr-1' /><a href='https://github.com/Fazlerabbi-Fahad/photoGAL-server-side'>Server site</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center w-full py-2 gap-2 ">
                    <a href="#item1" className="btn btn-ghost ">1</a>
                    <a href="#item2" className="btn btn-ghost ">2</a>
                    <a href="#item3" className="btn btn-ghost ">3</a>

                </div>
            </div>
            <div>
                <h2 class="rotate">My Works</h2>
            </div>
        </div >
    );
};

export default Projects;