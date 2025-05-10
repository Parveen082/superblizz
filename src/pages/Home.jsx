import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPencilRuler, FaBullhorn, FaPalette, FaMobileAlt, FaAd, FaVideo } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import logo from "../asset/bgggg1.jpg"
import 'swiper/css';

const services = [
  { title: 'Logo Designing', desc: 'Crafting memorable and impactful visual identities that capture the essence of your brand.', icon: <FaPencilRuler className="text-superred text-3xl mb-2" /> },
  { title: 'Brand Identity', desc: 'Developing cohesive brand identities through business card design, letterhead design, festival bundle creatives, banners, flyers, and more.', icon: <FaBullhorn className="text-superred text-3xl mb-2" /> },
  { title: 'Graphic Designing', desc: 'Designing compelling marketing materials, from brochures and posters to social media graphics.', icon: <FaPalette className="text-superred text-3xl mb-2" /> },
  { title: 'UI/UX Designing', desc: 'Creating seamless and engaging user interfaces and experiences for websites and applications.', icon: <FaMobileAlt className="text-superred text-3xl mb-2" /> },
  { title: 'CGI Advertisement', desc: 'Bringing your product or brand to life with stunning and photorealistic computer-generated imagery for impactful advertising campaigns.', icon: <FaAd className="text-superred text-3xl mb-2" /> },
  { title: 'Video Editing', desc: 'Transforming raw footage into polished and engaging videos that tell your story effectively.', icon: <FaVideo className="text-superred text-3xl mb-2" /> },
];

const projects = [
  {
    title: 'FIRST AIM OVERSEAS',
    desc: 'Superbliz collaborated with First Aim Overseas, a visa company, to establish their initial visual presence. We designed a logo that conveys trust and global reach, complemented by comprehensive branding elements that aim to make the often complex visa process feel more accessible and reliable for their clientele seeking opportunities abroad. Generate Audio Overview',
    img: 'https://dummyimage.com/180x80/fff/007bff&text=FAO+Logo',
    cardImg: 'https://dummyimage.com/300x180/fff/007bff&text=FAO+Card',
    btn: 'CHAT WITH US TO KNOW MORE',
  },
  {
    title: 'CLARITY CAPITAL',
    desc: 'Superbliz partnered with Clarity Capital, an insurance company, to create their visual foundation. We designed a sophisticated logo embodying their values and developed comprehensive branding for a consistent and impactful presence, establishing a strong brand image in the insurance sector.',
    img: 'https://dummyimage.com/40x40/ff1e1e/fff&text=CC',
    btn: 'CHAT WITH US TO KNOW MORE',
  },
  {
    title: 'GRAIN & GREEN',
    desc: 'Superbliz developed a vibrant logo and comprehensive branding for Grain & Green, a nutrition food brand. Our design aimed to capture their focus on healthy and appealing food, establishing a fresh and memorable visual identity within the health food market.',
    img: 'https://dummyimage.com/40x40/00ff00/fff&text=GG',
    btn: 'CHAT WITH US TO KNOW MORE',
  },
];

const logos = [
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 1' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 2' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 3' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 4' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 5' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 1' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 2' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 3' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 4' },
  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEUCwswIuc4NrdEZo9QjldcyiNhOuNmt3ev////u9fyH1OLY5Phryt02eN9FcNwCmNRQYeBeTuMlhd5qO+grU+WAi+w8Zeh6Kumvs/RHM+5KTPFzJ/BZNvdkJ/qcqMW7AAABD0lEQVR4AXXPBRLDMAxEUVMTOcyc+1+zK6kMv4N9s3JrvrLIOe99uHybYYQG4N9l+LN0fzCB3YfvmBKKmfuBGVFe2IIog3lY+WYZP5hRvA2rh2GRsvG0FisrY/kDxGP6J1LKaxiGQDHLR0GIKNGjglIkEvI+T2oQjlbNHXGVCd1uwhrjrMM5/jlCAckO1honZcBapGMSU/SuFmRCpVrbtsZzdcEoIqTWM/IzRPFOQz6q9YZv4VokAkzlNA0jDWLzbDptIcqHCcFGmSmWPBkitBmGZqFlhYGAQlxOeDcSTGaCk7Rt2zrmkeLSrqB9VhRBUO44QPusahQODXTuSE3wDudx7mr3pX6tvRtQ4R3vegWNXiIGxpIzCAAAAABJRU5ErkJggg==', alt: 'Partner Logo 5' },
];

const Home = () => {
  const servicesRef = useRef(null);
  const inView = useInView(servicesRef, { once: true, margin: '-10px' });

  // Add error handling for background image
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-black text-white text-center pt-24 md:pt-16 overflow-hidden font-sf-pro">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${logo})` }}
          onError={handleImageError}
        />
        <div className="absolute inset-0  opacity-60" />
        <motion.h1
          className="text-4xl md:text-3xl font-extrabold tracking-wide mb-4 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-superred">BOLD</span> AND <br />DIRECT
        </motion.h1>
        <motion.p
          className="text-lg md:text-base mb-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Elevate Your Brand with Limitless Creativity
        </motion.p>
        <div className="flex gap-4 justify-center z-10 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-superred text-superred font-semibold rounded-full px-6 py-2 transition hover:bg-white hover:text-superred"
          >
            Explore Our Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-superred text-white font-semibold rounded-full px-6 py-2 border-2 border-superred transition hover:bg-white hover:text-superred"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Logo Slider Section */}
      <section className="bg-black py-8">
  <div className="max-w-[1000px] mx-auto px-2 bg-black py-2 rounded-full border border-white overflow-hidden">
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
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center h-[50px] md:h-[60px]">
            <div className="rounded-full bg-black p-1 md:p-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] object-cover rounded-full transition-all duration-300"
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
      <motion.section
        ref={servicesRef}
        initial={{ x: 100, opacity: 0, rotateY: 45 }} // Start from the right
        animate={inView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{ perspective: 1000 }}
        className="bg-superdark text-white py-16 font-sf-pro md:py-10"
      >
        <div className="max-w-[1200px] mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-3xl font-extrabold">
            <span className="text-white">OUR </span>
            <span className="text-superred">SERVICES</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255, 30, 30, 0.3)' }}
              initial={{ x: 100, opacity: 0 }} // Start from the right
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#181818] rounded-2xl p-6 flex flex-col items-end text-right shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
             <h3 className="text-2xl font-bold mb-2 tracking-widest uppercase text-white text-right">
  {s.title}
</h3>

              <p className="text-sm text-gray-300 mb-4 text-right">{s.desc}</p>
                <a href="http://wa.me/918999074839"  rel="noopener noreferrer">
              <button className="bg-superred text-white font-semibold rounded-lg px-6 py-2 text-base mt-3 transition hover:bg-white hover:text-superred border-2 border-superred">
                GET QUOTATION
              </button>
                </a>
            </motion.div>
          ))}
        </div>
      </motion.section>



      {/* Projects Section */}
      <section className="bg-[#181818] text-white py-16 md:py-10">
        <div className="max-w-[1200px] mx-auto mb-8 flex items-baseline gap-2 text-3xl md:text-2xl font-extrabold text-left">
          <span className="text-white">OUR</span> <span className="text-superred">PROJECTS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {/* Left large card */}
          <div className="bg-[#181818] rounded-2xl p-8 flex flex-col justify-between shadow-lg row-span-2 border border-[#222]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-extrabold text-2xl text-white tracking-wide uppercase">FIRST AIM OVERSEAS</span>
              <img src="https://dummyimage.com/80x32/fff/007bff&text=FAO" alt="logo" className="h-8 w-auto" />
            </div>
            <p className="text-white text-sm mb-4">Superbliz collaborated with First Aim Overseas, a visa company, to establish their initial visual presence. We designed a logo that conveys trust and global reach, complemented by comprehensive branding elements that aim to make the often complex visa process feel more accessible and reliable for their clientele seeking opportunities abroad Generate Audio Overview</p>
            <img src="https://dummyimage.com/200x120/fff/007bff&text=FAO+Card" alt="project visual" className="rounded-md w-44 mb-4" />
            <button className="w-full bg-superred text-white font-semibold rounded-md px-5 py-2 text-sm mt-2 transition hover:bg-white hover:text-superred border-2 border-superred">CHAT WITH US TO KNOW MORE</button>
          </div>
          {/* Right column: two stacked cards */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#181818] rounded-2xl p-8 flex flex-col justify-between shadow-lg border border-[#222]">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-extrabold text-xl text-white tracking-wide uppercase">CLARITY CAPITAL</span>
                <img src="https://dummyimage.com/40x40/ff1e1e/fff&text=CC" alt="logo" className="h-8 w-auto" />
              </div>
              <p className="text-white text-sm mb-4">Superbliz partnered with Clarity Capital, an insurance company, to create their visual foundation. We designed a sophisticated logo embodying their values and developed comprehensive branding for a consistent and impactful presence, establishing a strong brand image in the insurance sector.</p>
              <button className="w-full bg-superred text-white font-semibold rounded-md px-5 py-2 text-sm mt-2 transition hover:bg-white hover:text-superred border-2 border-superred">CHAT WITH US TO KNOW MORE</button>
            </div>
            <div className="bg-[#181818] rounded-2xl p-8 flex flex-col justify-between shadow-lg border border-[#222]">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-extrabold text-xl text-white tracking-wide uppercase">GRAIN & GREEN</span>
                <img src="https://dummyimage.com/40x40/00ff00/fff&text=GG" alt="logo" className="h-8 w-auto" />
              </div>
              <p className="text-white text-sm mb-4">Superbliz developed a vibrant logo and comprehensive branding for Grain & Green, a nutrition food brand. Our design aimed to capture their focus on healthy and appealing food, establishing a fresh and memorable visual identity within the health food market.</p>
              <button className="w-full bg-superred text-white font-semibold rounded-md px-5 py-2 text-sm mt-2 transition hover:bg-white hover:text-superred border-2 border-superred">CHAT WITH US TO KNOW MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto bg-transparent text-superred rounded-2xl py-12 px-8 md:py-8 md:px-16 mt-12 gap-8">
        <div className="flex-1 w-full flex justify-center mb-6 md:mb-0">
          <img
            src="https://dummyimage.com/400x250/ff1e1e/fff"
            alt="cta visual"
            className="rounded-xl w-full max-w-xs md:max-w-md"
          />
        </div>
        <div className="max-w-md w-full text-right md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">LET'S BRING YOUR VISION TO LIFE!</h2>
          <p className="mb-4 text-base md:text-lg">Ready to discuss your design needs or have a question about our services? Reach out using the contact details below or fill out the form, and we'll get back to you promptly.</p>
          <a href="http://wa.me/918999074839"  rel="noopener noreferrer"></a>
          <button className="bg-superred text-white font-semibold rounded-full px-6 py-2 mt-2 transition hover:bg-white hover:text-superred border-2 border-superred" >Chat With Us</button>
          <a />
        </div>
      </section>
    </>
  );
};

export default Home; 