import "@/app/globals.css";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import { ReactNode } from "react";
import { Inter } from 'next/font/google';
import ReduxProvider from "./providers";

const inter = Inter({ subsets: ['latin'] });


export const metadata = { 
  title: 'gobib Travels',
  description: 'Explore the world with gobib Travels - Your gateway to unforgettable journeys and adventures.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-[#f9f9f9] text-[#111827] ${inter.className}`}>
        <ReduxProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
