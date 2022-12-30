import React, { useRef } from 'react'; import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q1ax2qw', 'template_0yaheu4', form.current, '7Wr4c3ZuyIJc4V3Ri')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdOutlineEmail className='contact-option-icon'></MdOutlineEmail>
                        <h4>Email</h4>
                        <h5>fazlerabbifahad.54@gmail.com</h5>
                        <a href="mailto:fazlerabbifahad.54@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <RiMessengerLine className='contact-option-icon'></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>Fazle Rabbi Fahad</h5>
                        <a href="https://m.me/fablerabbi.fahad" target="_blank">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <BsWhatsapp className='contact-option-icon'></BsWhatsapp>
                        <h4>Whats App</h4>
                        <h5>Fazle Rabbi Fahad</h5>
                        <a href="https://api.whatspp.com/send?phone=+8801729992254" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' id="" required />
                    <input type="email" name="emai" placeholder='Your Email' id="" required />
                    <textarea name='message' rows="7" placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;