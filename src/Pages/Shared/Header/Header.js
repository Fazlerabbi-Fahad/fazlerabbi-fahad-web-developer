import React from 'react';
import './Header.css'
import Button from "./Button/Button/Button";
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <div className='absolute justify-center mt-3 ml-8'>
                <div className="dropdown mt-3 ">
                    <div>
                        <label tabIndex={0} className="btn btn-ghost relative overflow-hidden flex flex-col justify-center items-center glass-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-md w-52 relative overflow-hidden flex flex-col justify-center items-center glass-menu">
                            <li><Link className='text-2xl mt-5' to='/home'>Home</Link></li>
                            <li><Link className='text-2xl mt-5' to='/about'>It's me</Link></li>
                            <li><Link className='text-2xl mt-5' to='/skills'>Expertise</Link></li>
                            <li><Link className='text-2xl mt-5' to='/projects'>My works</Link></li>
                            <li><Link className='text-2xl mt-5' to='/contact'>Reach me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='absolute ml-[20vh] top-3'>
                    <Button className="w-[10vh]"></Button>
                </div>
            </div>
        </div>
    );
}

export default Header;