"use client";

import React, { useState } from "react";
import Image from "next/image";
import CarouselCard from "@/components/CarouselCard";
import { RightNavIcon, LeftNavIcon } from "@/assets/icons";

export function Carousel() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    <CarouselCard key="card-1" />,
    <CarouselCard key="card-2" />,
    <CarouselCard key="card-3" />,
  ];

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full fade-in">
      <button className="absolute left-4 z-10" onClick={handlePrev}>
        <Image src={LeftNavIcon} alt="Left nav icon" width={11} height={21} />
      </button>
      <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
        {cards.map((card, index) => {
          const position =
            index === currentCardIndex
              ? "z-20 scale-100 opacity-100"
              : index === (currentCardIndex + 1) % cards.length
                ? "z-10 scale-75 opacity-80 translate-x-[50%] "
                : "z-10 scale-75 opacity-80 -translate-x-[50%] ";

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${position}`}
            >
              {card}
            </div>
          );
        })}
      </div>
      <button className="absolute right-4 z-10" onClick={handleNext}>
        <Image src={RightNavIcon} alt="Left nav icon" width={11} height={21} />
      </button>
    </div>
  );
}
