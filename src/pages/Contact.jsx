import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/superbliz' },
  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/superbliz' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', url: 'http://wa.me/918999074839' },
];

const Contact = () => {
  return (
    <div className="bg-superdark min-h-screen pt-28 pb-12 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        <span className="text-white">Connect with </span>
        <span className="text-superred">Us</span>
      </h1>

      {/* Description */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-lg md:text-xl text-gray-300">
          We would love to hear from you! Whether you have a question, need assistance, or just want to say hello, simply click on any of the following buttons to instantly connect with us through your preferred platform.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#181818] p-4 rounded-full text-xl transition hover:text-superred shadow-lg"
          >
            {link.icon}
            <span className="hidden md:inline">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
