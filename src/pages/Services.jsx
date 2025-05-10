import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Logo Designing', desc: 'Crafting memorable and impactful visual identities that capture the essence of your brand.', details: ['Custom logo concepts', 'Brand color palette', 'Logo usage guidelines'] },
  { title: 'Brand Identity', desc: 'Developing cohesive brand identities through business card design, letterhead, banners, and more.', details: ['Business card design', 'Letterhead & envelope', 'Brand guidelines', 'Festival creatives'] },
  { title: 'Graphic Designing', desc: 'Designing compelling marketing materials, from brochures and posters to social media graphics.', details: ['Brochures & flyers', 'Posters & banners', 'Social media graphics'] },
  { title: 'UI/UX Designing', desc: 'Creating seamless and engaging user interfaces and experiences for websites and applications.', details: ['Website UI/UX', 'Mobile app UI', 'Wireframes & prototypes'] },
  { title: 'CGI Advertisement', desc: 'Bringing your product or brand to life with stunning and photorealistic computer-generated imagery.', details: ['Product CGI', '3D animation', 'Ad campaign visuals'] },
  { title: 'Video Editing', desc: 'Transforming raw footage into polished and engaging videos that tell your story effectively.', details: ['Corporate videos', 'Social media reels', 'Explainer videos'] },
];

const Services = () => (
  <div className="bg-superdark min-h-screen pt-28 pb-12 text-white">
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10"><span className="text-white">Our</span> <span className="text-superred">Services</span></h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          whileHover={{ scale: 1.04, boxShadow: '0 0 20px #ff1e1e' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#181818] rounded-xl p-8 flex flex-col items-start shadow-lg"
        >
          <h2 className="text-superred text-lg font-bold mb-2">{s.title}</h2>
          <p className="text-white text-sm mb-3">{s.desc}</p>
          <ul className="list-disc ml-5 text-gray-300 text-sm mb-2">
            {s.details.map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Services; 