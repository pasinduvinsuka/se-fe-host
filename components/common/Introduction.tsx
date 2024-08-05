"use client";
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

// Define the props interface for the IntroductionSection component
interface IntroductionSectionProps {
  title: {
    part1: string;
    part2: string;
    part3: string;
  };
  paragraphs: { id: number; paragraph: string }[];
}

// Define animation variants for typing effect
const typingAnimation = {
  hidden: { width: 0, opacity: 0 },
  visible: (i: number) => ({
    width: 'auto',
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5, type: 'tween' },
  }),
};

// Define animation variants for fade-in effect
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

// IntroductionSection functional component
const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  title,
  paragraphs,
}) => {
  // Reference for detecting if the element is in view
  const ref = useRef(null);
  // Hook to determine if the component is in view
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-7">
      {/* Container for the section */}
      <div className="mx-auto">
        <div className="flex flex-row">
          {/* Title container with flex styling */}
          <div className="flex flex-col text-xl sm:text-[38px] font-semibold leading-normal">
            <div className="flex flex-row">
              {/* First part of the title with animation */}
              <motion.h3
                className="text-[#f38218]"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInAnimation}
                ref={ref}
              >
                {title.part1.toUpperCase()}:&nbsp;
              </motion.h3>
              {/* Second part of the title with animation */}
              <motion.h3
                className="text-black"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInAnimation}
                ref={ref}
              >
                {title.part2.toUpperCase()}
              </motion.h3>
            </div>
            {/* Third part of the title with animation */}
            <motion.h3
              className="text-black"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInAnimation}
              ref={ref}
            >
              {title.part3.toUpperCase()}
            </motion.h3>
          </div>
          {/* Empty div for potential layout adjustment */}
          <div></div>
        </div>
        {/* Container for paragraphs with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-3 mt-6">
          {/* Render each paragraph */}
          {paragraphs.map((paragraph, index) => (
            <p key={paragraph.id} className="text-gray-900 mt-1 font-normal">
              {paragraph.paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
