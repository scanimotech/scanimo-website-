import React from 'react';
import frameImage from '../assets/Frame.png';

const ScrollingImage = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Horizontal scroll container */}
      <div
        className="flex overflow-x-auto overflow-y-hidden h-30  md:h-45"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
        }}
      >
        {/* Hide WebKit scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Flex container for images */}
        <div className="flex items-center">
          <img
            src={frameImage}
            alt="Scrollable content 1"
            className="h-full min-w-[2200px] sm:w-auto  object-cover "
          />
          <img
            src={frameImage}
            alt="Scrollable content 2"
            className="h-full min-w-[2200px] sm:w-auto  object-cover "
          />
          <img
            src={frameImage}
            alt="Scrollable content 3"
            className="h-full min-w-[2200px] sm:w-auto object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollingImage;
