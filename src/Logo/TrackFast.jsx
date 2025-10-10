import React from 'react';
import logo from '../../public/assets/images/logo.png'

const TrackFast = () => {
    return (
        <div className='flex items-end'> 
           
            <img className='mb-2' src={logo}></img>
            <p className='text-3xl -ml-2 font-extrabold'>TrackFast</p>
        </div>
    );
};

export default TrackFast;