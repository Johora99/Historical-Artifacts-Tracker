import Artifact from "../components/Artifact";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import useAxiosSecure from "../Hooks/useAxiosHook";


export default function AllArtifactsPage() {
  const axiosSecure = useAxiosSecure();
  const [allArtifacts,setAllArtifacts] = useState([]);
  const [search,setSearch] = useState('');
  useEffect( ()=>{
   axiosSecure.get(`/allArtifacts?search=${search}`)
    .then(res =>setAllArtifacts(res.data))
  },[search])
     useEffect(() => {
    document.title = "LiQuest || All Artifacts";
  }, []);
  return (
  <div className="w-full bg-CharcoalGreen py-20">
    <div className="container w-11/12 mx-auto">
      <div className="mb-20">
        <motion.h2 animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
        transition={{duration:2, repeat:Infinity}}
        
        className="text-4xl lg:text-6xl text-white font-semibold text-center mb-5">All Artifacts</motion.h2>
        <p className="lg:w-[65%] mx-auto text-center text-LightGray">Our collection has just been enriched with a fascinating array of newly discovered artifacts. Each piece tells a unique story of human history, from tools that shaped civilizations to cultural treasures that inspire wonder. Explore these recent additions and take a journey through time as we unveil the latest pieces in our archive.</p>
      </div>
        <div className="border-[1px] border-TealBlueGreen rounded-xl col-span-2 flex justify-between w-[50%] mx-auto mb-20">
         <input  onChange={(e)=>setSearch(e.target.value)} value={search} type="search" name="" id="" placeholder="Search" className="bg-transparent pl-5 focus:outline-none"/>
         <button className="bg-TealBlueGreen rounded-r-xl py-2 px-5 text-white text-lg">Search</button>
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
