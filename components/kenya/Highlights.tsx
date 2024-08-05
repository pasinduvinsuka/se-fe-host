import React from 'react';
import HighlightsLayout from '../common/HighlightsLayout';

// Define the highlights sections with details including title, image, SVG, and description
const sections = [
  {
    id: 1,
    title: 'The Great Migration in the Maasai Mara',
    image: './media/images/kenya/highlights/greatmigration.png',
    svg: './media/svgs/kenya/elephant.svg',
    description:
      "Witness the awe-inspiring movement of millions of wildebeest, zebras, and gazelles across the Maasai Mara plains. Experience nature's most spectacular event, where predator-prey interactions unfold before your eyes. This incredible phenomenon offers a front-row seat to one of the world's most breathtaking wildlife spectacles.",
  },
  {
    id: 2,
    title: 'Close Encounters with the Big Five',
    image: './media/images/kenya/highlights/thebigfive.png',
    svg: './media/svgs/kenya/tiger.svg',
    description:
      "Get up close with Africa's iconic Big Five: lions, elephants, buffalo, leopards, and rhinos. Our guided safaris provide you with unparalleled opportunities to observe these majestic creatures in their natural habitats. Capture stunning photos and create lifelong memories with these unforgettable encounters.",
  },
  {
    id: 3,
    title: 'Cultural Immersion with Local Tribes',
    image: './media/images/kenya/highlights/localtribes.png',
    svg: './media/svgs/kenya/rino.svg',
    description:
      "Immerse yourself in the vibrant cultures of the Maasai, Samburu, and Kikuyu tribes. Visit local villages, join traditional dances, and learn about their customs and way of life. This enriching experience adds a personal and meaningful dimension to your safari, connecting you with Kenya's cultural heritage.",
  },
  {
    id: 4,
    title: 'Visit Lake Nakuru for Flamingo Spectacle',
    image: './media/images/kenya/highlights/flamingo.png',
    svg: './media/svgs/kenya/lion.svg',
    description:
      "Experience the extraordinary sight of millions of flamingos flocking to Lake Nakuru, turning the lake's shores pink. This natural spectacle is unique to Kenya and offers incredible opportunities for bird watching and photography. Alongside flamingos, spot other wildlife such as rhinos, giraffes, and lions in the park.",
  },
];

// Define the header element with styling and text
const Header = (
  <div className="text-md sm:text-4xl font-bold text-center">
    {'Must-See Highlights of Your'.toUpperCase()}
    <span className="text-orange-600"> {'Kenyan Safari'.toUpperCase()}</span>
  </div>
);

// Define the header description for the section
const headerDescription =
  "Witness the awe-inspiring movement of millions of wildebeest, zebras, and gazelles across the Maasai Mara plains. Experience nature's most spectacular event, where predator-prey interactions unfold before your eyes. This incredible phenomenon offers a front-row seat to one of the world's most breathtaking wildlife spectacles.";

// Export the Highlights component, passing sections, header, headerDescription, and page prop to the HighlightsLayout component
export default function Highlights() {
  return (
    <HighlightsLayout
      sections={sections}
      header={Header}
      headerDescription={headerDescription}
      page='kenya'
    />
  );
}
