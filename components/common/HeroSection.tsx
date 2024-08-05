'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import {
  FaEnvelope,
  FaClock,
  FaStar,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { motion } from 'framer-motion';

// Header component definition
export const Header = () => {
  return (
    <div className="bg-green-700 text-white py-2 flex justify-between items-center px-4">
      {/* Contact and Timing Information */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaEnvelope />
          <span>hello@safari.expert</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaClock />
          <span>Mon - Sat: 8.00 - 17.00</span>
        </div>
        <div className="flex items-center space-x-1">
          <GrGoogle />
          <span>5.0/5.0</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      {/* Social Media Links and Language Selector */}
      <div className="flex items-center space-x-4">
        <span>Follow Us:</span>
        <FaLinkedin />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <div className="flex items-center space-x-1">
          <img src="/us-flag.png" alt="US Flag" className="w-5 h-5" />
          <span>EN</span>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

// Variants for motion elements in FeatureItem component
const featureItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

// FeatureItem component definition
const FeatureItem = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <motion.div
    className="flex flex-col items-center text-white"
    initial="hidden"
    animate="visible"
    whileHover="hover"
    variants={featureItemVariants}
    custom={number}
  >
    <div className="text-lg mb-2">{number}</div>
    <hr className="bg-white w-16 border-0 h-px my-2" />
    <div className="text-center">
      <div className="text-base font-normal">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  </motion.div>
);

// FeaturesSection component definition
const FeaturesSection = () => (
  <div className="bg-transparent py-8">
    <div className="container mx-auto flex flex-wrap justify-center gap-8">
      <FeatureItem
        number="01"
        title="Private Tailor Made Safaris"
        description=""
      />
      <FeatureItem
        number="02"
        title="Professional Multilingual Guides"
        description=""
      />
      <FeatureItem number="03" title="24 Hour Response" description="" />
      <FeatureItem number="04" title="Best Price Guarantee" description="" />
      <FeatureItem
        number="05"
        title="Choose from 100s of Lodges and Hotels"
        description=""
      />
    </div>
  </div>
);

// HeroSection component definition
const HeroSection = ({ videoSrc }: { videoSrc: string }) => {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to check if HeroSection is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {isHeroInView && <NavBar />}
        <div ref={heroRef}>
          {/* Background Video */}
          <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay with FeaturesSection */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center bg-black bg-opacity-50 text-white text-center p-4">
            <FeaturesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
