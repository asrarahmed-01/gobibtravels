
"use client";
import React, { useState } from "react";
import TourPack from "./Components/tourpack";
import HomeCard from "./Components/HomeCard";
import ErrorBanner from "./Components/ErrorBanner";
import {  Facebook,Youtube,Instagram,Twitter, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchHomeCards } from "@/lib/slices/homeSlice";
import { fetchTours } from "@/lib/slices/toursSlice";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  const dispatch = useAppDispatch();
  const { homeCards, loading: homeLoading, error: homeError } = useAppSelector((state) => state.home);
  const { tours, loading: toursLoading, error: toursError } = useAppSelector((state) => state.tours);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  React.useEffect(() => {
    dispatch(fetchHomeCards());
    dispatch(fetchTours());
  }, [dispatch]);

  const featuredTours = tours.slice(0, 4);

  const router = useRouter();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("submitting");
    try {
      await addDoc(collection(db, "newsletterSubscribers"), {
        email: newsletterEmail.trim(),
        subscribedAt: serverTimestamp(),
      });
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterStatus("error");
    }
  };
    
  return (
    <>
    
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to gobib Travels</h1>
      <p className="text-lg mb-6">
        Explore the world with gobib Travels - Your gateway to unforgettable journeys and adventures.
      </p>
     {homeError && <ErrorBanner message={homeError} onRetry={() => dispatch(fetchHomeCards())} />}
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
          {toursError && <ErrorBanner message={toursError} onRetry={() => dispatch(fetchTours())} />}
          {toursLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
              ))}
            </div>
          ) : featuredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredTours.map((tour) => (
                <TourPack
                  key={tour.id}
                  image={tour.image}
                  title={tour.title}
                  description={tour.description}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">No packages available right now.</p>
          )}
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

        <form onSubmit={handleNewsletterSubmit} className='flex flex-col gap-6 max-w-2xl mx-auto '>

          {newsletterStatus === "success" ? (
            <p className="text-orange-600 font-semibold text-xl">You're subscribed! Watch your inbox for weekly deals.</p>
          ) : (
            <>
              {newsletterStatus === "error" && (
                <p className="text-red-600 font-semibold text-sm">Please enter a valid email address.</p>
              )}
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-10 py-6 text-2xl text-orange-600 placeholder-orange-400 bg-transparent border-2 border-orange-400 rounded-none focus:outline-none focus:border-orange-600 transition"
                 style={{ borderRadius: '0px'}}
                 />


              <button
                type="submit"
                disabled={newsletterStatus === "submitting"}
                className=" group relative w-full  py-5 bg-orange-500 text-white font-bold text-2xl uppercase tracking-wider hover:bg-orange-600 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
                {newsletterStatus === "submitting" ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <ArrowRight className='w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ' />

              </button>
            </>
          )}
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
          </form>
          </div>

     </div>    
  </> 
  );
}
