// src/app/layout.tsx
import { NextPage } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';


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
     <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </head>
      <body className="mt-5">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
};

export default RootLayout;
