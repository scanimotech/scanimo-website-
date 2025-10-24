import { useState, useRef, useEffect } from "react";

import A11 from "../assets/A1.svg";
import A22 from "../assets/A2.svg";
import A33 from "../assets/A3.svg";

export default function WhatDefinesUs() {
  const images = [A11, A22, A33];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      
      // Calculate which item is most centered in the viewport
      const center = scrollLeft + containerWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      const items = container.children;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
      
      setCurrentIndex(closestIndex);
    }
  };

  // Add throttling to prevent too many updates
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeout;
    const throttledScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 50);
    };

    container.addEventListener('scroll', throttledScroll);
    return () => {
      container.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const items = container.children;
      
      if (items[index]) {
        const item = items[index];
        const containerWidth = container.offsetWidth;
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        
        // Center the item in the viewport
        const scrollPosition = itemLeft - (containerWidth - itemWidth) / 2;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-around">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto my-10">
        What Defines Us
         <div
        className="h-[4px] w-full rounded-full"
        style={{
          background:
            "linear-gradient(to right, #148CFF 0%, #148CFF 20%, #FF8F00 20%, #FF8F00 40%, #148CFF 40%, #148CFF 100%)",
        }}
      ></div>
      </h2>
      

      {/* --- Desktop / Tablet View --- */}
      <div className="hidden md:flex justify-around my-20 w-full px-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Card ${i + 1}`}
            className="
              rounded-2xl 
              hover:shadow-lg 
              transform transition duration-500 hover:scale-105
              w-1/3 lg:w-1/4
              md:w-[28%]
            "
          />
        ))}
      </div>

      {/* --- Mobile View (scrollable with dots) --- */}
      <div className="md:hidden w-full my-10">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 px-6 sm:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 
                w-[70%]
                sm:w-[80%]
                md:w-[85%] 
                snap-center
              "
            >
              <img
                src={img}
                alt={`Card ${i + 1}`}
                className="
                  w-full 
                  rounded-2xl 
                  shadow-lg 
                "
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-blue-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
