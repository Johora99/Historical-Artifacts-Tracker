import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Artifact from "./Artifact";
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Artifacts() {
  const [artifacts,setArtifacts] = useState([]);
  useEffect(()=>{
   axios.get(`${import.meta.env.VITE_API_URL}/latestArtifacts`)
    .then(res =>setArtifacts(res.data))
  },[])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container w-11/12 mx-auto mt-32">
          <div className="mb-20">
        <motion.h1 data-aos="fade-right" animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
        transition={{duration:2, repeat:Infinity}}
        
        className="text-6xl text-white font-semibold text-center mb-5">Recent<motion.span animate={{color:['#fff','rgb(20, 133, 135)','#fff']}} 
        transition={{duration:2,repeat:Infinity}}
        className="text-TealBlueGreen"> Added </motion.span>Artifacts</motion.h1>
        <p data-aos="fade-left" className="text-center text-LightGray lg:w-[65%] mx-auto">Our collection has just been enriched with a fascinating array of newly discovered artifacts. Each piece tells a unique story of human history, from tools that shaped civilizations to cultural treasures that inspire wonder. Explore these recent additions and take a journey through time as we unveil the latest pieces in our archive.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {
          artifacts.map(artifact =><Artifact key={artifact._id} artifact={artifact}></Artifact>)
        }
      </div>
      <div className="mt-20 pb-20">
        <Link to='/allArtifacts' className="navBtn btnBland w-fit mx-auto text-TealBlueGreen font-medium px-10 text-lg py-3">
        <button className="z-20">See All Artifacts</button>
        </Link>
      </div>
    </div>
  )
}
