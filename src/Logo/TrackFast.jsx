import React from 'react';
import logo from '../../public/assets/images/logo.png'
import { Link } from 'react-router';

const TrackFast = () => {
    return (
      <Link to="/" className="flex items-end">
  <img className="mb-2" src={logo} alt="TrackFast Logo" />
  <p className="text-3xl -ml-2 font-extrabold">TrackFast</p>
</Link>

    );
};

export default TrackFast;