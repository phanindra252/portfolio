import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Profiles = () => {
  const profiles = [
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <section id="profile" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Profiles</h2>

        {/* Profile Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition"
            >
              <div className="text-4xl mb-2">{profile.icon}</div>
              <span className="text-lg font-medium">{profile.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
