import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const Navbar = () => {
  return (
    <nav className="fixed top-0  w-full h-[70px] md:h-[100px] lg:h-[80px] bg-opacity-25 flex justify-between items-center px-4 md:px-8 lg:px-24 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src="/Car.png"
          alt="logo"
          width={40} // Smaller size on mobile
          height={40}
          className="object-contain  md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
        <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-semibold bg-opacity-15 rounded-md  ">
          WebDev{" "}
          <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Akki
          </span>
        </h1>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 md:gap-5 lg:gap-6 bg-opacity-15 rounded-md  ">
        <a
          href="https://github.com/AlexMehra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-slate-500 hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl lg:text-3xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-blue-300 hover:text-blue-800 transition-colors"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl lg:text-3xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-300 hover:text-pink-800 transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl lg:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-singh-mehra-7a1025217/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-300 hover:text-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl lg:text-3xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
