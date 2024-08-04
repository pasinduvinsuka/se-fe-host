'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { GiJeep } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { BsEnvelopeCheck } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { GiSpeedBoat } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function Stepper({
  page,
}: Readonly<{ page: 'kenya' | 'zanzibar' }>) {
  const items = [
    {
      id: 1,

      label: 'Send Request',
      description: 'Step 1',
      icon: <BsEnvelopeCheck className="text-white" size={22} />,
    },
    {
      id: 2,
      label: 'Receive a proposal within 24h',
      description: 'Step 2',
      icon: <GrDocumentText className="text-white" size={22} />,
    },
    {
      id: 3,
      label: 'Our agent will help you customize your trip',
      description: 'Step 3',
      icon: <MdSupportAgent className="text-white" size={22} />,
    },
    {
      id: 4,
      label: 'We get your final confirmation',
      description: 'Step 4',
      icon: <FaCheck className="text-white" size={22} />,
    },
    {
      id: 5,
      label: 'Start your once in a lifetime experience',
      description: 'Step 5',
      icon:
        page == 'kenya' ? (
          <GiJeep className="text-white" size={24} />
        ) : (
          <GiSpeedBoat className="text-white" size={24} />
        ),
    },
  ];

  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 0.8,
  };

  return (
    <div className="flex flex-col">
      <h6 className="font-bold text-center  text-lg sm:text-4xl pb-4">
        {'Customer journey'.toUpperCase()}
      </h6>
      <div className="relative flex justify-center py-8">
        <div className="relative flex w-full  items-center">
          {items.map((item, index) => (
            <div
              className="relative flex flex-col items-center flex-1 h-24"
              key={item.id}
            >
              <div className="relative flex flex-col items-center">
                <span className="block font-bold pb-2">{item.description}</span>
                <motion.div
                  className={`w-12 h-12 ${
                    page == 'kenya' ? 'bg-[#2C6E63]' : 'bg-[#499fab]'
                  } rounded-full flex items-center justify-center z-10`}
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                  transition={spinTransition}
                >
                  {item.icon}
                </motion.div>
                <div className="mt-2 text-center">
                  <span className="block text-sm pt-3">{item.label}</span>
                </div>
              </div>
              {index < items.length - 1 && (
                <div
                  className="custom-dotted-line  absolute top-1/2 left-0 sm:left-32 w-36 h-1 border-orange-500 transform translate-y-2 xl:left-44  xl:translate-y-1.5
                z-0"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
