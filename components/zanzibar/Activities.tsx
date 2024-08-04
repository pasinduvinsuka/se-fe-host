import React from 'react';
import PackageSection from '../common/PackageSection';

const packageInfo = [
  {
    name: 'Snorkeling and Diving',
    image: '/media/images/zanzibar/activities/diving.png',
    price: '$640',
  },
  {
    name: 'Spice Plantation Tours',
    image: '/media/images/zanzibar/activities/plantation.png',
    price: '$435',
  },
  {
    name: 'Dolphin Watching',
    image: '/media/images/zanzibar/activities/dolphin.png',
    price: '$55',
  },
  {
    name: 'Outdoor Evening',
    image: '/media/images/zanzibar/activities/outdoorevening.png',
    price: '$1275',
  },
  {
    name: 'Luxury Retreat',
    image: '/media/images/zanzibar/activities/bird.png',
    price: '$7890',
  },
  {
    name: 'Beachside Escape',
    image: '/media/images/zanzibar/activities/beach.png',
    price: '2345$',
  },
  {
    name: 'Mountain Hiking',
    image: '/media/images/zanzibar/activities/hike.png',
    price: '980$',
  },
];

const Header = (
  <div className="text-md sm:text-4xl font-bold text-center">
    {'activities available in'.toUpperCase()}
    <span className="text-orange-600"> {'Zanzibar'.toUpperCase()}</span>
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
