import React from 'react';
import perkImage from '../../assets/perkImage.png';
import cashbackImage from '../../assets/cashBack.png';
import bonusImage from '../../assets/bonus.png';

const Hero3 = () => {
  return (
    <section className="bg-[#F1F4FC] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#3A4155] crimson mb-4">
        Say hello to new customers <br />
        Say goodbye to empty units
      </h2>

      {/* CTA Button */}
      <div className="mt-6 mb-12">
        <button className="btn bg-[#3A4155] text-white rounded-[12px] px-6 py-3 text-sm font-medium">
          Join as a partner
        </button>
      </div>

      {/* Image row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
          <img src={perkImage} alt="Perk" className="w-[220px]" />
        </div>
        <div>
          <img src={cashbackImage} alt="Cashback" className="w-[220px]" />
        </div>
        <div>
          <img src={bonusImage} alt="Bonus" className="w-[220px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
