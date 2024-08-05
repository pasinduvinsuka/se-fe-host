import React from 'react';
import HighlightsLayout from '../common/HighlightsLayout';

// Define the sections with details including title, image, SVG icon, and description
const sections = [
  {
    id: 1,
    title: 'Stone Town',
    image: '/media/images/zanzibar/highlights/stonetown.png',
    svg: '/media/svgs/zanzibar/stonetown.svg',
    description:
      "Explore the historic Stone Town, a UNESCO World Heritage site. Wander through narrow streets lined with ancient buildings, bustling markets, and vibrant bazaars. Discover the rich history and culture of Zanzibar as you visit the Sultan's Palace, House of Wonders, and the Old Fort.",
  },
  {
    id: 2,
    title: 'Pristine Beaches',
    image: '/media/images/zanzibar/highlights/beaches.png',
    svg: '/media/svgs/zanzibar/beaches.svg',
    description:
      "Relax on Zanzibar's world-renowned beaches, where white sands meet turquoise waters. Enjoy sunbathing, swimming, and a variety of water sports. Visit popular beaches like Nungwi, Kendwa, and Paje for a perfect blend of relaxation and adventure.",
  },
  {
    id: 3,
    title: 'Spice Plantations',
    image: '/media/images/zanzibar/highlights/spiceplantations.png',
    svg: '/media/svgs/zanzibar/plantations.svg',
    description:
      'Tour the famous spice plantations and learn why Zanzibar is known as the "Spice Island." Discover the origins of spices like cloves, nutmeg, and cinnamon, and experience their captivating aromas. Participate in spice tours and enjoy traditional Swahili cuisine prepared with these spices.',
  },
  {
    id: 4,
    title: 'Coral Reefs and Marine Life',
    image: '/media/images/zanzibar/highlights/marinelife.png',
    svg: '/media/svgs/zanzibar/marinelife.svg',
    description:
      "Snorkel and dive in the crystal-clear waters of Zanzibar's coral reefs. Explore the vibrant marine life, including colorful fish, sea turtles, and dolphins. Visit the Mnemba Atoll and Chumbe Island for some of the best underwater experiences.",
  },
];

// Define the header element with styling and text
const Header = (
  <div className="text-md sm:text-4xl font-bold text-center">
    {'Must-See Highlights of Your'.toUpperCase()}
    <span className="text-orange-600"> {'Zanzibar Trip'.toUpperCase()}</span>
  </div>
);

// Define the header description for the section
const headerDescription =
  "Witness the awe-inspiring movement of millions of wildebeest, zebras, and gazelles across the Maasai Mara plains. Experience nature's most spectacular event, where predator-prey interactions unfold before your eyes. This incredible phenomenon offers a front-row seat to one of the world's most breathtaking wildlife spectacles.";

// Export the Highlights component, passing sections, header, and headerDescription to the HighlightsLayout component
export default function Highlights() {
  return (
    <HighlightsLayout
      sections={sections}
      header={Header}
      headerDescription={headerDescription}
      page='zanzibar'
    />
  );
}
