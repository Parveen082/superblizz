import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <div className="bg-superdark min-h-screen pt-28 pb-12 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10"><span className="text-white">Contact</span> <span className="text-superred">Us</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div>
          <div className="text-superred text-lg mb-6">
            <b>Superbliz</b><br />
            Bengaluru, India<br />
            +91 89990 24839<br />
            info@superbliz.com
          </div>
          <div className="w-full h-56 bg-[#222] rounded-xl mb-4 flex items-center justify-center">
            <img src="https://dummyimage.com/600x220/ff1e1e/fff&text=Map+Placeholder" alt="Map" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-[#181818] rounded-xl p-8 flex flex-col gap-4 shadow-lg"
        >
          <input type="text" placeholder="Your Name" required className="p-3 rounded-lg border-none bg-[#222] text-white text-base focus:outline-none focus:ring-2 focus:ring-superred" />
          <input type="email" placeholder="Your Email" required className="p-3 rounded-lg border-none bg-[#222] text-white text-base focus:outline-none focus:ring-2 focus:ring-superred" />
          <textarea placeholder="Your Message" required className="p-3 rounded-lg border-none bg-[#222] text-white text-base min-h-[100px] focus:outline-none focus:ring-2 focus:ring-superred" />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-superred text-white font-semibold rounded-full px-6 py-2 mt-2 transition hover:bg-white hover:text-superred border-2 border-superred"
          >
            Send Message
          </motion.button>
          {sent && <div className="text-green-400 font-semibold mt-2">Thank you! We'll get back to you soon.</div>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact; 