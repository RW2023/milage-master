// src/app/layout.tsx
import { NextPage } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Head from 'next/head';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Mile Master',
  description: 'Track hub odometer readings',
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" data-theme="corporate">
      <Head>
        {/* <meta
          property="og:image"
          content="https://next-quotes-pied.vercel.app/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Quotes from African American Thought Leaders"
        /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className="mt-5">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
};

export default RootLayout;
