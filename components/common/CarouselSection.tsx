'use client';
import React from 'react';
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const responsiveOptions = [
  {
    breakpoint: '1536px', // 2xl
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1280px', // xl
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1024px', // lg
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '768px', // md
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '640px', // sm
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '0px', // below sm
    numVisible: 1,
    numScroll: 1,
  },
];

const CarouselSection = ({
  packageInfo,
}: {
  packageInfo: {
    name: string;
    image: string;
    price: string;
  }[];
}) => {
  const packageTemplate = (packageInfo: any) => {
    return (
      <div className="relative p-8 text-white h-[300px]  sm:h-[500px] rounded-lg overflow-hidden m-4 hover:scale-95 transition-transform duration-500 hover:rounded-lg ">
        <Image
          src={packageInfo.image}
          alt={packageInfo.name}
          fill
          className="z-0 rounded-lg object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg z-10 flex flex-col justify-between">
          <h3 className="font-bold sm:text-3xl break-words max-w-xs p-2">
            {packageInfo.name}
          </h3>

          <div className="flex  flex-col sm:flex-row justify-between">
            <div className="p-2 flex flex-col">
              <p>Starting from</p>
              <div className="flex flex-col sm:flex-row">
                <p className="font-bold sm:text-xl">
                  {`${packageInfo.price}`}&nbsp;
                </p>
                <p>/per person</p>
              </div>
            </div>
            <div className="self-center">
              <PrimaryButton label={'BOOK NOW'} className="" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
      <Carousel
        value={packageInfo}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={packageTemplate}
      />
  );
};

export default CarouselSection;
