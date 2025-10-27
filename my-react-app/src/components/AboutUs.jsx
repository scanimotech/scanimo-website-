import About1 from "../assets/About1.svg";
import About2 from "../assets/About2.svg";
import About3 from "../assets/About3.svg";

export default function AboutUs() {
  return (
    <div className="AboutUs bg-white text-gray-900">
      <div className="flex flex-col justify-center items-center md:gap-8 gap-3 px-4 sm:px-6 md:px-8 lg:px-18 py-20 sm:py-24 lg:py-32">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h2 className="text-center text-3xl sm:text-3xl md:text-4xl font-semibold mx-auto mt-4">
              About Us <div className="h-[4px] w-full rounded-full" style={{
                          background: "linear-gradient(to right,  #FF8F00 0%, #FF8F00 20% ,#148CFF 20%, #148CFF 100%)",
                                    }}
              ></div>
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="text-base text-center sm:text-lg md:text-xl lg:text-3xl font-semibold bg-gradient-to-r from-[#148CFF] via-[#0568CD] to-[#004E98] bg-clip-text text-transparent leading-relaxed px-3 sm:px-3 md:px-2">
          Scanimo Technologies Private Limited, incorporated on January 1, 2025, is a tech-driven startup focused on transforming the retail experience. Headquartered in Jammu, Scanimo empowers both retailers and customers with smart self-scanning solutions that save time, enhance convenience, and make shopping seamless. Founded by Namyaa Sarin and Varinder Sarin, our company combines innovation, technology, and customer-centric design to redefine the future of retail.
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center justify-around mt-8 gap-4 my-4">
          <div className="flex flex-row sm:flex-row items-center justify-around gap-8">
            <img src={About2} className="w-2/5 sm:w-1/4" alt="About 2" />
            <img src={About1} className="w-2/5 sm:w-1/4" alt="About 1" />
          </div>

          {/* 3rd image moves below on mobile */}
          <img
            src={About3}
            className="w-3/5  sm:w-1/4 sm:ml-6 mt-4 sm:mt-0"
            alt="About 1"
          />
        </div>
      </div>
    </div>
  );
}



