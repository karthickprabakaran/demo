import React from 'react'
import mockupPhone from '../../assets/renters/mockupPhone.png'
import iconMoney from '../../assets/renters/money.png'

const RentInsightsSection = () => {
  return (
    <div className="relative bg-[#7690E4] h-[900px] w-full px-6 md:px-20 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between relative">

        {/* Left Text Block */}
        <div className="max-w-sm z-10">
          <h2 className="text-[24px] md:text-[32px] font-semibold crimson leading-snug lg:leading-normal">
            We make renting smarter with rent trends and insights at your fingertips
          </h2>
        </div>

        {/* Center Phone Mockup */}
        <div className="z-0 absolute left-140 top-40">
          <img
            src={mockupPhone}
            alt="App Insights"
            className="w-[280px] md:w-[350px] xl:w-[380px] drop-shadow-xl"
          />
        </div>

        {/* Floating Info Card - Right Aligned, Centered Vertically */}
        <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-xl p-4 w-[300px]  h-[100px] flex items-start gap-3 z-10">
          <img src={iconMoney} alt="icon" className="w-8 h-8 mt-5 opacity-100" />
          <div>
            <p className="font-semibold text-[15px]">We show you</p>
            <p className="text-sm leading-snug">
              When it’s a good time to move, negotiate or stay put
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentInsightsSection
