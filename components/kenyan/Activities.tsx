import React from 'react';
import PackageSection from '../common/PackageSection';

const packageInfo = [
  {
    name: 'Hot Air Baloon Safari',
    image: '/activities/kenyan/hotairbaloon.png',
    price: '$640',
  },
  {
    name: 'Visit the Maasai',
    image: '/activities/kenyan/visitmaasai.jpg',
    price: '$435',
  },
  {
    name: 'Nairobi City Tour',
    image: '/activities/kenyan/nairobicity.png',
    price: '$55',
  },
  {
    name: 'Outdoor Evening',
    image: '/activities/kenyan/outdoorevening.png',
    price: '$1275',
  },
  {
    name: 'Luxury Retreat',
    image: '/bird.png',
    price: '$7890',
  },
  {
    name: 'Beachside Escape',
    image: '/beach.png',
    price: '2345$',
  },
  {
    name: 'Mountain Hiking',
    image: '/hike.png',
    price: '980$',
  },
];

const Header = (
  <div className="text-md sm:text-4xl font-bold text-center">
    {'activities available in'.toUpperCase()}
    <span className="text-orange-600"> {'Kenya'.toUpperCase()}</span>
  </div>
);

const headerDescription = 'Activities are smaller trips that you can do while on a safari.';

export default function Activities() {
  return (
    <PackageSection
      packageInfo={packageInfo}
      header={Header}
      headerDescription={headerDescription}
    />
  );
}
