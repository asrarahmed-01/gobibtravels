'use client';

import {  useEffect } from "react";
import TourPack from "../Components/tourpack";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchTours } from "@/lib/slices/toursSlice";

export default function Tours() {
  const dispatch = useAppDispatch();
  const { tours, loading: toursLoading } = useAppSelector(state => state.tours);
  const { isLoading: globalLoading } = useAppSelector(state => state.ui);

  useEffect(() => {
    if (tours.length === 0) {
      dispatch(fetchTours());
    }
  }, [dispatch, tours.length]);
  
  useEffect(() => {
    }, [tours]);

  
  return (
    <>
      <section className="relative h-96 bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url('/bg-image.jpeg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl md:text-7xl text-left px-20 font-bold text-white drop-shadow-2xl">
            Tours Packages
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <div className="p-10">
        <h1 className="text-2xl md:text-3xl p-3 px-12 font-bold mb-4 text-left text-orange-600">
          Our best International Packages
        </h1>
        <h2 className="text-lg p-3 px-12 md:text-2xl font-bold mb-4 text-left text-gray-600">
          We have the best international tour package depends on your preferences, budget, and desired destinations.
        </h2>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
         
          {globalLoading || toursLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="animate-pulse bg-gray-200 h-64 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {tours.length > 0 ? (
                tours.map((tour) => (
                  <TourPack
                    key={tour.id}
                    image={tour.image}
                    title={tour.title}
                    description={tour.description}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 py-12">
                  No tours available
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}