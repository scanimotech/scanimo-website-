import { useState } from "react";
import { motion } from "framer-motion";
import A11 from "../assets/A1.svg";
import A22 from "../assets/A2.svg";
import A33 from "../assets/A3.svg";
import OurS from "../assets/OurS.png";
import AU from "../assets/AboutUs.svg";
import PB from "../assets/PageB.svg";

export default function OurStory() {
  return (
    <>
      <div className="OurStory mt-10 px-6 sm:px-8 md:px-8 lg:px-6 overflow-hidden">
        <div className="flex justify-center">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto mt-4">
            Our Story   
            <div
        className="h-[4px] w-full rounded-full"
        style={{
          background:
            "linear-gradient(to right, #148CFF 0%, #148CFF 40%, #FF8F00 40%, #FF8F00 60%, #148CFF 60%, #148CFF 100%)",
        }}
      ></div >
          </h2>
            
      </div>
          <p
            className="text-justify text-base sm:text-lg md:text-[20px] 
            leading-relaxed mx-2 sm:mx-4 md:mx-4 my-10 sm:my-16 md:my-20
            lg:mx-15"
            
          >
            Every big idea begins with a small spark — a moment of frustration 
            that makes you pause and wonder, “there has to be a better way.” 
            For us, that spark came from everyday experiences: the long waits,
            the little inconveniences, and the question of why simple tasks 
            couldn’t be smoother. From those small annoyances grew a vision 
            — a dream to make everyday experiences easier, faster, and more
            human. At Scanimo, we recognized that these everyday inconveniences
            were more than just minor annoyances—they were opportunities for 
            change. We saw how long queues not only tested shoppers' patience
            but also impacted businesses, leading to lost sales and diminished
            customer satisfaction. Driven by a desire to transform these everyday
            challenges, we set out to create a solution that would make shopping
            experiences smoother, faster, and more enjoyable for everyone.
            Our journey began with a shared vision: to eliminate the barriers
            that turn simple tasks into frustrations.
            Scanimo was born from late-night brainstorming sessions,
            coffee cups, and endless “what ifs.” What started as sketches
            on blank screens slowly took shape into functional prototypes,
            driven by curiosity, creativity, and a determination to 
            simplify the world around us. Every decision, every line of
            design, and every plan has been guided by a single belief:
            innovation isn’t just about creating technology — it’s about
            connecting people with ease, comfort, and trust. Today, 
            Scanimo is the result of that journey — a team of 
            passionate thinkers and doers working together to transform
            ordinary moments into seamless, meaningful experiences.
            Our mission is simple: to redefine how people interact with the
            world around them, one thoughtful innovation at a time.
          </p>
        
      </div>

      <div className="flex justify-center  items-center overflow-hidden mb-6">
  <img
    src={OurS}
    alt="Our Story"
    className="
      w-[140%] sm:w-[150%] md:w-[110%] lg:w-[100%]
      md:h-auto h-[100px]
      object-cover object-right md:object-center
    "
  />
</div>
    </>
  );
}


