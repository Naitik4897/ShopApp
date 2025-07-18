import React from 'react';
import './spinner.css'; // Assuming you have a CSS file for spinner styles

const Spinner = () => {
    return (
        <div className='grid justify-center items-center w-[100%] h-screen'>
            <div className='spinner'></div>
        </div>
    )
}

export default Spinner;