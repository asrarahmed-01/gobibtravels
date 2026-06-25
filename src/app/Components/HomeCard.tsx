// components/HomeCard.tsx
"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomeCard = ({ title, description, link, gradient }: {
  title: string;
  description: string;
  link: string;
  gradient: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

 
  const cardSpring = useSpring({
    from: { transform: "translateY(0px) scale(1)", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" },
    to: {
      transform: hovered ? "translateY(-20px) scale(1.06)" : "translateY(0px) scale(1)",
      boxShadow: hovered
        ? "0 40px 80px rgba(0,0,0,0.35)"
        : "0 6px 20px rgba(0,0,0,0.1)",
    },
    config: { tension: 350, friction: 26 },
    immediate: false,
  });

  const arrowSpring = useSpring({
    from: { transform: "translateX(-120%)", opacity: 0 },
    to: { transform: hovered ? "translateX(0%)" : "translateX(-120%)", opacity: hovered ? 1 : 0 },
    config: { tension: 400, friction: 22 },
  });

  return (
    <Link href={link} className="block">
      <animated.div
        style={cardSpring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group relative overflow-hidden rounded-2xl h-64 ${gradient} cursor-pointer`}
       
      >
        <div className="relative z-10 p-9 h-full flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-bold mb-3">{title}</h2>
            <p className="text-white/90 text-lg leading-relaxed">{description}</p>
          </div>

          <animated.div style={arrowSpring} className="flex items-center gap-5 font-bold text-xl">
            <span>Discover Now</span>
            <ArrowRight className="w-10 h-10 transition-transform duration-300 group-hover:translate-x-4" />
          </animated.div>
        </div>

       
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-400%] group-hover:translate-x-[400%] transition-transform duration-700 pointer-events-none" />
      </animated.div>
    </Link>
  );
};

export default HomeCard;