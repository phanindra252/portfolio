import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-8 shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between lg:justify-center lg:space-x-80 items-center px-4 lg:px-0 ">
        {/* Logo/Title */}
        <h1 className="text-blue-500 font-bold text-xl">PHANINDRA</h1>

        {/* Hamburger Button for mobile */}
        <button
          className="lg:hidden text-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Centered Navigation Links (shown only on large screens) */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#education" className="text-gray-700 hover:text-blue-500">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-700 hover:text-blue-500">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#profile" className="text-gray-700 hover:text-blue-500">
              PROFILE
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Navigation Links (shown on smaller screens) */}
        {isOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#education"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                PROFILE
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                CLIENTS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
