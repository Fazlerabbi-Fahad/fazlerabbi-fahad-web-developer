import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const ContactUs = () => {
    const FORM_ENDPOINT = "mailto:contact@fazlerabbifahad.54@gmail.com";

    return (
        <div className='contact-img'>
            <form

                action={FORM_ENDPOINT}

                method="POST"
            >
                <h1 class="text-contact">Contact Me</h1>
                <div>
                    <div className=' absolute overflow-hidden section'>
                        <p>E-mail:fazlerabbifahad.54@gmail.com</p>
                        <p>Phone:+8801729992254</p>
                        <div className="row100">
                            <div className="col-head m-5">
                                <div className="input-box">
                                    <label htmlFor="user_name">Full Name</label>
                                    <input type="text" name="Contact-Name" placeholder="Type here" className="input input-ghost w-full" />
                                    <span className='line'></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col-head m-5">
                                <div className="input-box">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="Contact-Email" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                                    <span className='line'></span>
                                </div>
                            </div>
                            <div className="col-head m-5">
                                <div className="input-box">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="user_phone" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                                    <span className='line'></span>
                                </div>
                            </div>
                        </div>
                        <div className="row200">
                            <div className="col-head m-5">
                                <div className="input-box">
                                    <label className='block' htmlFor="Message">Type Your Message Here...</label>
                                    <textarea name="message" className="textarea textarea-ghost w-full" placeholder="Bio"></textarea>
                                    <span className='line'></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="col-head m-5">
                                <input type="submit" className="btn btn-primary rounded-md" value="Send"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="rotate">Reach Me</h2>
                </div>
            </form >
        </div>
    );
};

export default ContactUs;