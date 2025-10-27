import { useState } from "react";
import ScrollingImage from "./components/ScrollingImage";
import logo from "./assets/logo.png";
import OurTeam from "./components/OurTeam";
import Vedio from "./components/Vedio.jsx";
import ContactUs from "./components/Contact_us.jsx";
import JoinUs from "./components/AnimatedWorldMap";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OurStory from "./components/OurStory.jsx";
import PageBreak from "./components/PageBreak.jsx";
import WhatDefinesUs from "./components/WhatDefineUs.jsx";
import OurVision from "./components/Our_Vision.jsx";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "/src/assets/Pins.png",
    "/src/assets/world_map.png",
    "/src/assets/RBtn",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Header */}
<header className="w-full bg-white  fixed top-0 left-0 z-50">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <a href="#"><img src={logo} alt="Scanimo Logo" className="h-10 w-auto" /></a>
    </div>

    {/* Desktop Navbar */}
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#about" className="text-gray-800 text-base hover:text-blue-600 font-medium ">About Us</a>
      <a href="#team" className="text-gray-800 text-base hover:text-blue-600 font-medium">Our Team</a>
      <a href="#contact" className="text-gray-800 text-base hover:text-blue-600 font-medium">Contact Us</a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdWfFOXV2dNKaDI9Y_Hn3aCDBXcPNxS96EZqlZDwD--1OPE9w/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer">
      <button className="bg-blue-600 text-white text-xs px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:shadow-xl border border-transparent transition-all">
        Join Us
      </button></a>
    </nav>

    {/* Hamburger (Mobile) */}
    <button
      className="md:hidden flex items-center text-gray-800 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4">
      <a href="#about" className="block text-gray-800 text-lg hover:text-blue-600 text-m_para font-medium">About Us</a>
      <a href="#team" className="block text-gray-800 text-lg hover:text-blue-600 text-m_para font-medium">Our Team</a>
      <a href="#contact" className="block text-gray-800 text-lg hover:text-blue-600 text-m_para font-medium">Contact Us</a>
      <button className="w-[90%] justify-center bg-blue-600 text-m_para text-white py-2 rounded-lg font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:shadow-xl border border-transparent transition-all">
        Join Us
      </button>
    </div>
  )}
</header>
<main  className="flex flex-col bg-white justify-center flex-1 mt-32">
  <div  className="max-w-8xl mx-auto px-4 sm:pt-20 sm:px-10 lg:px-20">

    {/* Heading */}
    <h2  
      className="font-poppins font-bold 
        bg-[linear-gradient(90deg,#148CFF_0%,#148CFF_20%,#005BBB_60%)] 
        bg-clip-text text-transparent leading-tight text-center 
        text-[1.85rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] 
        xl:text-[4rem] transition-all duration-300"
    >
      The Future of Shopping in India is Almost Here Fast-, Smart, and Effortless
    </h2>

    {/* Subheading */}
    <p className="text-[0.875rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.75rem] font-poppins
      pt-4 sm:pt-6 text-black mx-auto text-center max-w-[90%] sm:max-w-[80%]">
      Get Notified when we Launch
    </p>

    {/* Input + Button */}
    <div  className="pt-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-3 px-2 sm:px-4">
      <input
        type="text"
        placeholder="Enter your email..."
        className="w-[80%] max-w-[300px] sm:max-w-[360px] md:max-w-[420px] h-9 sm:h-10 md:h-11 
        px-2 text-sm sm:text-base border border-gray-300 rounded-md 
        focus:outline-none transition-all duration-300"
      />

      <button
        className="h-9 sm:h-10 md:h-11 w-[60%] sm:w-[120px] md:w-[140px] 
        text-sm sm:text-base rounded-md flex items-center justify-center 
        font-medium text-white border border-blue-600 bg-blue-600 
        hover:bg-white hover:text-orange-500 hover:border-orange-500 
        hover:shadow-xl transition-all duration-300"
      >
        Get Notified
      </button>
    </div>
  </div>
</main>




      {/* Other Components */}
      
      <div  className="w-full mt-26 sm:mt-36 md:mt-30 lg:mt-10 xl:mt-16 relative bottom-0 
      object-contain ">
        <ScrollingImage />
      </div>
      

      <div id="about" className="w-full mt-0 sm:mt-2 ">
        <AboutUs />
      </div>
      <div className="w-full mt-auto sm:mt-10">
        <WhatDefinesUs />
      </div>
      <div className="w-full mt-auto pt-10">
        <OurStory />
      </div>
      
      <div className="w-full mt-auto pt-20">
        <PageBreak />
      </div>
      <div className="w-full mt-auto pt-20">
        <JoinUs />
      </div>

      
      <div id="team" className="w-full mt-auto pt-20">
        <OurTeam />
      </div>
      
      

    <section className="relative w-full pt-10">
       < Vedio />
    </section>
    <div id="contact" className="w-full mt-auto  ">
        <ContactUs />
      </div>
    <div className="w-full mt-auto ">
        <Footer />
      </div>
      </div>
    
  );
}
