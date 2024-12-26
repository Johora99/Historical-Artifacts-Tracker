import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SliedContent({title}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
         <div>
          <div className="text-center">
            <h2 data-aos="zoom-in" className="text-7xl font-bold text-TealBlueGreen">{title}</h2>
            <p data-aos="fade-right" className="text-white my-5">From tools and pottery to jewelry and weapons, each artifact tells a unique story about its creators and their way of life. These objects serve as invaluable clues for historians and archaeologists, helping to piece together the mysteries of humanity's journey through time.</p>
            <button data-aos="fade-left" className="text-white border-[3px] border-TealBlueGreen bg-TealBlueGreen py-3 px-10 text-xl font-semibold bg-opacity-[0.5] hover:bg-opacity-[1] transition-all duration-300">Learn More</button>
          </div>
         </div>
  )
}
