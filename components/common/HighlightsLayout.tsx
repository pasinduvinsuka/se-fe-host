'use client';
import React from 'react';
import Image from 'next/image';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type HighlightsLayoutProps = {
  sections: {
    id: number;
    title: string;
    image: string;
    svg: string;
    description: string;
  }[];
  header: React.JSX.Element;
  headerDescription: string;
  page: 'kenya' | 'zanzibar';
};

const HighlightsLayout = ({
  sections,
  header,
  headerDescription,
  page,
}: HighlightsLayoutProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div>
      {header}
      <h6 className="text-center pt-5 md:px-10 lg:px-14 xl:px-44">
        {headerDescription}
      </h6>
      <div className="relative container">
        {sections.map((section, index) => {
          // Determine top position for the SVG
          const topPosition =
            section.id === 3 ? 'top-[-148px]' : 'top-[-160px]';

          // Determine translation
          let translationClass = '-translate-x-40 sm:-translate-x-56'; // Default case
          if (section.id === 1) {
            translationClass = '-translate-x-1/4 sm:-translate-x-1/5 ';
          } else if (section.id === 2) {
            translationClass = '-translate-x-44 sm:-translate-x-72';
          }

          return (
            <div
              key={section.id}
              className="relative flex flex-col lg:flex-row items-center justify-center pt-28 gap-28"
            >
              {/* Render the road SVG between sections 1 and 2 */}
              {index === 0 && (
                <div className="absolute inset-x-0 lg:top-[calc(100%-15rem)] xl:top-[calc(100%-20rem)] 2xl:top-[calc(100%-23rem)]  3xl:top-[calc(100%-28rem)]  z-10">
                  <img
                    src={
                      page == 'kenya'
                        ? '/svgs/kenya/mainpage/kenya-road-1.svg'
                        : '/svgs/zanzibar/mainpage/zanzibar-road-1.svg'
                    }
                    alt="Dotted Road"
                    className="w-full object-cover max-w-full lg:h-[600px] xl:h-[700px] 2xl:h-[800px] 3xl:h-[950px] hidden lg:block"
                    // style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
              {/* Render the road SVG between sections 2 and 3 */}
              {index === 1 && (
                <div className="absolute inset-x-0 lg:top-[calc(100%-18rem)] xl:top-[calc(100%-20rem)] 2xl:top-[calc(100%-26rem)]  3xl:top-[calc(100%-30rem)] 3xl:-translate-x-72 z-10">
                  <img
                    src={
                      page == 'kenya'
                        ? '/svgs/kenya/mainpage/kenya-road-2.svg'
                        : '/svgs/zanzibar/mainpage/zanzibar-road-2.svg'
                    }
                    alt="Dotted Road"
                    className="w-full object-cover max-w-full lg:h-[600px] xl:h-[700px] 2xl:h-[800px] 3xl:h-[950px] hidden lg:block"
                    // style={{
                    //   maxWidth: '100%',
                    //   height: 'auto',
                    //   alignItems: 'left',
                    // }}
                  />
                </div>
              )}
              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 1 ? 'lg:order-2 ' : ''
                } `}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={578}
                  height={560}
                  className={`rounded-md ${
                    page == 'zanzibar' ? 'object-contain' : 'object-cover'
                  } pb-10`}
                  style={{ width: 778, height: 560 }}
                />
              </div>
              <div className="relative w-full lg:w-[500px] p-8">
                <div
                  className={`absolute inset-0 ${
                    page == 'kenya'
                      ? 'bg-kenya-text-svg'
                      : 'bg-zanzibar-text-svg opacity-20'
                  }  bg-cover bg-center z-0`}
                ></div>
                <img
                  src={section.svg}
                  alt="Animal"
                  className={`absolute ${topPosition} left-1/2 transform ${translationClass} z-[-2] w-52 h-52 object-contain opacity-[6.5%]`}
                />
                <div className="relative z-20">
                  <h2 className="text-md sm:text-3xl font-bold mb-4">
                    {section.title.toUpperCase()}
                  </h2>
                  <p className="text-sm sm:text-lg">{section.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsLayout;
