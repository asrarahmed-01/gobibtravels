"use client";

import React from 'react';
import { MapPin, Waves, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';


interface TourCardProps {
  image: string;
  duration: string;
  price: string;
  title: string;
  description: string;
  location: string;
  activity: string;
  age: string;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  duration,
  price,
  title,
  description,
  location,
  activity,
  age
}) => {

   const router = useRouter();
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
     
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {duration}, ${price}/person
        </div>
      </div>

      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

    
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4" />
            <span>{activity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Age: {age}</span>
          </div>
        </div>

    
        <button onClick={()=>router.push("/contact")}
        className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors uppercase tracking-wider text-sm">
          Get Details
        </button>
      </div>
    </div>
  );
};

export default TourCard;