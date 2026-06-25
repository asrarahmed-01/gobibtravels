
"use client";
import React, { use } from "react";
import TourPack from "./Components/tourpack";
import HomeCard from "./Components/HomeCard";
import {  Facebook,Youtube,Instagram,Twitter, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchHomeCards } from "@/lib/slices/homeSlice";
import { useRouter } from "next/navigation";


  interface CardData {
    id: string;
    title: string;
    description: string;
    link: string;
    
  }
  const tours =[
     {
            image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
            title: "Dubai Package",
            description: "Dubai, in the United Arab Emirates, is a dynamic city known for its modern architecture, luxury shopping, vibrant nightlife, and desert landscapes. Tour packages for Dubai cater to a diverse range of interests and preferences.",
        },

        {
            image: "https://images.unsplash.com/photo-1507840771025-26e8ececa04c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
            title: "Europe Package",
            description: "Europe offers a wide range of experiences, from historical cities to picturesque countryside, charming villages, and stunning coastlines.",
        },

        {
            image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
            title: "Bali Package",
            description: "Bali, Indonesia, is a popular tourist destination known for its beautiful beaches, rich culture, stunning landscapes, and vibrant nightlife. Tour packages for Bali typically offer a range of options to suit different preferences and budgets.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
            title: "Singapore Package",
            description: "Singapore is a vibrant city-state known for its modern skyline, diverse culture, delicious cuisine, and numerous attractions.",
        },
  ]



export default function Home() {
  const dispatch = useAppDispatch();
  const { homeCards, loading: homeLoading } = useAppSelector((state) => state.home);
  React.useEffect(() => {
    dispatch(fetchHomeCards());
  }, [dispatch]);
 const router = useRouter();
    
  return (
    <>
    
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to gobib Travels</h1>
      <p className="text-lg mb-6">
        Explore the world with gobib Travels - Your gateway to unforgettable journeys and adventures.
      </p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  {homeLoading ? (
    <>
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg h-64"
        />
      ))}
    </>
  ) : (
    homeCards.map((card) => (
      <HomeCard
        key={card.id}
        title={card.title}
        description={card.description}
        link={card.link}
        gradient={"bg-gradient-to-br from-blue-500 to-cyan-600"}
        
      />
    ))
  )}
</div>
    </div>
    

       <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {tours.map((attraction, index) => (
              <TourPack
                key={index}
                image={attraction.image}
                title={attraction.title}
                description={attraction.description}
                
                
              />
            ))}
          </div>
        </div>
        </section>
      
      <section className="relative h-screen overflow-hidden flex items-center justify-center text-center ">
        <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        >
        <source  src= "beach.mp4" type="video/mp4" /> 
         </video>

      <div className="absolute inset-0 bg-black/30 " />
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

    <section className=" relative h-screen bg-cover bg-center flex items-center justify-center py-20 "
    style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww')",
        }}>
          <div className=" absolute inset-0 bg-black/60 backdrop-blur-sm"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
        <div className=" relative  z-10 container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-16">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-bold  text-black-500 italic mb-6">
              “I appreciate the timely and professional services, you and your staff have provided. I have always had positive experience with gobib Tour & Travel.”
            </blockquote>
            <p className="text-orange-400 font-semibold">- Mr. Parteek Jain</p>
          </div>
        </div>
      </section>

      <div className="relative h-screen bg-cover bg-center flex items-center justify-center"
         style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1722680738736-66a4cdc08923?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900')",
         }} >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via transparent to-black/30"/>

      <div className=" relative z-10 text-center px-6 max-w-4xl mx-auto ">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 drop-shadow-2xl leading-tight">
          Subscribe for <br/>
          <span className='text-darkblue-500'>Weekly Deals</span>
        </h2>

        <div className='flex flex-col gap-6 max-w-2xl mx-auto '>
         
          <input
            type="email"
            placeholder="Email"
            className="w-full px-10 py-6 text-2xl text-orange-600 placeholder-orange-400 bg-transparent border-2 border-orange-400 rounded-none focus:outline-none focus:border-orange-600 transition"
             style={{ borderRadius: '0px'}}
             />
            
             
          <button
            className=" group relative w-full  py-5 bg-orange-500 text-white font-bold text-2xl uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap=3 transform hover:scale-105">
            SUBSCRIBE
            <ArrowRight className='w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ' />
            
          </button>
           <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-shadow">
              <Facebook className="w-8 h-8 text-gray-800" />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-shadow">
              <Instagram className="w-8 h-8 text-gray-800" />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-shadow">
               <Twitter className="w-8 h-8 text-gray-800" />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-shadow">
              <Youtube className="w-8 h-8 text-gray-800" />
            </a>
            </div>
          </div>
          </div>

     </div>    
  </> 
  );
}
