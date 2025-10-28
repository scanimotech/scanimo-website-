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
    <main className=" heading-text flex flex-col bg-white justify-center flex-1 mt-32 overflow-x-hidden md:pt-10 lg:pt-0">
      {/* Match the navbar container width */}
      <div className="w-full max-w-[400px] xs:max-w-[460px] sm:max-w-[800px] md:max-w-[1020px] lg:max-w-[1500px] text-center">
        <div className="w-full max-w-[400px] xs:max-w-[460px] sm:max-w-[800px] md:max-w-[1020px] lg:max-w-[1500px] text-center ip:pb-14 sm:pb-0">
   
          {/* ===== Heading ===== */}
          <h2
            className="font-poppins font-bold 
              sm:pt-7 ip:pt-9
              bg-[linear-gradient(90deg,#148CFF_0%,#148CFF_20%,#005BBB_60%)] 
              bg-clip-text text-transparent leading-tight text-center
              text-[1.7rem] xs:text-[1.85rem] ip:text-[2rem] sm:text-[2.25rem] md:text-[3.1rem] 
              lg:text-[3.25rem] xl:text-[3.4rem] 2xl:text-[3.6rem]
              transition-all duration-300
              whitespace-normal break-words overflow-visible 
              max-w-[90%] sm:max-w-[85%] mx-auto px-2"
          >
            The Future of Shopping in India is Almost Here Fast, Smart, and Effortless
          </h2>

          {/* ===== Subheading ===== */}
          <p
            className="text-[0.95rem] xs:text-[1.05rem] ip:text-[1.225rem] sm:text-[1.3rem] md:text-[1.75rem] 
            lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.75rem] font-poppins
            pt-4 sm:pt-6 text-black mx-auto text-center 
            max-w-[90%] sm:max-w-[75%] leading-snug"
          >
            Get Notified When We Launch
          </p>

          {/* ===== Input + Button ===== */}
          <div className="pt-4 sm:py-6 flex flex-col md:flex-row items-center justify-center gap-3 px-4 sm:px-6 2xl:pb-3 ">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-[80%] max-w-[300px] xs:max-w-[340px] sm:max-w-[360px] 
              md:max-w-[420px] h-9 ip:h-12 ip:mt-4 sm:h-12 md:h-13 lg:h-12
              px-3 text-sm sm:text-base border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              transition-all duration-300"
            />

            <button
              onClick={handleSubmit}
              className="mt-3 h-9 ip:mt-4 ip:h-12 sm:h-12 md:h-13 lg:h-12  w-[60%] sm:w-[60%] md:w-[140px]
              text-sm sm:text-base rounded-md flex items-center justify-center 
              font-medium text-white border border-blue-600 bg-blue-600 
              hover:bg-white hover:text-orange-500 hover:border-orange-500 
              hover:shadow-xl transition-all duration-300"
            >
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </main>
  );

}
