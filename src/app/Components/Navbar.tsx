"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

const navItems = [
   {name:'Home', href:"/"},
   {name:'About Us', href:"/about"}, 
   {name:'Tours', href:"/tours"},
   {name:'Attractions', href:"/attractions"},
   {name:'Gallery', href:"/gallery"},
   {name:'Offers', href:"/offers"},
   {name:'Blogs', href:"/blogs"},
   {name:'Contact Us', href:"/contact"},
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isLoading} = useAppSelector(state => state.ui);
 
  return (
    <>
    { isLoading && (

      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700/90 backdrop-blur-sm z-50 flex items-center justify-center py-3 px-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span className="font-semibold text-sm tracking-wider">Loading your adventure...</span>
          </div>
        </div>
      )}
      
    <nav className="bg-white shadow-md top-0 z-40 relative">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-400">GOBIB</span>
           Travels
        </Link>
        
          <button onClick={() => setIsOpen(!isOpen)}
           className=" md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        
        <div className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <div className="md:flex md:items-center md:space-x-8 ">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
              key={item.name}
              href={item.href}
              className={`group relative block mt-4 md:mt-0 text-gray-700 font-medium transition-colors  ${
                isActive ? 'text-blue-600':'hover:text-blue-600'
                }`}>
                <span className="relative pb-2 inline-block ">
                  {item.name}
                <span 
                className={`absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out${
                  isActive ? 'w-full': 'w-0 group-hover:w-full'
                  }`}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</nav>
</>
  );
};

export default Navbar;