import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import "../styles/globals.css"
import "primereact/resources/themes/saga-orange/theme.css";

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Safari Expert',
  description: 'Safari Expert',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
     
        {children}
      </body>
    </html>
  );
}
