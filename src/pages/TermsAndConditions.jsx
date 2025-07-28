import logo from '../assets/logos/gatherly-logo-with-text.png';

import terms from '../assets/renters/TermsAndConditions.png'
import footerLogo from '../assets/footerLogo.png';
import appStoreBadge from '../assets/app-store-badge.png';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const TermsAndConditions = () => {
  return (

    <>

      <header className="bg-[#fff] px-6 py-4 flex justify-between h-30 items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} className='w-36' />

        </div>

        <button className="btn btn-ghost bg-white text-[#3A4155] rounded-lg">Join as a partner</button>

      </header>

      <img src={terms} />


      <footer className="bg-[#fff] px-6  md:px-12 py-12 text-[#3A4155] font-crimson">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left side: Logo + tag + links */}

          <div className="flex flex-col space-y-4">
            <img src={footerLogo} alt="Gatherly logo" className="w-[300px]" />
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-[16px] font-semibold ">
              <p className="no-underline crimson decoration-transparent text-[32px]">Rent smarter together</p>
            </div>
          </div>

          {/* Right side: App Store Badge + links */}
          <div className="flex flex-col items-end space-y-4">
            <img src={appStoreBadge} alt="Download on the App Store" className="w-[140px]" />
            <div className="flex flex-col md:flex-row md:items-center crimson gap-10 text-[22px] font-semibold underline underline-offset-4">
              <a href="#">For Renters</a>
              <a href="#">For Rentals/Realtors</a>
            </div>
          </div>
        </div>


        <hr className="my-10 border-gray-300" />

        {/* Bottom section */}
        <div className="max-w-7xl mx-auto flex flex-col font-700 font-bold md:flex-row justify-between items-center gap-6 text-sm">
          {/* Left: Copyright */}
          <div className="text-center md:text-left text-[16px] space-y-1">
            <p>© 2025 All rights reserved, Cradle Inc.</p>
            <p>Made in Toronto, ON</p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex justify-center items-center gap-5 text-[32px] text-xl">
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

          {/* Right: Links */}
          <div className="flex gap-4 justify-center font-700 font-bold text-[18px]">

            <a href="#">Terms of use</a>
            <a href="#">Get in touch</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </>

  )
}

export default TermsAndConditions
