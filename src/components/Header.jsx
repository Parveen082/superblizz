import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import the PDF file
import brochure from '../asset/SUPERBLIZBROCHURE.pdf';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-[1000] shadow-lg">
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-8 py-5 md:py-4">
        <div className="font-bold text-xl tracking-wider flex items-center gap-2 z-50">
          <span role="img" aria-label="bolt">⚡</span> SUPERBLIZ
        </div>

        {/* Center-aligned navigation links */}
        <div className="hidden md:flex gap-8 items-center justify-center flex-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium text-base transition-colors duration-200 ${location.pathname === link.to ? 'text-superred' : 'text-white hover:text-superred'}`}
            >
              {link.label}
            </Link>
          ))}
          {/* Download Brochure Button in Desktop View */}
        </div>
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href={brochure}
          download
          className="hidden md:block ml-auto bg-superred text-white px-5 py-2 rounded-full font-semibold shadow transition hover:bg-white hover:text-superred border-2 border-superred"
        >
          Download Brochure
        </motion.a>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xl font-bold ${location.pathname === link.to ? 'text-superred' : 'text-white hover:text-superred'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Download Brochure Button in Mobile View */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={brochure}
              download
              className="mt-4 bg-superred text-white px-6 py-2 rounded-full font-semibold shadow transition hover:bg-white hover:text-superred border-2 border-superred"
            >
              Download Brochure
            </motion.a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
