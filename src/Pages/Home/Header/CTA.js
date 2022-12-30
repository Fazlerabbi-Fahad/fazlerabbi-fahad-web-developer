import React from 'react';
import ResumeButton from './ResumeButton/ResumeButton';

const CTA = () => {
    return (
        <div className='cta'>
            <a href=""><ResumeButton>Resume</ResumeButton></a>
            {/* <a href="" className='btn'>Download</a> */}
            {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
    );
};

export default CTA;