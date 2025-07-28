import React from 'react'

import propertyImageCard from '../../assets/renters/building.png'
import topRightCard from '../../assets/renters/quality.png'
import bottomRightCard from '../../assets/renters/cashback.png'
import like from '../../assets/renters/like.png'
import bino from '../../assets/renters/bino.png'
import tags from '../../assets/renters/tags.png'


const PropertyFeatureSection = () => {
  return (
    <section className="bg-[#7690E4]  text-white w-full py-20 px-4 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-32">
        <h2 className="text-3xl md:text-5xl font-semibold crimson leading-tight">
          Explore properties, ratings <br className="hidden md:inline" />
          and find property deals
        </h2>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10">

        {/* Left Card - Taller */}
        <div className="bg-[#23263B] rounded-[2rem] p-6 relative min-h-[540px] max-w-[270px] w-full">
          {/* Icon */}
          <div className="text-white text-4xl w-10 mb-4">
            <img src={bino} />
          </div>

          <h3 className="text-xl font-semibold mb-2">Browse <br /> Properties</h3>
          <p className="text-sm text-gray-300 mb-4 ">
            Explore property profiles and save them to watchlist way ahead of your move
          </p>

          <img
            src={propertyImageCard}
            alt="Property Card"
            className="absolute bottom-[-30px] left-[-30px] w-[240px] md:w-[260px] rounded-xl "
          />
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-8">

          {/* View Ratings */}
          <div className="bg-[#23263B] rounded-[2rem] p-6 relative min-h-[240px] w-[440px] max-w-[500px] ">
            {/* Quality image in top-left */}
            <img
              src={topRightCard}
              alt="Quality"
              className="absolute top-[-20px] left-[-20px] w-[240px]  drop-shadow-xl"
            />

            {/* Like icon in top-right */}
            <div className="absolute top-4 right-4 w-10 h-10">
              <img src={like} alt="Like Icon" className="w-full h-full object-contain" />
            </div>

            {/* Text in bottom-right */}
            <div className="absolute bottom-4 right-4 text-right">
              <h3 className="text-xl font-semibold mb-2 text-white">View Ratings</h3>
              <p className="text-sm text-gray-300 max-w-[180px]">
                See ratings from real tenants on all the things you care about
              </p>
            </div>
          </div>
          {/* Cashback */}
          <div className="bg-[#23263B] mb-40 rounded-[2rem] p-6 relative min-h-[240px] max-w-[500px] w-[440]">
            <div className="text-white w-10 text-4xl mb-0">
              <img src={tags} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unlock deals & earn cashback</h3>
            <p className="text-sm text-gray-300 ">
              Show interest in a property on Gatherly and earn a bonus from us when you move
            </p>

            <img
              src={bottomRightCard}
              alt="Cashback Info"
              className="absolute bottom-[-20px] right-[-20px] w-[160px] md:w-[200px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section >
  )
}

export default PropertyFeatureSection
