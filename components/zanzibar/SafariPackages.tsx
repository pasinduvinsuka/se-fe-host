import React from 'react';
import PackageSection from '../common/PackageSection';

const packageInfo = [
  {
    name: 'Backpacker Camping',
    image: '/media/images/zanzibar/packages/elephant.jpg',
    price: '$3435',
  },
  {
    name: 'Standard',
    image: '/media/images/zanzibar/packages/rino.jpeg',
    price: '$435',
  },
  {
    name: 'Family Friendly',
    image: '/media/images/zanzibar/packages/lion.jpg',
    price: '$55',
  },
  {
    name: 'Safari Adventure',
    image: '/media/images/zanzibar/packages/ostrich.jpg',
    price: '$1275',
  },
  {
    name: 'Luxury Retreat',
    image: '/media/images/zanzibar/packages/bird.png',
    price: '$7890',
  },
  {
    name: 'Beachside Escape',
    image: '/media/images/zanzibar/packages/beach.png',
    price: '2345$',
  },
  {
    name: 'Mountain Hiking',
    image: '/media/images/zanzibar/packages/hike.png',
    price: '980$',
  },
];

const header = <h4 className="text text-black font-bold text-lg sm:text-4xl ">
{'safari packages'.toUpperCase()}
</h4>

const headerDescription= 'Malesuada erat convallis orci semper sapien. Nibh sit proin elit cursus pharetra duis. Dictumst tellus ullamcorper vestibulum donec proin ac justo.'

export default function safariSection() {
  return <PackageSection packageInfo={packageInfo} header={header} headerDescription={headerDescription} />;
}
