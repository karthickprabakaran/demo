import hero1 from '../../assets/hero1.png';

const Hero1 = () => {
  return (
    <section className="bg-[#F1F4FC] px-6 py-12 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">

      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-[52px] md:text-5xl font-bold text-[#3A4155] mb-6 crimson leading-snug">
          Offer unbeatable <br />
          property and real estate <br />
          deals on Gatherly
        </h1>

        <button className="btn bg-[#3A4155] text-white h-12 rounded-[12px] px-6 py-3 text-sm font-medium">
          Join as a partner
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[459px] md:h-[448px]">
        <img
          src={hero1}
          alt="Happy woman in real estate setting"
          className="w-full h-full rounded-[32px] object-cover"
        />
      </div>
    </section>
  );
};


export default Hero1;
