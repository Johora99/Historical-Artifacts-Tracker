
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function GalleryCard({item}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="zoom-in" className="bg-DeepSeaGreen p-5 transform   hover:!scale-110 hover:shadow-2xl relative group shadow-2xl transition-all duration-500">
       <img src={item.image} alt="" className="w-full h-52 object-cover"/>
       <div className="absolute top-0 left-0 bg-DeepSeaGreen bg-opacity-[0.5] z-20 w-0 h-full opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500">
         <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-TealBlueGreen text-xl font-medium">{item.artifact_name}</p>
         </div>
       </div>
    </div>
  )
}
