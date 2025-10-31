import { useState } from "react";

export default function Heading() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <main  className="flex flex-col bg-white pt-30 sr:pt-50 sm:pt-20 md:pt-25 lg:pt-20  xl:pt-12  flex-1 ">
  <div  className="max-w-8xl mx-auto px-4  sm:pt-20 sm:px-10 lg:px-20 ">

    {/* Heading */}
    <h2  
      className="font-poppins font-bold 
        bg-[linear-gradient(90deg,#148CFF_0%,#148CFF_20%,#005BBB_60%)] 
        bg-clip-text text-transparent leading-tight text-center 
        text-[1.85rem] sr:text-[2.125rem] sm:text-[2.25rem] md:text-[2.85rem] lg:text-[3rem] 
        xl:text-[3.5rem] transition-all duration-300"
    >
      The Future of Shopping in India is Almost Here Fast, Smart, and Effortless
    </h2>

    {/* Subheading */}
    <p className="text-[0.875rem] sr:text-[1.25rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[1.75rem] font-poppins
      pt-4 sm:pt-6 text-black mx-auto text-center max-w-[90%] sm:max-w-[80%]">
      Get Notified when we Launch
    </p>

    {/* Input + Button */}
    <div  className="pt-3 md:pt-6 lg:pt-7 sm:py-4  flex flex-col sm:flex-row items-center justify-center gap-3 px-2 sm:px-4">
      <input
        type="text"
        placeholder="Enter your email..."
        className="w-[80%] max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] h-9 sr:h-10 sm:h-11 md:h-12 lg:h-13 xl:h-13
        px-2 text-sm sm:text-base border border-gray-300 rounded-md 
        focus:outline-none transition-all duration-300"
      />

      <button
        className="h-9 sr:h-10 sm:h-11 md:h-12 lg:h-13 xl:h-13 w-[60%] sm:w-[120px] md:w-[140px] 
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

  );
}


