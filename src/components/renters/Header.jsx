import React from "react";
import headerLogo from '../../assets/renters/headerLogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-[#7690E4] flex justify-between pb-30 items-center px-6 py-4">
      {/* Left side - Logo and Brand */}
      <div className="flex items-center space-x-2">
        {/* Logo Icon (placeholder circle and arcs like in image) */}
        <Link to='/renters'>
          <div className="w-40">
            <img src={headerLogo} />
          </div>
        </Link>
      </div>

      {/* Right side - Button */}

      <button className="btn btn-ghost bg-white text-[#3A4155] rounded-lg">Download the app</button>
    </div >
  );
};

export default Header;
