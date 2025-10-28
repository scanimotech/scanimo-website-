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
    <main className="flex flex-col bg-white justify-center flex-1 mt-32 overflow-x-hidden md:pt-10 lg:pt-0">
      {/* Container matching navbar width */}
      <div className="w-full max-w-[400px] 
        [@media(min-width:360px)]:max-w-[460px]
        [@media(min-width:410px)]:max-w-[800px]
        [@media(min-width:765px)]:max-w-[1020px]
        [@media(min-width:1024px)]:max-w-[1500px]
        text-center mx-auto"
      >
        <div className="w-full text-center [@media(min-width:390px)]:pb-14 [@media(min-width:410px)]:pb-0">
   
          {/* ===== Heading ===== */}
          <h2
            className="font-poppins font-bold 
              [@media(min-width:410px)]:pt-7 [@media(min-width:390px)]:pt-9
              bg-[linear-gradient(90deg,#148CFF_0%,#148CFF_20%,#005BBB_60%)] 
              bg-clip-text text-transparent leading-tight text-center
              text-[1.7rem] 
              [@media(min-width:360px)]:text-[1.85rem]
              [@media(min-width:390px)]:text-[2rem]
              [@media(min-width:410px)]:text-[2.25rem]
              [@media(min-width:765px)]:text-[3.1rem]
              [@media(min-width:1024px)]:text-[3.25rem]
              [@media(min-width:1280px)]:text-[3.4rem]
              [@media(min-width:1536px)]:text-[3.6rem]
              transition-all duration-300
              whitespace-normal break-words overflow-visible 
              max-w-[90%] [@media(min-width:410px)]:max-w-[85%] mx-auto px-2"
          >
            The Future of Shopping in India is Almost Here Fast, Smart, and Effortless
          </h2>

          {/* ===== Subheading ===== */}
          <p
            className="text-[0.95rem] 
              [@media(min-width:360px)]:text-[1.05rem]
              [@media(min-width:390px)]:text-[1.225rem]
              [@media(min-width:410px)]:text-[1.3rem]
              [@media(min-width:765px)]:text-[1.5rem]
              [@media(min-width:1024px)]:text-[1.55rem]
              [@media(min-width:1280px)]:text-[1.6rem]
              [@media(min-width:1536px)]:text-[1.75rem]
              font-poppins font-normal text-black 
              pt-4 [@media(min-width:410px)]:pt-6 mx-auto text-center 
              max-w-[90%] [@media(min-width:410px)]:max-w-[75%] leading-snug"
          >
            Get Notified When We Launch
          </p>

          {/* ===== Input + Button ===== */}
          <div className="pt-4 [@media(min-width:410px)]:py-6 flex flex-col md:flex-row items-center justify-center gap-3 px-4 [@media(min-width:410px)]:px-6 [@media(min-width:1024px)]:pb-14 [@media(min-width:1536px)]:pb-3
          [@media(min-width:765px)]:max-w-[420px]:pb-10 
          [@media(min-width:410px)]:pb-20 
          [@media(min-width:765px)]:pb-0 ">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-[80%] max-w-[300px] 
                [@media(min-width:360px)]:max-w-[340px]
                [@media(min-width:410px)]:max-w-[360px]
                [@media(min-width:765px)]:max-w-[420px]
                h-9 
                [@media(min-width:390px)]:h-12
                [@media(min-width:410px)]:mt-4 
                [@media(min-width:410px)]:h-12 
                [@media(min-width:765px)]:h-13 
                [@media(min-width:1024px)]:h-12
                px-3 text-sm [@media(min-width:410px)]:text-base text-black placeholder-gray-500 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-400
                transition-all duration-300"
            />

            <button
              onClick={handleSubmit}
              className="mt-3 h-9  
                [@media(min-width:390px)]:mt-4 
                [@media(min-width:390px)]:h-12 
                [@media(min-width:410px)]:h-12 
                [@media(min-width:765px)]:h-13 
                [@media(min-width:1024px)]:h-12  
                w-[60%] [@media(min-width:410px)]:w-[60%] [@media(min-width:765px)]:w-[140px]
                text-sm [@media(min-width:410px)]:text-base rounded-md flex items-center justify-center 
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



