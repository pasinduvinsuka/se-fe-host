'use  client';
import React from 'react';
import HeroSection from '../../components/common/HeroSection';
import IntroductionSection from '../../components/common/Introduction';
import BookNowSection from '../../components/common/BookNowSection';
import SafariPackages from '../../components/kenyan/SafariPackages';
import Highlights from '../../components/kenyan/Highlights';
import Activities from '../../components/kenyan/Activities';
import Stepper from '../../components/common/Stepper';
import Footer from '../../components/common/Footer';
import RequestTripSection from '@/components/common/RequestTrip';

export default function Page() {
  const title = {
    part1: 'Kenya',
    part2: 'The Heartbeat of ',
    part3: "Africa's Wildlife",
  };

  const paragraphs = [
    {
      id: 1,
      paragraph:
        'Discover Kenya, a land where stunning beauty and diverse wildlife create the ultimate safari experience. Picture yourself in the Maasai Mara during the Great Migration, witnessing millions of wildebeest and zebras. Kenya, home to the legendary Big Five, offers unparalleled encounters with nature.',
    },
    {
      id: 2,
      paragraph:
        "Explore Kenya's varied landscapes, from Laikipia's hills to Tsavo's rugged terrain. Immerse yourself in the rich culture of the Maasai, Samburu, and Kikuyu tribes. Engage with local communities and experience their traditions firsthand.",
    },
    {
      id: 3,
      paragraph:
        "Your safari is more than a trip; it's an adventure. See lions lounging, elephants grazing, and cheetahs sprinting. As the sun sets, retreat to luxurious lodges where the wild serenades you to sleep.",
    },
    {
      id: 4,
      paragraph:
        "Whether you're exploring the Maasai Mara or enjoying views of Mount Kilimanjaro in Amboseli, Kenya promises an unforgettable, immersive adventure.",
    },
  ];

  return (
    <div>
      <HeroSection videoSrc="/videos/kenya.mp4" />
      <div className="flex flex-col items-center max-w-screen-3xl mx-auto">
        <div className="relative">
          {/* Background Container for IntroductionSection */}
          <div
            className="absolute inset-10 translate-x-9 h-[calc(100vh - 600px)] bg-kenya-svg-1 bg-cover bg-center"
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
            <BookNowSection imageSrc="/rino.jpeg" page="kenya" />
          </div>
        </div>
        <div className="relative bg-kenya-svg-2 bg-cover bg-center py-8 sm:pt-24 w-full">
          <div className="relative z-10 2xl:px-20">
            <Stepper page="kenya" />
          </div>
          <div className="relative z-10 pt-24 px-1 sm:px-0 lg:px-12 2xl:px-44 ">
            <SafariPackages />
          </div>
        </div>

        <div className="px-7 sm:px-16 lg:px-24 2xl:px-32 pt-8 sm:pt-20">
          <Highlights />
        </div>

        {/* Common Background Container */}
        <div
          className="relative bg-kenya-svg-3 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/svgs/kenya/mainpage/kenya-svg-3.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top 80% left center',
            height: 'auto',
          }}
        >
          <div className="px-7 sm:px-10 lg:px-28 2xl:px-44 pt-8 sm:pt-20">
            <Activities />
          </div>
          <div
            className="  pt-10 pb-16"
            style={{
              backgroundPosition: 'bottom center',
              backgroundSize: 'cover',
            }}
          >
            <div className="sm:px-10 lg:px-28 2xl:px-56">
              <RequestTripSection
                page="kenya"
                imageSrc="/images/zanzibar/requestnow/kenyarequest.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
