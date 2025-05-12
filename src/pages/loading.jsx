import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ onFinish }) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Clear the flag on hard refresh
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('hasShownLoading');
    });

    // Check if loading animation has been shown before
    const hasShown = localStorage.getItem('hasShownLoading');
    if (!hasShown) {
      setShowLoading(true);
      // Set a timeout to hide the animation
      const timer = setTimeout(() => {
        setShowLoading(false);
        localStorage.setItem('hasShownLoading', 'true'); // Mark as shown
        onFinish();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      // Directly call onFinish if the animation was already shown
      onFinish();
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('hasShownLoading');
      });
    };
  }, [onFinish]);

  if (!showLoading) return null;

  // Inline style objects
  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'radial-gradient(circle at center, #111, #000)',
      overflow: 'hidden',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    rocketContainer: {
      position: 'relative',
      width: 60,
      height: 120,
      marginBottom: 40,
    },
    rocket: {
      width: '100%',
      height: '100%',
      filter: 'drop-shadow(0 0 8px rgba(255,30,30,0.7))',
    },
    flame: {
      position: 'absolute',
      bottom: -10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 16,
      height: 24,
      background: 'radial-gradient(circle, #ff8a00, #ff1e1e)',
      borderRadius: '50% 50% 20% 20%',
    },
    smokeRing: size => ({
      position: 'absolute',
      bottom: 30,
      left: '50%',
      transform: 'translateX(-50%)',
      width: size,
      height: size,
      border: '2px solid rgba(200,200,200,0.5)',
      borderRadius: '50%',
    }),
    textBlock: {
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textShadow: '0 0 8px rgba(0,0,0,0.8)',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: '500',
      color: '#ccc',
      marginBottom: 12,
    },
    description: {
      fontSize: 16,
      lineHeight: 1.4,
      maxWidth: 300,
      margin: '0 auto',
      color: '#aaa',
    },
    superred: { color: '#ff1e1e' },
  };

  // Animation variants
  const rocketLaunch = {
    y: [0, -window.innerHeight * 0.5],
    transition: { duration: 2, ease: 'easeIn' },
  };
  const flamePulse = {
    scale: [1, 0.7, 1],
    transition: { duration: 0.3, repeat: Infinity, repeatType: 'mirror' },
  };
  const smokeRings = [0, 0.4, 0.8].map(delay => ({
    scale: [0.5, 2.5],
    opacity: [0.5, 0],
    transition: { delay, duration: 1.5 },
  }));
  const textFadeIn = delay => ({
    opacity: [0, 1],
    y: [10, 0],
    transition: { delay, duration: 1 },
  });

  return (
    <AnimatePresence>
      <motion.div
        style={styles.overlay}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        {/* Rocket + Flame + Smoke */}
        <motion.div
          style={styles.rocketContainer}
          animate={rocketLaunch}
        >
          <motion.svg
            viewBox="0 0 64 128"
            style={styles.rocket}
          >
            <rect x="20" y="30" width="24" height="60" fill="#ccc" stroke="#888" strokeWidth="2" />
            <polygon points="20,30 32,0 44,30" fill="#ff1e1e" />
            <polygon points="20,90 0,110 20,110" fill="#888" />
            <polygon points="44,90 64,110 44,110" fill="#888" />
            <circle cx="32" cy="60" r="8" fill="#000" stroke="#888" strokeWidth="2" />
          </motion.svg>
          <motion.div
            style={styles.flame}
            initial={{ scale: 0 }}
            animate={flamePulse}
          />
          {smokeRings.map((variant, i) => (
            <motion.div
              key={i}
              style={styles.smokeRing(30 + i * 20)}
              animate={variant}
            />
          ))}
        </motion.div>

        {/* Centered Text block */}
        <div style={styles.textBlock}>
          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={textFadeIn(2.2)}
          >
            Welcome to the <span style={styles.superred}>✨SuperBliz</span>
          </motion.h2>
          <motion.h3
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={textFadeIn(2.6)}
          >
            Where Creativity Takes Flight
          </motion.h3>
          <motion.p
            style={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={textFadeIn(3)}
          >
            Superbliz is your partner in bold branding, immersive design,  
            and seamless digital experiences. Let’s elevate your vision into reality.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
