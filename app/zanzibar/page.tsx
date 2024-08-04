'use client';
import React from 'react';
import HeroSection from '../../components/common/HeroSection';
import IntroductionSection from '../../components/common/Introduction';
import BookNowSection from '../../components/common/BookNowSection';
import Stepper from '../../components/common/Stepper';
import Footer from '../../components/common/Footer';
import Activities from '@/components/zanzibar/Activities';
import SafariPackages from '@/components/zanzibar/SafariPackages';
import Highlights from '@/components/zanzibar/Highlights';
import RequestTripSection from '@/components/common/RequestTrip';

export default function Page() {
  const title = {
    part1: 'Zanzibar',
    part2: 'The Spice Island ',
    part3: 'Paradise',
  };
  const paragraphs = [
    {
      id: 1,
      paragraph:
        'Discover Zanzibar, where pristine beaches and rich history combine to create the ultimate island escape. Picture yourself lounging on white sandy beaches, exploring vibrant coral reefs, and wandering through the historic Stone Town.',
    },
    {
      id: 2,
      paragraph:
        "Explore Zanzibar's diverse landscapes, from lush spice farms to bustling markets. Engage with the local Swahili culture, learning about their traditions and way of life.",
    },
    {
      id: 3,
      paragraph:
        "Your trip is more than a vacation; it's an adventure. Dive into the clear blue waters, stroll through spice plantations, and immerse yourself in the island's unique culture. As the sun sets, relax in luxurious beach resorts where the gentle sounds of the ocean lull you to sleep.",
    },
    {
      id: 4,
      paragraph:
        "Whether you're exploring Stone Town, snorkeling in the coral reefs, or simply unwinding on the beach, Zanzibar promises an unforgettable, immersive adventure.",
    },
  ];

  return (
    <div>
      <HeroSection videoSrc="/media/videos/zanzibar.mp4" />
      <div className="flex flex-col items-center max-w-screen-3xl mx-auto">
        <div className="relative">
          {/* Background Container for IntroductionSection */}
          <div
            className="absolute inset-10 -translate-x-12 h-[calc(100vh - 600px)] bg-zanzibar-svg-1 bg-cover bg-center opacity-10"
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Content Container with Padding */}
          <div className="relative z-10 px-7 sm:px-10 lg:px-24 2xl:px-56 pt-28">
            <IntroductionSection title={title} paragraphs={paragraphs} />
          </div>
          <div className="relative z-10 pt-24 px-1 sm:px-10 lg:px-24 2xl:px-56">
            <BookNowSection
              imageSrc="/media/images/zanzibar/booknow/booknow.png"
              page="zanzibar"
            />
          </div>
        </div>
        <div className="relative py-8 sm:pt-24 w-full">
          <div
            className="absolute inset-0  z-0"
            style={{
              backgroundImage:
                'url(/media/svgs/zanzibar/mainpage/zanzibar-svg-2.svg)', // Update path if needed
              backgroundSize: '25% auto', // Adjust size as needed
              backgroundPosition: 'left top', // Adjusted position to move the image up
              backgroundRepeat: 'no-repeat',
              opacity: 0.1, // Adjust opacity for the background image
            }}
          />
          <div className="relative z-10 2xl:px-20">
            <Stepper page="zanzibar" />
          </div>
          <div className="relative z-10 pt-24 px-1 sm:px-0 lg:px-12 2xl:px-44">
            <SafariPackages />
          </div>
        </div>

        <div className="px-7 sm:px-16 lg:px-24 2xl:px-32 pt-8 sm:pt-20">
          <Highlights />
        </div>

        <div className="px-7 sm:px-10 lg:px-28 2xl:px-44 pt-8 sm:pt-20 w-full">
          <Activities />
        </div>
        <div className="sm:px-10 lg:px-28 2xl:px-56">
          <RequestTripSection
            page="zanzibar"
            imageSrc="/media/images/zanzibar/requestnow/zanzibarrequest.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
