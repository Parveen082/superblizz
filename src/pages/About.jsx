import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Parth Verma', role: 'Founder & Creative Director', icon: '🧑‍💼' },
  { name: 'Aditi Sharma', role: 'Lead Designer', icon: '🎨' },
  { name: 'Rahul Singh', role: 'UI/UX Specialist', icon: '💻' },
  { name: 'Sneha Patel', role: 'Brand Strategist', icon: '📈' },
];

const About = () => (
  <div className="bg-superdark min-h-screen pt-28 pb-12 text-white">
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10"><span className="text-white">About</span> <span className="text-superred">Us</span></h1>
    <div className="max-w-2xl mx-auto text-center text-base md:text-lg text-gray-200 mb-10">
      Superbliz is a design agency in Bengaluru empowering businesses, personal brands, and startups with innovative and creative design solutions. From striking logos to seamless digital experiences, we help you make a lasting impression.<br /><br />
      <b>Our Mission:</b> To elevate brands with limitless creativity and bold, direct design.
    </div>
    <h2 className="text-superred text-2xl font-bold text-center mb-8">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {team.map((member, i) => (
        <motion.div
          key={member.name}
          whileHover={{ scale: 1.06, boxShadow: '0 0 20px #ff1e1e' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-lg"
        >
          <div className="w-20 h-20 rounded-full bg-superred flex items-center justify-center text-3xl text-white mb-3">{member.icon}</div>
          <h3 className="text-lg font-bold mb-1">{member.name}</h3>
          <p className="text-superred text-sm">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default About; 