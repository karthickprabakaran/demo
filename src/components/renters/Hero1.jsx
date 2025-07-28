import React from 'react'

// Replace these with your actual icon imports
import icon1 from '../../assets/renters/bg1.png'  // hand gesture top left
import icon2 from '../../assets/renters/bg2.png'  // photo icon top center
import icon3 from '../../assets/renters/bg3.png'  // bar chart top right
import icon4 from '../../assets/renters/bg4.png'  // money hands far right
import icon5 from '../../assets/renters/bg5.png'  // calendar near right
import icon6 from '../../assets/renters/bg6.png'  // tag bottom right
import icon7 from '../../assets/renters/bg7.png'  // calculator bottom right
import icon8 from '../../assets/renters/bg8.png'  // heart-hand bottom center-left
import icon9 from '../../assets/renters/bg9.png'  // pencil bottom left
import icon10 from '../../assets/renters/bg10.png' // stars box center-left
import icon11 from '../../assets/renters/bg11.png' // hand top left (slightly lower)

const HeroSection = () => {
  return (
    <div className="relative bg-[#7690E4] text-white px-0 py-32 text-center overflow-hidden">

      <img src={icon1} className="absolute top-[35%] left-[1%]  opacity-90 w-10" alt="icon1" />
      <img src={icon2} className="absolute top-[20%] left-[18%]  opacity-80  w-10" alt="icon11" />
      <img src={icon6} className="absolute top-[5%] left-[36%]  opacity-100  w-10" alt="icon2" />
      <img src={icon8} className="absolute top-[8%] right-[30%]  opacity-100  w-10" alt="icon3" />
      <img src={icon11} className="absolute top-[20%] right-[6%]  opacity-80  w-10" alt="icon4" />
      <img src={icon3} className="absolute top-[55%] right-[0%]  opacity-80  w-10" alt="icon12" />

      <img src={icon4} className="absolute top-[40%] left-[32%]  opacity-100  w-10" alt="icon10" />
      <img src={icon3} className="absolute bottom-[26%] left-[20%]  opacity-90  w-10" alt="icon9" />
      <img src={icon5} className="absolute bottom-[13%] left-[35%]  opacity-100  w-10" alt="icon8" />
      <img src={icon7} className="absolute bottom-[12%] right-[34%]  opacity-100  w-10" alt="icon7" />
      <img src={icon10} className="absolute bottom-[22%] right-[18%]  opacity-80  w-10" alt="icon6" />
      <img src={icon9} className="absolute top-[45%] right-[30%] opacity-100  w-10" alt="icon5" />

      {/* Text and Button */}
      <h1 className="text-4xl md:text-5xl crimson font-bold mb-6 leading-tight">
        Rent<br />smarter,<br />together
      </h1>
      <button className="btn bg-[#3A4155] text-white mt-20 px-10 py-2 h-20 rounded-[30px] text-[16px] hover:scale-105 transition duration-300">
        Get Gatherly
      </button>

    </div>
  )
}

export default HeroSection
