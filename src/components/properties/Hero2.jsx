import phoneMockup from '../../assets/PhoneMockup.png';



const Hero2 = () => {
  return (
    <section className="bg-[#F1F4FC] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#3A4155] crimson mb-12">
        Get your rental in front of <br />
        renters looking to move
      </h2>


      <div className="flex justify-center">
        <img
          src={phoneMockup}
          alt="Phone mockup displaying rental listing"
          className="w-[300px] md:w-[360px] lg:w-[400px] object-contain"
        />
      </div>

    </section >
  )
}

export default Hero2

