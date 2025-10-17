import React from 'react';
import { Outlet } from 'react-router';
import AuthImg from "../../public/assets/images/authImage.png"
import TrackFast from '../Logo/TrackFast';

const AuthLayout = () => {
    return (
        <div>
            <div className=" bg-base-200 p-12">
                <TrackFast></TrackFast>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>

    <img
      src={AuthImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div className='flex-1'>
     <Outlet></Outlet>
    </div>
  </div>
</div>
        </div>
    );
};

export default AuthLayout;