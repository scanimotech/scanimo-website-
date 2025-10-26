import React, { useEffect, useRef, useState } from "react";
import vedio from "../assets/Vedio.mp4";

const ScrollAnimatedVideo = () => {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); // track if first play is done

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 1;
      video.pause();
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          setVisible(true);
          video.currentTime = 2.3;
          video.play();
          setHasPlayed(true);

          const stopAt = video.duration - 1;
          const handleTimeUpdate = () => {
            if (video.currentTime >= stopAt) {
              video.pause();
              video.currentTime = stopAt; // freeze at last sec
            }
          };
          video.addEventListener("timeupdate", handleTimeUpdate);
          return () => video.removeEventListener("timeupdate", handleTimeUpdate);
        } else {
          setVisible(false);
          // Pause and show last frame when out of view
          video.pause();
          if (video.duration) {
            video.currentTime = Math.max(video.duration - 1, 0);
          }
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
        backgroundColor: !hasPlayed ? "white" : "transparent", // white background only before first play
      }}
    >
      {/* 🧠 Heading */}
      <h2
        className="
          text-center font-semibold text-gray-900
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          mb-6 sm:mb-10 tracking-tight
        "
      >
        Our Vision in Motion
      </h2>

      {/* 🎬 Video Section */}
      <div
        className={`
          w-full flex items-center justify-center overflow-hidden
          transition-all duration-1000 ease-in-out
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
            object-cover rounded-none transition-all duration-700 ease-in-out
            w-[100%] h-[60vh]
            sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen
          "
        />
      </div>
    </section>
  );
};

export default ScrollAnimatedVideo;


