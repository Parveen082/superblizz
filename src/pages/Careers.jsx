import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
  { title: 'Graphic Designer', desc: 'Create stunning visuals and graphics for digital and print media. 1+ year experience preferred.' },
  { title: 'UI/UX Designer', desc: 'Design seamless and engaging user experiences for web and mobile apps. Figma/Adobe XD skills required.' },
  { title: 'Motion Graphics Artist', desc: 'Bring stories to life with animation and motion graphics. After Effects experience a plus.' },
];

const Careers = () => (
  <div className="bg-[#181818] min-h-screen pt-28 pb-12 text-white">
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10"><span className="text-white">Careers</span> <span className="text-superred">at Superbliz</span></h1>
    <div className="max-w-2xl mx-auto text-center text-base md:text-lg text-gray-200 mb-10">
      At Superbliz, we believe in limitless creativity, collaboration, and growth. Join our passionate team and help us shape the future of design and technology.
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-12">
      {jobs.map((job, i) => (
        <motion.div
          key={job.title}
          whileHover={{ scale: 1.04, boxShadow: '0 0 20px #ff1e1e' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#222] rounded-xl p-8 flex flex-col items-start shadow-lg"
        >
          <h2 className="text-superred text-lg font-bold mb-2">{job.title}</h2>
          <p className="text-white text-sm mb-3">{job.desc}</p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            target="_blank"
            className="bg-superred text-white font-semibold rounded-md px-5 py-2 text-sm mt-2 transition hover:bg-white hover:text-superred border-2 border-superred"
          >
            Apply Now
          </motion.a>
        </motion.div>
      ))}
    </div>
    <div className="bg-white text-superred text-center mx-auto rounded-2xl py-8 px-6 max-w-xl">
      <h2 className="text-xl font-bold mb-2">Don't see your role?</h2>
      <p className="mb-4">We're always looking for creative talent! Send your resume and portfolio to <b>careers@superbliz.com</b></p>
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:careers@superbliz.com"
        className="bg-superred text-white font-semibold rounded-full px-6 py-2 mt-2 transition hover:bg-white hover:text-superred border-2 border-superred inline-block"
      >
        Send Resume
      </motion.a>
    </div>
  </div>
);

export default Careers; 