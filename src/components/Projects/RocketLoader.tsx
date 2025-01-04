import React from 'react';
    import { motion } from 'framer-motion';

    const loaderVariants = {
      start: {
        opacity: 1,
        y: 0,
        scale: 0.8,
      },
      animate: {
        opacity: 1,
        y: -20,
        scale: 1,
        transition: {
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        scale: 0.5,
        transition: { duration: 0.3 },
      },
    };

    export default function RocketLoader() {
      return (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial="start"
          animate="animate"
          exit="exit"
          variants={loaderVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 0-8 0" />
          </svg>
        </motion.div>
      );
    }
