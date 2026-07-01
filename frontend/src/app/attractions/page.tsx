"use client";

import { useEffect, useMemo, useState } from "react";
import TourCard from "@/app/Components/tourcard";
import ErrorBanner from "@/app/Components/ErrorBanner";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchAttractions } from "@/lib/slices/attractionsSlice";

export default function Attractions() {
  const dispatch = useAppDispatch();
  const { attractions, loading: attractionsLoading, error: attractionsError } = useAppSelector(state => state.attractions);
  const { isLoading: globalLoading } = useAppSelector(state => state.ui);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchAttractions());
  }, [dispatch]);

  const locations = useMemo(() => {
    const unique = Array.from(new Set(attractions.map((a) => a.location).filter(Boolean)));
    return unique;
  }, [attractions]);

  const filteredAttractions = useMemo(() => {
    const term = search.trim().toLowerCase();
    return attractions.filter((attraction) => {
      const matchesSearch =
        !term ||
        attraction.title.toLowerCase().includes(term) ||
        attraction.description.toLowerCase().includes(term);
      const matchesLocation = locationFilter === "all" || attraction.location === locationFilter;
      return matchesSearch && matchesLocation;
    });
  }, [attractions, search, locationFilter]);

  return (
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
          {attractionsError && (
            <ErrorBanner message={attractionsError} onRetry={() => dispatch(fetchAttractions())} />
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search attractions..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            {locations.length > 0 && (
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              >
                <option value="all">All locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            )}
          </div>

          {(globalLoading || attractionsLoading) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 h-80 rounded-lg" />  
            ))} 
          </div>
          ) : filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction) => (
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
          ) : (
            <p className="text-center text-gray-500 py-12">
              {attractions.length === 0 ? "No attractions available" : "No attractions match your search"}
            </p>
          )}  
        </div>
      </section>
    </>
  );
}
