"use client";

import { useEffect } from "react";
import TourCard from "@/app/Components/tourcard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchAttractions } from "@/lib/slices/attractionsSlice";



 export default function Attractions () {

       const dispatch = useAppDispatch();
       const { attractions, loading: attractionsLoading } = useAppSelector(state => state.attractions);
       const { isLoading: globalLoading} = useAppSelector (state => state.ui);
       
       useEffect(() => {
          dispatch(fetchAttractions())
          }, [dispatch]);
return(
    <>
      < section
        className=" relative h-96 bg-cover bg-center flex items-center "
        style={{backgroundImage:`url('/bg-image.jpeg')`}}>
            < div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl text-left px-20 font-bold text-white drop-shadow-2xl">
            Attractions
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>


     
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {(globalLoading || attractionsLoading) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 h-80 rounded-lg" />  
            ))} 
          </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <TourCard
                key={attraction.id}
                image={attraction.image}
                title={attraction.title}
                description={attraction.description}
                location={attraction.location}
                duration={attraction.duration}
                price={attraction.price}
                activity={attraction.activity}
                age={attraction.age}
              />
            ))}
          </div>
          )}  
        </div>
      </section>
    </>
  );
}
