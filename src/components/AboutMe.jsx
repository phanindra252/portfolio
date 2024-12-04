import image from "../assets/pexels-danny-meneses-340146-943096.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8 ">About Me</h2>

        {/* Content Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={image} // Replace with your own image URL
              alt="About me"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate and detail-oriented Full stack Developer with a
              strong foundation in web development technologies, including HTML,
              CSS, JavaScript, React, Node.js, Express.js and PostgreSQL. As a
              graduate, I have honed my skills through various personal and
              academic projects, building responsive and user-friendly websites.
              I enjoy translating design concepts into functional code, ensuring
              that web applications are both visually appealing and highly
              interactive.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a keen interest in modern web development trends, I have
              experience using tools like Tailwind CSS, Git, and npm to
              streamline my workflow. I am continuously learning new
              technologies and best practices to improve my coding efficiency
              and to stay current in this ever-evolving industry.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I am eager to contribute to a dynamic development team where I can
              apply my skills, learn from experienced professionals, and grow
              into a successful frontend developer. My goal is to build
              innovative web solutions that provide great user experiences and
              make a meaningful impact.
            </p>

            <ul className="text-gray-700">
              <li>
                <strong>Location:</strong> Vijayawada, Andhra Pradesh, India
              </li>
              <li>
                <strong>Skills:</strong> Web Development, Frontend, Tailwind
                CSS, React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
