import React from 'react';
import CarouselSection from './CarouselSection';

type packageSectionProps = {
  packageInfo: {
    name: string;
    image: string;
    price: string;
  }[];
  header: React.JSX.Element;
  headerDescription: string;
};
export default function PackageSection({
  packageInfo,
  header,
  headerDescription,
}: Readonly<packageSectionProps>) {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center gap-4 pb-6">
        {header}
        <p className="text-center">{headerDescription}</p>
      </div>

      <CarouselSection packageInfo={packageInfo} />
    </div>
  );
}
