import React from 'react';
import './About.css';
import img2 from "../../../Images/img2.jpg";
import img1 from "../../../Images/img1.jpg";

const About = () => {
    return (
        <div className='about-img'>
            <div className='body'>
                <div className="hero content-head">
                    <div className="hero-content flex-col flex-row-reverse">
                        <div className="text-center">
                            <h1 className="lg:text-2xl text-sm font-bold text-white text-about">Just One Click & Know Me Better</h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='folded-card'>
                                    <div className="img-box">
                                        <img src={img2} alt="" />
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="details relative overflow-hidden mt-5 pl-3 text-white">
                                        <h1 className='lg:font-bold lg:text-xl text-sm'>About Me</h1>
                                        <p className='lg:text-md text-sm lg:pb-3 pb-0' align="justify">Hello,there. This is Fazle Rabbi Fahad. I'm a full stack developer. Currently
                                            pursuing my BSc in Computer Science and Engineering.
                                        </p>
                                        <h1 className='lg:font-bold text-sm pb-3 underline'>My Information</h1>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-10'>Name       </span>: Fazle Rabbi Fahad</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-14'>Age        </span>: 21</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-1'>Nationality</span>: Bangladeshi</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-6'>Address    </span>: Dhaka, Bangladesh</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-10'>Phone      </span>: +8801729992254</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-9'>E-mail     </span>: fazlerabbifahad.54@gmail.com</h4>
                                        <h4 className='lg:text-md text-sm'><span className='lg:font-semibold pr-3'>University    </span>: American International University, Bangladesh</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div>
                    <h2 class="rotate">It's me</h2>
                </div>
            </div>
        </div>
    );
};

export default About;