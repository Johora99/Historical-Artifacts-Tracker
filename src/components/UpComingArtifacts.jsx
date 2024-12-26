
import { motion } from "motion/react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function UpComingArtifacts() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const artifacts = [
    {
      id: 1,
      name: "Ancient Vase",
      description: "A beautiful vase from the Ming dynasty.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OsB9OZFdttDfHrCvKPSraiAIVovLQatYpA&s",
    },
    {
      id: 2,
      name: "Golden Coin",
      description: "A rare coin from the Roman Empire.",
      image:
        "https://www.lib.utexas.edu/sites/default/files/2023-02/hummingbird-bowl.jpeg",
    },
    {
      id: 3,
      name: "Vintage Compass",
      description: "A navigation tool from the 18th century.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGi2vxkK7QTM4mD8KE_Bo1Ud-sH6Rfnr0X414duxawgsZ8PPSc1L1zgVajmILAA4ZStk&usqp=CAU",
    },
  ];
  return (
    <section className="bg-DeepSeaGreen mb-20 py-12">
      <div className="container mx-auto px-6 text-center">
      <div className="text-center mb-5">
                    <motion.h2 data-aos="fade-right" animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
                    transition={{duration:2, repeat:Infinity}}
                    
                    className="text-5xl text-TealBlueGreen font-semibold text-center flex items-center gap-5 justify-center">Our Upcoming Artifacts Collection</motion.h2>
                    
                  </div>
        <p data-aos="fade-left" className="text-LightGray mb-20 w-[65%] mx-auto">
          Explore a fascinating collection of artifacts from different eras of history, each telling a unique story of cultures, civilizations, and events that shaped the world. From ancient tools and weapons to intricate jewelry and architectural remains, these relics offer a glimpse into the lives of people who lived centuries ago. Each artifact, carefully preserved, provides a window into the past, revealing the creativity, craftsmanship, and ingenuity that has been passed down through generations. Discover the timeless beauty and historical significance of these objects, which continue to inspire awe and admiration today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <div data-aos="zoom-in"
              key={artifact.id}
              className="relative bg-TealBlueGreen shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:!scale-105 hover:shadow-2xl "
            >
              <div className="relative group">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-semibold mb-2">
                    {artifact.name}
                  </p>
                  <p className="text-gray-300 text-sm">Click to explore more</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-DeepSeaGreen">
                  {artifact.name}
                </h3>
                <p className="text-LightGray mt-2">{artifact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
