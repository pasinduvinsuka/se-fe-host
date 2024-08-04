## Project Requirements Document

### General Requirements

- Next.js Version: Use Next.js version 14 with TypeScript.
- Styling: Choose a CSS-in-JS solution (e.g., styled-components) or Tailwind CSS for styling.
- Project Structure: Set up the project using the new app directory structure as follows


```
/my-nextjs-project
  /app
    /components
      - MainComponent.tsx
      - Header.tsx
      - Footer.tsx
    /styles
      - global.css
    - layout.tsx
    - page.tsx
    - seo.tsx
  /public
    /locales
      /en
        common.json
      /de
        common.json
      /fr
        common.json
  /__tests__
    - MainComponent.test.tsx
  - next-i18next.config.js
  - i18n.js
  - jest.config.js
  - jest.setup.js
  - .eslintrc.json
  - .prettierrc
  - .prettierignore
  - .babelrc
  - package.json
  - tsconfig.json
  - next-env.d.ts

```


## Design Implementation
- Figma Design: Follow the provided Figma design closely for layout, spacing, colors, and typography.
- Responsiveness: Ensure responsiveness across all devices (mobile, tablet, desktop).
- Reusable Components: Break down the design into reusable components (e.g., Header, Footer, Button, Card).
- Dynamic Content: Use props for dynamic content in components.

## Functionality
- Routing: Implement dynamic routing using file-based routing in the app directory.
- State Management: Use React Context API or Redux for global state management.
- Form Validation: Implement form validation with React Hook Form and Yup.

## SEO and Performance
- Metadata: Set up metadata using next/head (title, description, canonical tags).
- Open Graph Tags: Implement Open Graph tags for social media sharing.
- Image Attributes: Ensure images have alt attributes.
- Image Optimization: Optimize images with the Next.js Image component.
- Lazy Loading: Implement lazy loading for images and components.

## Accessibility
- ARIA Labels: Use ARIA labels for all interactive elements.
- Keyboard Navigation: Ensure the website is keyboard-navigable.
- Contrast Ratios: Maintain contrast ratios that meet WCAG standards.

## Code Quality
- Linting and Formatting: Use ESLint and Prettier for code linting and formatting.
- Unit Testing: Write unit tests with Jest and React Testing Library.

# Helper Code & Detailed Implementation

#### Main Component (MainComponent.tsx)

```
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './MainComponent.module.css'; // if using CSS Modules or styled-components

interface MainComponentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const MainComponent: React.FC<MainComponentProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainComponent;
```

#### Page Component (page.tsx)

```
import MainComponent from './components/MainComponent';
import Card from './components/Card';

const HomePage = () => {
  return (
    <MainComponent title="Home Page" description="This is the home page">
      <section>
        <h1>Welcome to the Home Page</h1>
        <Card title="Card Title" content="Card content goes here." />
        {/* Add more content here as needed */}
      </section>
    </MainComponent>
  );
};

export default HomePage;
```

#### SEO Component (seo.tsx)

Create a reusable SEO component to manage all the necessary tags in one place:


```
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string; // Optional: URL of the image to display
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
  </Head>
);

export default SEO;

```
Using the SEO Component in a Page
Here's how to use the SEO component in your page components:

```
// pages/index.tsx
import React from 'react';
import SEO from '../components/SEO';
import MainComponent from '../components/MainComponent';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home Page - My Website"
        description="This is the home page of my awesome website."
        url="https://www.mywebsite.com/"
        image="https://www.mywebsite.com/image.jpg" // Optional
      />
      <MainComponent title="Home Page" description="Welcome to our website!">
        <section>
          <h1>Welcome to the Home Page</h1>
          <p>This is the main content of the home page.</p>
        </section>
      </MainComponent>
    </>
  );
};

export default HomePage;

```


#### Global Styles (global.css or Tailwind CSS setup)

```
/* global.css */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

/* Add more global styles as needed */
```

#### ESLint Configuration (.eslintrc.json)

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```
#### Prettier Configuration (.prettierrc)

```
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2
}
```

#### Prettier Ignore File (.prettierignore)
```
node_modules
.next
out
public
```
#### Jest Configuration (jest.config.js)

```
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
```

#### Jest Setup File (jest.setup.js)

```
import '@testing-library/jest-dom/extend-expect';
```

#### Babel Configuration (.babelrc)

```
{
  "presets": ["next/babel"]
}
```

#### TypeScript Configuration (tsconfig.json)

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmitOnError": true,
    "types": ["jest", "node"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

#### Package Scripts (package.json)
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write .",
  "test": "jest"
}
```

#### Example Test (MainComponent.test.tsx)

```
import { render, screen } from '@testing-library/react';
import MainComponent from '../components/MainComponent';

describe('MainComponent', ()
```
## Additional Configuration

TypeScript next-env.d.ts File
You might need to include a next-env.d.ts file for TypeScript:

```
// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

#### Setting Up Tailwind CSS (if chosen for styling)

If you decide to use Tailwind CSS, you need to set it up:

Configure Tailwind in tailwind.config.js:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Additional Package Scripts (package.json)
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write .",
  "test": "jest",
  "type-check": "tsc --noEmit",  // TypeScript type checking
  "prepare": "husky install"     // Setting up Husky for pre-commit hooks (optional)
}
```
#### Insertion Points:
- next-env.d.ts: Create this file in the root of your project.
- Tailwind CSS setup: If you choose Tailwind CSS, follow the setup instructions and add the configurations as described.
- Additional Package Scripts: Add these scripts to your package.json file.

# Language support

For now we only have english. Use i18n for language integration and easy update later. 

#### next-i18next.config.js

```
// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
  },
};
```

#### i18n.js

```
// i18n.js
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'fr'],
});

export default NextI18NextInstance;
export const {
  appWithTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
```

#### pages/_app.tsx

```
// pages/_app.tsx
import { appWithTranslation } from '../i18n';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
```

#### public/locales/en/common.json

```
{
  "welcome": "Welcome",
  "description": "This is the home page"
}
```

#### public/locales/fr/common.json

```
{
  "welcome": "Bienvenue",
  "description": "Ceci est la page d'accueil"
}
```
#### Integration in Components: Example MainComponent.tsx

```
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import styles from './MainComponent.module.css';

interface MainComponentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const MainComponent: React.FC<MainComponentProps> = ({ title, description, children }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t(title)}</title>
        <meta name="description" content={t(description)} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:title" content={t(title)} />
        <meta property="og:description" content={t(description)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainComponent;

```

You can easily add more languages later by creating new directories under public/locales and adding the appropriate JSON translation files.

