"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface IntroductionSectionProps {
  title: {
    part1: string;
    part2: string;
    part3: string;
  };
  paragraphs: { id: number; paragraph: string }[];
}

const typingAnimation = {
  hidden: { width: 0, opacity: 0 },
  visible: (i: number) => ({
    width: 'auto',
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5, type: 'tween' },
  }),
};

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  title,
  paragraphs,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="pb-7 ">
      <div className="mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col text-xl sm:text-[38px] font-semibold leading-normal">
            <div className=" flex flex-row">
              <motion.h3
                className=" text-[#f38218]"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInAnimation}
                ref={ref}
              >
                {title.part1.toUpperCase()}:&nbsp;
              </motion.h3>
              <motion.h3 className=" text-black"   initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInAnimation}
                ref={ref}>{title.part2.toUpperCase()}</motion.h3>
            </div>
            <motion.h3 className=" text-black"   initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInAnimation}
                ref={ref}>{title.part3.toUpperCase()}</motion.h3>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-3  mt-6">
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
