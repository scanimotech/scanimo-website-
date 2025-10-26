import React, { useEffect, useRef, useState } from "react";
import vedio from "../assets/vedio.mp4";

const ScrollAnimatedVideo = () => {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // Pause at start until scrolled into view
      video.currentTime = 0;
      video.pause();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          setVisible(true);
          // Reset to start when visible again
          video.currentTime = 2.2;
          video.play();
          setHasPlayed(true);

          const stopAt = video.duration - 1;
          const handleTimeUpdate = () => {
            if (video.currentTime >= stopAt) {
              video.pause();
              video.currentTime = stopAt;
            }
          };

          video.addEventListener("timeupdate", handleTimeUpdate);
          return () => video.removeEventListener("timeupdate", handleTimeUpdate);
        } else {
          setVisible(false);
          // Pause and hold last frame when out of view
          video.pause();
          if (video.duration) video.currentTime = Math.max(video.duration - 1, 0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 transition-all duration-700 ease-in-out"
      style={{
        backgroundColor: !hasPlayed ? "white" : "transparent",
      }}
    >
      {/* Heading */}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-none">
  
        <span
        style={{
        background: 'linear-gradient(180deg, #148CFF 0%, #148CFF 20%, #005EC4 60%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
  >
    Scanimo's
  </span>{' '}
  Vision in Motion
</h2>

      {/* Video container */}
      <div
        className={`
          w-full flex items-center justify-center
          overflow-hidden bg-white
          transition-all duration-700 ease-in-out
          ${visible ? "opacity-100 scale-100" : "opacity-95 scale-[0.99]"}
        `}
      >
        <video
          ref={videoRef}
          src={vedio}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="
            w-full
            h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-screen
            object-contain
          "
          style={{
            display: "block",
            transform: "translateZ(0)",
          }}
        />
      </div>
      <div className="px-3">
         {/* Show only on mobile (smaller than sm) */}
        <p className="block pb-4 sm:hidden text-center text-m_para font-semibold text-gray-700">
         Connect, share, and be part of something bigger
       </p>
       {/* Show on tablet/desktop (sm and above) */}
        <p
        className="hidden sm:block md:text-2xl pb-6 px-10 md:px-16 text-[0.875rem]"
        >Connect with people who share your passion, explore new ideas, and be a part of something bigger than yourself
        </p>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdWfFOXV2dNKaDI9Y_Hn3aCDBXcPNxS96EZqlZDwD--1OPE9w/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer">
        <button className="  h-8 w-30  sm:h-11 sm:w-30 text-[0.75rem] lg:h-12 lg:text-[0.9rem] rounded-md flex  items-center justify-center  font-medium text-white sm:rounded-lg border border-blue-600 bg-blue-600 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
          Join Us
       </button> </a>
    </section>
  );
};
export default ScrollAnimatedVideo;
