import React from 'react';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';

// Card component to display a trip request form
const RequestTripCard = ({ page }: { page: 'kenya' | 'zanzibar' }) => {
  return (
    <div
      className={`${
        page === 'kenya'
          ? 'bg-[#FBF7F3] border border-[#FBE5B6]'
          : 'bg-[#49a0ab21] border border-[#49a0ab54]'
      } p-6 md:p-8 lg:p-10 h-96 flex flex-col justify-center items-center gap-4`}
    >
      {/* Heading of the card */}
      <h6 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
        {'Start Planning Your Adventure'.toUpperCase()}
      </h6>
      {/* Description text */}
      <p className="text-center text-sm md:text-base lg:text-lg">
        Ready for an unforgettable adventure? Click below to start planning your
        extraordinary Kenyan safari today!
      </p>
      {/* Primary button to request a trip */}
      <PrimaryButton label={'Request trip now'.toUpperCase()} />
    </div>
  );
};

// Section component to display the request trip card and an image
export default function RequestTripSection({
  page,
  imageSrc,
}: Readonly<{
  page: 'kenya' | 'zanzibar'; // Determines which page style to apply
  imageSrc: string; // Source of the image to display
}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-8">
      {/* Container for the image */}
      <div className="relative w-full h-64 md:h-auto overflow-hidden">
        <Image
          src={imageSrc}
          alt={'Image of an elephant on a wild safari'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Request trip card */}
      <RequestTripCard page={page} />
    </div>
  );
}
