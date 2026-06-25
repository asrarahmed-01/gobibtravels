
"use client";
import React from 'react';
import {useRouter} from 'next/navigation';


interface TourPackProps {
  image: string;
  title: string;
  description: string;
  
}

const TourPack: React.FC<TourPackProps> = ({
  image,
  title,
  description,

}) => {

   const router = useRouter();
  return (
  < div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4">
     
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full sm:w-48 h-48 object-cover"
        />
      <button  onClick={()=>(router.push("/contact"))}
        className="bg-orange-500 text-white font-bold py-2 px-6 rounded-none hover:bg-red-600 transition-colors uppercase tracking-wider text-sm">
          Get Details
        </button>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TourPack;