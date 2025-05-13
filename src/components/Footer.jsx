import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white pt-8 pb-4">
    {/* Top Red Line */}
    <div className="w-full max-w-[1200px] mx-auto border-t-2 border-superred" />

    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
      {/* Logo, Contact, and Social Media */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 py-4 gap-6">

        {/* Logo and Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span role="img" aria-label="bolt" className="text-superred text-2xl">⚡</span>
          <div>
            <span className="font-extrabold text-xl">SUPERBLIZ</span>
            <p className="text-sm">DESIGN BEYOND LIMITS</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="text-center sm:text-left">
          <h4 className="text-superred font-bold">CONTACT US</h4>
          <a href="tel:+918999074839" className="block hover:underline">+91 89990 74839</a>
          <a href="mailto:info@superbliz.com" className="hover:underline">info@superbliz.com</a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-superred font-bold">FOLLOW US</h4>
          <div className="flex gap-4 text-superred mt-1">
            <a href="/" aria-label="Instagram" className="hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="/" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Red Line */}
      <div className="w-full max-w-[1200px] mx-auto border-t-2 border-superred" />

      {/* Copyright */}
      <div className="text-gray-400 text-sm text-center mt-2">
        SUPERBLIZ © Copyright 2025 All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
