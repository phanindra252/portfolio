import image from "../assets/pexels-andrew-2312369.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          HI <span className="text-blue-500">,</span> I AM <br /> PHANINDRA
          <span className="text-blue-500"> BHOGINENI</span>
          <span className="text-blue-500"> .</span>
        </h1>
        <p className="text-lg md:text-2xl mt-4">FULLSTACK DEVELOPER</p>

        {/* Download Resume Button */}
        <a
          href="/B.Phanindra_resume.pdf"
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
