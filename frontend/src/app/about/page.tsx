// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import { ThumbsUp,Tag, Trophy,Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center py-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b1b?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-orange-400">gobib</span> Travels
              </h1>
              <p className="text-lg mb-6 leading-relaxed">
                Welcome to <strong>gobib tour & travel</strong> — where unforgettable adventures await! We are passionate about crafting immersive travel experiences that go beyond the ordinary, allowing you to discover the world’s most captivating destinations in a truly unique way.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                At gobib Travels, we believe that travel is not just about visiting new places, but about creating memories that last a lifetime. Whether you're seeking an adrenaline-fueled adventure, a cultural immersion, or a leisurely escape, we have the perfect itinerary to suit your interests and preferences.
              </p>
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
              >
                BOOK A TRIP
              </a>
            </div>

            
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
                  alt="gobib Travels Adventure"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Why <span className="text-orange-500">Choose Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ThumbsUp, title: "All places and activities are carefully picked by us." },
              { icon: Tag, title: "Best price guarantee & Hassle-free!" },
              { icon: Trophy, title: "We are an award-winning travel management agency." },
              { icon: Users, title: "Trusted by more than 8,000+ customers." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-orange-600"/> 
                </div>
                <p className="text-gray-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
                alt="Maldives Resort"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Offering Memorable Sightseeing Tours by Certified Guides.
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>gobib tour & travel will make sure that you visit the destination of your choice and at the same time get value for your money.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>gobib tour & travel has partners and friends all over the World that provide proactive travel management — from planning to fulfillment, and from travel policy development to budgetary assistance — with a keen eye on the future and the latest trends of the travel industry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>gobib tour & travel has a dedicated network of agents all over the Indian Subcontinent, to ensure that all our GUESTS are looked after and can reach us (when they want to).</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition"
              >
                BOOK A TRIP
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}