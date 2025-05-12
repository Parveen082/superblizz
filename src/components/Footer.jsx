import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white pt-12 pb-4 border-t-2 border-superred">
    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
      <div className="font-bold text-lg tracking-wider flex items-center gap-2">
        <span role="img" aria-label="bolt">⚡</span> SUPERBLIZ
      </div>
     <div className="text-superred text-center text-base">
  CONTACT US<br />
  <a href="tel:+918999074839" className="hover:underline">+91 8999074839</a><br />
  <a href="mailto:info@superbliz.com" className="hover:underline">info@superbliz.com</a>
</div>

      <div className="flex gap-4 mt-2">
        <a href="#"  rel="noopener noreferrer" aria-label="Instagram" className="hover:text-superred transition">
          <FaInstagram size={22} />
        </a>
        <a href="#"  rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-superred transition">
          <FaLinkedin size={22} />
        </a>
        <a href="https://wa.me/918999074839"  rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-superred transition">
          <FaWhatsapp size={22} />
        </a>
      </div>
      <div className="text-gray-400 text-sm mt-2 text-center">
        SUPERBLIZ © Copyright 2025 All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
