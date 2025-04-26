import React from "react";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/bakar.yare.3445?igsh=Z29mZnE2ZTAxejVv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a 
        href="https://github.com/Abubakrde" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.facebook.com/bakar.yare.3445"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
    </footer>
  );
};

export default Footer;