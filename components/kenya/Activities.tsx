import React from 'react';
import PackageSection from '../common/PackageSection';

const packageInfo = [
  {
    name: 'Hot Air Baloon Safari',
    image: '/media/images/kenya/activities/hotairbaloon.png',
    price: '$640',
  },
  {
    name: 'Visit the Maasai',
    image: '/media/images/kenya/activities/visitmaasai.jpg',
    price: '$435',
  },
  {
    name: 'Nairobi City Tour',
    image: '/media/images/kenya/activities/nairobicity.png',
    price: '$55',
  },
  {
    name: 'Outdoor Evening',
    image: '/media/images/kenya/activities/outdoorevening.png',
    price: '$1275',
  },
  {
    name: 'Luxury Retreat',
    image: '/media/images/kenya/activities/bird.png',
    price: '$7890',
  },
  {
    name: 'Beachside Escape',
    image: '/media/images/kenya/activities/beach.png',
    price: '2345$',
  },
  {
    name: 'Mountain Hiking',
    image: '/media/images/kenya/activities/hike.png',
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