"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";



type Review = {
    name:string;
    role:string;
    review:string;
    image:string;
}

const BlogCard = ({ review }: { review: Review }) => {
  const [flipped, setFlipped] = React.useState(false);


  const frontSpring = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    reset: true,
    config: { mass: 1, tension: 280, friction: 30 },
  });


  const backSpring = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
    reset: true,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <div
      className="h-80 cursor-pointer select-none"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="relative h-full w-full [transform-style:preserve-3d]">

        
        <animated.div
          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50  via-white to-orange-50 flex items-center justify-center"
          style={{
            ...frontSpring,
            opacity: flipped ? 0 : 1,
          }}
        >
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden  mb-3 border-4 border-white shadow-md" >
            <img 
            src={review.image}
            className="  w-full h-full object-cover" /> </div>
            <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-600">{review.role}</p>
          </div>
        </animated.div>

        
        <animated.div
          className="absolute inset-0 h-full w-full bg-white rounded-xl p-6 flex flex-col justify-center items-center text-center [backface-visibility:hidden] shadow-xl border border-orange-200"
          style={{
            ...backSpring,
            opacity: flipped ? 1 : 0,
          }}
        >
          <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">
            "{review.review}"
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-orange-600">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default BlogCard;