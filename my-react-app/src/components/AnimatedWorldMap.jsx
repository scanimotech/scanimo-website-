import React, { useEffect, useState } from "react";

const FadingImageReplace = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0 && currentIndex < images.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, images]);

  if (!images.length) {
    return null; // render nothing or a loading state
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Image ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default FadingImageReplace;
