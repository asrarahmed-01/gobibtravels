import React from 'react';
import {Facebook,Youtube,Instagram,Twitter, ArrowRight} from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="relative text-white ">
      
         
  
        <div 
        className="relative bg-cover bg-center py-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900)",
        }}
      >  
        <div className="absolute inset-0 bg-black/70"/>
        <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 ">
            <span className="text-blue-400">gobib</span>
            Travels
          </h1>
          <p className="text-sm  text:left-align text-gray-300 leading-relaxed">
            At Gobib tour & travel, We are committed to enhance your travel experience, be it business or leisure or both. At gobib holidays, we offer a wide range of services to make your travel experience as smooth and stress-free as possible. From flight bookings to hotel reservations, we have got you covered.</p>
        </div>

        <div >
          <h2 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h2>
          <ul className="flex flex-col">
          <a href="/" className="text-white hover:text-orange-400 transition transform hover:scale-105">Home</a> 
          <a href="/about" className="text-white hover:text-orange-400 transition transform hover:scale-105">About us</a> 
          <a href="/gallery" className="text-white hover:text-orange-400 transition transform hover:scale-105">Gallery</a>
          <a href="/blogs" className="text-white hover:text-orange-400 transition transform hover:scale-105 ">Blog</a> 
          <a href="/contact" className="text-white hover:text-orange-400 transition transform hover:scale-105">Contact us</a>
          </ul>
        </div>
        <div>
           <h2 className="text-xl font-bold mb-4 text-orange-400">Attractions</h2>
        <ul className="space-y-2 text-sm">
         {["Thailand", "Bangkok", "Singapore", "Bali", "Europe", "Goa", "Africa"].map((attraction) => (
           <li key={attraction} className="hover:text-orange-400 transition cursor-pointer hover:scale-105 ">{attraction}</li>
         ))}
        </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-400">Address</h2>

          <p className="text-sm text-gray-300 mb-2"> gobib Travels Pvt Ltd <br/> 123 Travel Lane, Suite 100 <br/> Cityville, ST 12345</p>
          <p className="text-sm text-gray-300 mb-1"> Email: info@gobibtravels.com</p>  
          <p className="text-sm text-gray-300 mb-4"> Phone: +1 (234) 567-8901</p>
          <div className="flex gap-3">
            < a href="#" className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white text-xs font-bold hover:bg-orange-600 transition">
             <Facebook className="w-5 h-5" />
            </a>
            < a href="#" className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white text-xs font-bold hover:bg-orange-600 transition">
             < Instagram className="w-5 h-5" />
            </a>
            < a href="#" className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white text-xs font-bold hover:bg-orange-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            < a href="#" className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white text-xs font-bold hover:bg-orange-600 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
         </div>
      </div>
         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} gobib Travels. All rights reserved.
      </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
