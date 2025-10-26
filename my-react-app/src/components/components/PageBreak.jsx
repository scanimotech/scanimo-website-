import PB from "../assets/PageB.svg";
import PB2 from "../assets/PB2.svg";

export default function PageBreak() {
    return(
        <>
        {/* Desktop/Tablet View */}
        <div className="hidden lg:block w-full mx-auto my-2">
            <img src={PB} className="w-full h-auto" alt="Page Break"/>
        </div>

        {/* Mobile View */}
        <div className=" lg:hidden w-full   mt-16 px-4 py-20 bg-blue-500/22 flex flex-col justify-between gap-16 ">
            <h2 className=" font-bold text-3xl text-center">
                Building the <span className="text-[#004E98]">Future of Retail</span>, Today</h2>
            <img src={PB2} className="w-full h-auto" alt="Page Break"/>
            <p className=" font-medium text-center">We’re bringing India a whole new way to shop. Say goodbye to long
                 queues and enjoy a seamless experience.</p>
        </div>
        </>
    )
}