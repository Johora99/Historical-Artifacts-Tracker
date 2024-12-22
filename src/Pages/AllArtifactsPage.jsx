import { useLoaderData } from "react-router-dom"
import Artifact from "../components/Artifact";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react"


export default function AllArtifactsPage() {
  const [allArtifacts,setAllArtifacts] = useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allArtifacts`)
    .then(res =>setAllArtifacts(res.data))
  },[])
  return (
  <div className="w-full bg-TealBlueGreen bg-opacity-[0.1] py-20">
    <div className="container w-11/12 mx-auto">
      <div className="mb-20">
        <motion.h2 animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
        transition={{duration:2, repeat:Infinity}}
        
        className="text-6xl text-white font-semibold text-center mb-5">All Artifacts</motion.h2>
        <p className="lg:w-[65%] mx-auto text-center text-DeepSeaGreen">Our collection has just been enriched with a fascinating array of newly discovered artifacts. Each piece tells a unique story of human history, from tools that shaped civilizations to cultural treasures that inspire wonder. Explore these recent additions and take a journey through time as we unveil the latest pieces in our archive.</p>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {
        allArtifacts.map(artifact =><Artifact key={artifact._id} artifact={artifact}></Artifact>)
      }
    </div>
    </div>
  </div>
  )
}
