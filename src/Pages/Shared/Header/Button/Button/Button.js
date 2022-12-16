import React from 'react';
import './Button.css'

const Button = () => {
    return (
        <div>
            <a
                href='Fazle Rabbi Fahad- Resume-Online.pdf'
                download='Fazle Rabbi Fahad- Resume-Online.pdf'
                alt=""
            >
                <div className='button-header'>
                    <button><span>Resume</span></button>
                </div>
            </a>
        </div>
    );
};

export default Button;