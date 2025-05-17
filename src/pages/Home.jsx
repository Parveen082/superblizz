
import React, { useRef, useState } from 'react';
import Loading from '../pages/loading'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import logo from "../asset/bgggg1.jpg"
import uiux from "../asset/uiux.png"
import mark from "../asset/marketing.png"
import video from "../asset/videoediting.png"
import cgii from "../asset/cgi.png"
import graphicc from "../asset/graphic.png"
import loggo from "../asset/logodesign.png"
import fcard from "../asset/sachincard.png"
import flogo from "../asset/ffologo.png"
import green from "../asset/green.png"
import lastt from "../asset/lastimage.png"
import s1 from "../asset/slider1.png"
import s2 from "../asset/slider2.png"
import s3 from "../asset/slider3.png"
import s4 from "../asset/slider4.png"
import s5 from "../asset/slider5.png"
import s6 from "../asset/slider6.png"
import 'swiper/css';

const services = [
  { title: 'Logo Designing', desc: 'We specialize in crafting memorable and impactful visual identities – the very essence that captures your brands heart and soul, leaving a lasting impression', icon: <img src={loggo} alt="Logo Design" className="w-12 h-12 mb-2" /> },
  { title: 'Brand Identity', desc: 'Developing cohesive brand identities through business card design, letterhead design, festival bundle creatives, banners, flyers, and more as your all  needs', icon: <img src={mark} alt="Logo Design" className="w-12 h-12 mb-2" /> },
  { title: 'Graphic Designing', desc: 'We are experts in designing compelling marketing materials  everything from tangible brochures and eye-catching posters to dynamic social media graphics.', icon: <img src={graphicc} alt="Logo Design" className="w-12 h-12 mb-2" /> },
  { title: 'UI/UX Designing', desc: 'Creating seamless and engaging user interfaces and experiences for websites and applications. Creating crucial touchpoints that transform websites.', icon: <img src={uiux} alt="Logo Design" className="w-12 h-12 mb-2" /> },
  { title: 'CGI Advertisement', desc: 'Bringing your product or brand to life with stunning and photorealistic computer-generated imagery for impactful advertising campaigns.', icon: <img src={cgii} alt="Logo Design" className="w-12 h-12 mb-2" /> },
  { title: 'Video Editing', desc: 'We master the art of transforming raw footage into polished and engaging videos – powerful visual narratives that effectively  captivate your viewers.', icon: <img src={video} alt="Logo Design" className="w-12 h-12 mb-2" /> },
];

const logos = [
  { src: s1, alt: 'Partner Logo 1' },
  { src: s2, alt: 'Partner Logo 2' },
  { src: s3, alt: 'Partner Logo 3' },
  { src: s4, alt: 'Partner Logo 4' },
  { src: s5, alt: 'Partner Logo 5' },
  { src: s6, alt: 'Partner Logo 6' },
];


const Home = () => {
  const servicesRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Add error handling for background image
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-black text-white text-center pt-24 md:pt-16 overflow-hidden font-sf-pro">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
              style={{ backgroundImage: `url(${logo})` }}
              onError={handleImageError}
            />
            <div className="absolute inset-0  opacity-60" />
            <motion.h1
              className="text-5xl md:text-5xl font-extrabold mt-20 tracking-wide  z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-superred">BOLD</span> AND <br />DIRECT
            </motion.h1>
            <motion.p
              className="text-3xl md:text-2xl mt-5 font-extrabold z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Elevate Your Brand with Limitless Creativity
            </motion.p>

            <motion.p
              className="text-sm md:text-base z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Superbliz is a design agency in Bengaluru empowering businesses, personal brands, and<br /> startups with innovative and  detail-oriented design solutions. From captivating logos to <br />seamless digital experiences, we're here to  help you make a lasting impression.
            </motion.p>



            <div className="flex gap-4 mt-10 justify-center z-10 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/services"
                className="border-2 border-superred text-superred font-semibold rounded-full px-6 py-2 transition hover:bg-white hover:text-superred"
              >
                Explore Our Services
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "http://wa.me/918999074839";
                }}
                className="bg-superred text-white font-semibold rounded-full px-6 py-2 border-2 border-superred transition hover:bg-white hover:text-superred"
              >
                Get a Free Consultation
              </motion.a>

            </div>
          </section>

          {/* Logo Slider Section */}
          <section className="bg-black py-8">
            <div className="max-w-[800px] h-[150px]  mx-auto   rounded-full border border-white overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                className="logo-slider"
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >{logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-[150px] md:h-[150px]">
                    <div className="rounded-full  md:p-0">
                      <img
                        src={logo.src} // Directly use imported image
                        alt={logo.alt}
                        className="h-[130px] w-[130px] md:h-[130px] md:w-[130px] object-cover rounded-full transition-all duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              </Swiper>
            </div>
          </section>

          {/* Services Section */}
          <section
            ref={servicesRef}
            className="bg-black text-white py-16 font-sf-pro md:py-10 border-[#222]"
            style={{ perspective: 1000 }}
          >
            <div className="max-w-[1200px] mx-auto text-center mb-8">
              <h2 className="text-4xl justify-start text-start md:text-3xl font-extrabold">
                <span className="text-white">OUR </span>
                <span className="text-superred">SERVICES</span>
              </h2>
            </div>
            <div className="grid border-[#464646] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-[#0E0F0F] rounded-2xl p-6 flex flex-col items-end text-right shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-2xl font-sf-pro font-extrabold mb-2  uppercase text-white text-right">
                    {s.title.split(' ').map((word, index) => (
                      <span key={index} className="block">{word}</span>
                    ))}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 text-right">{s.desc}</p>
                  <a href="http://wa.me/918999074839" rel="noopener noreferrer">
                    <button className="bg-superred text-white font-semibold rounded-full px-6 py-2 text-base mt-3 transition hover:bg-white hover:text-superred border-2 border-superred">
                      GET QUOTATION
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>




          {/* Projects Section */}
          <section className="bg-black font-sf-pro text-white py-16 md:py-10">
            <div className="max-w-[1200px] mx-auto mb-8 px-4">
              <h1 className="text-3xl font-extrabold text-white text-center md:text-left">
                OUR <span className="text-superred">PROJECTS</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px]  mx-auto px-4">
              {/* Left large card */}
              <div className="bg-[#0E0F0F] rounded-2xl p-6 flex flex-col items-center md:items-end text-center md:text-right shadow-lg border border-[#464646]">
                <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                  <span className="font-extrabold text-2xl md:text-3xl uppercase tracking-wide text-white">
                    FIRST AIM OVERSEAS
                  </span>
                  <div className="hidden md:block h-[90px] border-l-2 border-red-500" />
                  <img src={flogo} alt="First Aim Logo" className="h-16 md:h-[100px] w-auto mt-2 md:mt-0" />
                </div>

                <p className="text-sm md:text-lg mb-4">
                  Superbliz collaborated with First Aim Overseas, a visa company, to establish their initial visual presence. We designed a logo that conveys trust and global reach, complemented by comprehensive branding elements that aim to make the often complex visa process feel more accessible and reliable.
                </p>

                <img src={fcard} alt="project visual" className="rounded-md w-full max-w-[400px] mb-4" />

                <a href="http://wa.me/918999074839" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-1/2 bg-superred text-white font-semibold rounded-full px-3 py-1 text-sm transition hover:bg-white hover:text-superred border-2 border-superred">
  CHAT WITH US TO KNOW MORE
</button>


                </a>
              </div>

              {/* Right column: two stacked cards */}
              <div className="flex flex-col gap-8 border-[#464646]">
                {[
                  {
                    title: 'CLARITY CAPITAL',
                    logo: s2,
                    desc: 'Superbliz partnered with Clarity Capital, an insurance company, to create their visual foundation. We designed a sophisticated logo embodying their values and developed comprehensive branding for a consistent and impactful presence.'
                  },
                  {
                    title: 'GRAIN & GREEN',
                    logo: green,
                    desc: 'Superbliz developed a vibrant logo and comprehensive branding for Grain & Green, a nutrition food brand. Our design aimed to capture their focus on healthy and appealing food.'
                  }
                ].map((proj) => (
                  <div key={proj.title} className="bg-[#0E0F0F] rounded-2xl p-6 flex flex-col items-center md:items-end text-center md:text-right h-[400px] shadow-lg border border-[#222]">
                    <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                      <span className="font-extrabold text-2xl md:text-3xl uppercase tracking-wide text-white">
                        {proj.title.split(' ').map((word, index) => (
                          <span key={index} className="block">{word}</span>
                        ))}
                      </span>
                      <div className="hidden md:block h-[90px] border-l-2 border-red-500" />
                      <img src={proj.logo} alt={`${proj.title} Logo`} className="h-16 md:h-[90px] w-auto mt-2 md:mt-0" />
                    </div>

                    <p className="text-sm md:text-base mb-4">{proj.desc}</p>

                    <a href="http://wa.me/918999074839" target="_blank" rel="noopener noreferrer" className="w-full">
                      <button className="w-1/2 bg-superred text-white font-semibold rounded-full px-2 py-1 text-sm transition hover:bg-white hover:text-superred border-2 border-superred">
                        CHAT WITH US TO KNOW MORE
                      </button>
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </section>

          <section className="font-sf-pro flex  flex-col md:flex-row items-center justify-between max-w-[1200px] h-[600px] mx-auto bg-transparent text-superred rounded-2xl py-12 px-8 md:py-8 md:px-16 mt-12 gap-8">
            <div className="flex-[7] w-full flex justify-center mb-6 md:mb-0">
              <img
                src={lastt}
                alt="cta visual"
                className="rounded-xl w-full max-w-full md:max-w-none"
              />
            </div>
            <div className="flex-[3] max-w-md w-full text-right md:text-left">
              <h2 className="text-2xl md:text-3xl font-sf-pro font-extrabold mb-2">LET'S BRING YOUR VISION TO LIFE!</h2>
              <p className=" text-base md:text-lg">
                Ready to discuss your design needs or have a question about our services? Reach out using the contact details below or fill out the form, and we'll get back to you promptly.
              </p>
              <a href="http://wa.me/918999074839" target="_blank" rel="noopener noreferrer">
                <button className="bg-superred text-white font-semibold rounded-full px-6 py-2 mt-2 transition hover:bg-white hover:text-superred border-2 border-superred">
                  Chat With Us
                </button>
              </a>
            </div>
          </section>

        </>
      )}
    </>
  );
};

export default Home; 