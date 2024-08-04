import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl1': '1396px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '1780px',
      '5xl': '1816px',
      '6xl': '1872px',
      '7xl': '1948px',
      '8xl': '2004px',
      '9xl': '2060px',
      '10xl': '2116px',
      '11xl': '2168px',
      '12xl': '2214px',
      '13xl': '2266px',
      '14xl': '2310px',
      '15xl': '2362px',
      '16xl': '2418px',
      '17xl': '2470px',
      '18xl': '2516px',
      '19xl': '2578px',
      '20xl': '2618px',
      '21xl': '2679px',
      '22xl': '2702px',
      '23xl': '2726px',
      '24xl': '2742px',
      '25xl': '2752px',
      '26xl': '2762px',
      '27xl': '2772px',
      '28xl': '2782px',
      '29xl': '2792px',
      '30xl': '2802px',
      '31xl': '2812px',
      '32xl': '2822px',
      '33xl': '2832px',
      '34xl': '2842px',
      '35xl': '2852px',
      '36xl': '2862px',
      '37xl': '2872px',
      '38xl': '2882px',
      '39xl': '2892px',
      '40xl': '2902px',
      '41xl': '2912px',
      '42xl': '2922px',
      '43xl': '2992px',

    },

    extend: {
      backgroundImage: {
        'kenya-text-svg': "url('/media/svgs/kenya/mainpage/kenya-text.svg')",
        'zanzibar-text-svg': "url('/media/svgs/zanzibar/mainpage/zanzibar-text.svg')",
        'kenya-svg-1': "url('/media/svgs/kenya/mainpage/kenya-svg-1.svg')",
        'kenya-svg-2': "url('/media/svgs/kenya/mainpage/kenya-svg-2.svg')",
        'kenya-svg-3': "url('/media/svgs/kenya/mainpage/kenya-svg-3.svg')",
        'zanzibar-svg-1': "url('/media/svgs/zanzibar/mainpage/zanzibar-svg-1.svg')",
        'zanzibar-svg-2': "url('/media/svgs/zanzibar/mainpage/zanzibar-svg-2.svg')",
      },
    },
    mixBlendMode: {
      screen: 'screen',
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
  },
  plugins: [],
};
export default config;
