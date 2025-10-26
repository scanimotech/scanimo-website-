import './Footer.css'
import ScImage1 from "../assets/ScImage1.svg";
import ScImage2 from "../assets/ScImage2.svg";
import ScImage3 from "../assets/ScImage3.svg";
import ScImage4 from "../assets/ScImage4.svg";
import ScImage5 from "../assets/ScImage5.svg";

export default function ftr() {
  return (
    <>
      <div className="d1 flex flex-col md:flex-row justify-around h-auto sm-[220px]  md:h-[440px] mx-2 sm:mx-5 md:mx-10 overflow-hidden gap-3 sm:gap-4 md:gap-0">
        <div className="d11 w-full md:w-6/17 my-4 sm:my-4 md:my-10 flex flex-col gap-8 sm:gap-10 lg:gap-8 md:gap-6 md:justify-between lg:justify-between order-3 md:order-1">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl md:text-2xl font-medium text-center md:text-left">
            Turning everyday into extraordinary
          </h2>
        </div>
            <div className="d111 h-auto md:h-1/2 lg:h-7/12 flex flex-row flex-wrap md:flex-col justify-center  md:justify-around gap-x-6 gap-y-1.5 sm:gap-y-1.5 xl:gap-0.5 md:gap-0 font-normal text-sm sm:text-base md:text-lg">
   <a href='#' className="relative group overflow-hidden inline-block w-fit"> 
     <span>About Us</span>
     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
   </a> 
   <a href='#' className="relative group overflow-hidden inline-block w-fit"> 
     <span>Careers</span>
     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
   </a> 
   <a href='#' className="relative group overflow-hidden inline-block w-fit"> 
     <span>Contact Us</span>
     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
   </a> 
   <a href='#' className="relative group overflow-hidden inline-block w-fit"> 
     <span>Help Center</span>
     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
   </a> 
   <a href='#' className="relative group overflow-hidden inline-block w-fit"> 
     <span>Terms and Conditions</span>
     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
   </a> 

</div>
            <div className="d112 md:h-1/6">
             
               <ul className="flex justify-center md:justify-start gap-2 sm:gap-3 lg:gap-0 flex-nowrap items-center">
                 <li className="flex-shrink-0">
                  <a href="a">
                  <i class="fa-brands fa-instagram icon"></i></a>
                  </li>
                  <li className="flex-shrink-0">
                  <a href="b"><i class="fab fa-x-twitter icon "></i></a>
                  </li>
                <li className="flex-shrink-0">
                  <a href="c"><i class="fab fa-linkedin-in icon"></i></a></li>
                     <li className="flex-shrink-0">
                  <a href="d"><i class="fab fa-google-plus-g icon"></i></a></li>
                  </ul>
            </div>
        </div>


       <div className="d12 relative w-full md:w-20/36 overflow-y-auto my-3 sm:my-4 md:my-6 rounded-2xl hide-scrollbar max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-none order-2">
  <div className="d1222 main">
    <div className="section-fluid-main mx-auto">
      <div className="section-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        
        {/* Section 3 */}
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src={ScImage3} alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base md:text-lg">Shopping Reimagined</h2>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src={ScImage2} alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base md:text-lg">Every Shopper's Struggle</h2>
          </div>
        </div>


        {/* Section 4 */}
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src={ScImage4} alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base md:text-lg">Store Rush Hour</h2>
          </div>
        </div>


        {/* Section 5 */}
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src={ScImage5} alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base md:text-lg">Long Queue Problem</h2>
          </div>
        </div>

        {/* Section 1 */}
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src={ScImage1} alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base md:text-lg">The Time Trap</h2>
          </div>
        </div>

        {/* Section 6 */}
        {/* <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src="https://assets.codepen.io/1462889/sl6.jpg" alt="" />
            </div>
          </div>
          <div className="hover-text">
            <h2 className="text-sm sm:text-base xl:text-lg">Funny Bunny</h2>
          </div>
        </div> */}

      </div>

      {/* 
        href="https://front.codes/"
        className="logoooo"
        target="_blank"
        rel="noreferrer"
      >
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a> */}
    </div>
  </div>
</div>
      </div>
      <div className='h-8 flex flex-col'>
        <div className='bg-[#FF8F00] h-1/2' ></div>
        <div className='bg-[#005BBB] h-1/2'></div>
      </div>
    </>
  )
}
