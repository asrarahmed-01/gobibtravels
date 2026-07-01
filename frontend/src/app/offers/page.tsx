"use client";
import React from "react";
import { useRouter } from "next/navigation";




 export default function Offers() {
 
  const router = useRouter();
return(
    <>
      < section
        className=" relative h-96 bg-cover bg-center flex items-center "
        style={{backgroundImage:`url('/bg-image.jpeg')`}}>
            < div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl text-left px-20 font-bold text-white drop-shadow-2xl">
            Offers
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6">
        <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10" 
        >
        <source  src= "beach.mp4" type="video/mp4" /> 
         </video>
    
 
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 drop-shadow-2xl leading-tight">
          Get <span className="text-orange-500">10% Off</span> On Your<br />
          Next Travel
        </h1>

        <button onClick={()=>router.push("/contact")}
        className="mt-10 px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-wider rounded-none hover:bg-orange-600 transition-all duration-300 shadow-lg">
          Explore The Tour
        </button>
      </div>
    </section>
    </>
   );
 };