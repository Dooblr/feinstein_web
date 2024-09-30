// DownIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const DownIcon: React.FC = () => {
  const arrowFadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 2.5 },
  };

  const bounceAnimation = {
    y: ['0%', '-15%', '0%'], // Adjust bounce distance
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  };

  return (
    <motion.div
      className="down-icon"
      initial={arrowFadeInAnimation.initial}
      animate={{ ...arrowFadeInAnimation.animate, ...bounceAnimation }}
      whileInView={{ opacity: 1 }}
      transition={arrowFadeInAnimation.transition}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fefae0"
        style={{ width: '60px', height: '60px' }} // Adjust the size to make the icon larger
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </motion.div>
  );
};
