import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'First Aim Overseas', desc: 'Comprehensive branding for a visa company, making complex processes accessible and reliable.', img: 'https://dummyimage.com/400x200/ff1e1e/fff&text=First+Aim+Overseas' },
  { title: 'Clarity Capital', desc: 'Sophisticated logo and branding for an insurance company, establishing a strong brand image.', img: 'https://dummyimage.com/400x200/ff1e1e/fff&text=Clarity+Capital' },
  { title: 'Grain & Green', desc: 'Vibrant logo and branding for a health food brand, focusing on health and appeal.', img: 'https://dummyimage.com/400x200/ff1e1e/fff&text=Grain+%26+Green' },
  { title: 'TechNova', desc: 'UI/UX and branding for a SaaS startup, delivering a modern and intuitive user experience.', img: 'https://dummyimage.com/400x200/ff1e1e/fff&text=TechNova' },
  { title: 'Urban Eats', desc: 'Brand identity and marketing materials for a food delivery service.', img: 'https://dummyimage.com/400x200/ff1e1e/fff&text=Urban+Eats' },
];

const Portfolio = () => (
  <div className="bg-[#181818] min-h-screen pt-28 pb-12 text-white">
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10"><span className="text-white">Our</span> <span className="text-superred">Portfolio</span></h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px #ff1e1e' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#222] rounded-xl p-6 flex flex-col items-start shadow-lg"
        >
          <img src={p.img} alt={p.title} className="w-full rounded-md mb-4" />
          <h2 className="text-superred text-lg font-bold mb-2">{p.title}</h2>
          <p className="text-white text-sm mb-2">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Portfolio; 