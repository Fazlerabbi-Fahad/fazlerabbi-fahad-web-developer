import React from 'react';
import './ResumeButton.css';

const ResumeButton = ({ children }) => {
    return (
        <div className='button-header'>
            <a
                href='Fazle Rabbi Fahad-Resume.pdf'
                download='Fazle Rabbi Fahad-Resume.pdf'
            >
                <button><span>
                    {children}</span></button>
            </a>
        </div>
    );
};

export default ResumeButton;