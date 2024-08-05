import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import "../styles/globals.css"; // Import global styles
import "primereact/resources/themes/saga-orange/theme.css"; // Import PrimeReact theme styles

// Configure the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Configure the Rubik font with specific weights and Latin subset
const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Safari Expert', // Title of the application
  description: 'Safari Expert', // Description of the application
};

// RootLayout component that applies global settings to the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type definition for children prop
}>) {
  return (
    <html lang="en"> {/* Set the language attribute for the HTML document */}
      <body className={rubik.className}> {/* Apply the Rubik font class to the body */}
        {children} {/* Render nested content within the body */}
      </body>
    </html>
  );
}
