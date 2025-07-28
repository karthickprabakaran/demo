import React from 'react';
import footerLogo from '../../assets/renters/logoWhite.png';
import appStoreBadge from '../../assets/app-store-badge.png';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#7690E4] px-6 md:px-12 py-12 text-[#3A4155] font-crimson">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left side: Logo + tag + links */}

        <div className="flex flex-col space-y-4">
          <img src={footerLogo} alt="Gatherly logo" className="w-[300px]" />
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-[16px] font-semibold ">
            <p className="no-underline crimson decoration-t[48;49;141;931;1269transparent text-[32px] text-white">Rent smarter together</p>
          </div>
        </div>

        {/* Right side: App Store Badge + links */}
        <div className="flex flex-col  mt-2 items-end space-y-4">
          <img src={appStoreBadge} alt="Download on the App Store" className="w-[140px]" />
          <div className="flex flex-col md:flex-row md:items-center crimson gap-10 text-[22px] font-semibold underline text-white underline-offset-4">
            <a href="#">For Renters</a>
            <a href="#">For Rentals/Realtors</a>
          </div>
        </div>
      </div>


      <hr className="my-10 border-gray-300" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto flex flex-col font-700 font-bold md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left: Copyright */}
        <div className="text-center md:text-left text-[16px] text-white space-y-1">
          <p>© 2025 All rights reserved, Cradle Inc.</p>
          <p>Made in Toronto, ON</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex text-white justify-center items-center gap-5 text-[32px] text-xl">
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>

        {/* Right: Links */}
        <div className="flex gap-4 justify-center font-700 font-bold text-white text-[18px]">

          <Link to="/terms">   <a href="#">Terms of use</a> </Link>
          <Link to="/">  <a href="#">Get in touch</a>  </Link>
          <Link to="/privacy"> <a href="#">Privacy Policy</a>  </Link>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

