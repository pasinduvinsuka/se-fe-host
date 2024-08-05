import React from 'react';
import CarouselSection from './CarouselSection';

type PackageSectionProps = {
  packageInfo: {
    name: string;
    image: string;
    price: string;
  }[];
  header: React.JSX.Element;
  headerDescription: string;
};

// Component to display a section with a header, description, and a carousel of packages
export default function PackageSection({
  packageInfo,
  header,
  headerDescription,
}: Readonly<PackageSectionProps>) {
  return (
    <div className="flex flex-col">
      {/* Header and description section */}
      <div className="flex flex-col items-center gap-4 pb-6">
        {/* Display header */}
        {header}
        {/* Display description */}
        <p className="text-center">{headerDescription}</p>
      </div>

      {/* Carousel displaying package information */}
      <CarouselSection packageInfo={packageInfo} />
    </div>
  );
}
