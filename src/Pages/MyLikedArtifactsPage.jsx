import { motion } from "motion/react"
import starImg from '../assets/icons8-star-64.png'
import useAuth from "../Hooks/useAuth"
import { useEffect, useState } from "react";
import LikeArtifact from "../components/LikeArtifact";
import useAxiosSecure from "../Hooks/useAxiosHook";
export default function MyLikedArtifactsPage() {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth();
  const [likeArtifacts,setLikeArtifacts] = useState([]);
  useEffect(()=>{
    const handleLikeArtifacts = async()=>{
    await axiosSecure.get(`/like?email=${user?.email}`)
    .then(res=>setLikeArtifacts(res.data))
    }
    handleLikeArtifacts();
  },[user?.email])
  return (
      <div className="overflow-x-auto py-20 bg-CharcoalGreen">
      <div className="text-center mb-20">
                    <motion.h2 animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
                    transition={{duration:2, repeat:Infinity}}
                    
                    className="text-6xl text-white font-semibold text-center mb-5 flex items-center gap-5 justify-center"><img src={starImg} alt="" /> My Liked Artifacts <img src={starImg} alt="" /></motion.h2>
                    <div className="w-[50%] mx-auto border-b-[3px] border-TealBlueGreen"></div>
                  </div>
                  <div className="container w-11/12 mx-auto mb-10">
        <h3 className="text-lg font-medium"><span className="text-TealBlueGreen">My Liked Artifacts :</span> <span className="text-TealBlueGreen bg-TealBlueGreen bg-opacity-[0.3] py-1 px-5 w-fit rounded-full">{likeArtifacts.length} Artifacts</span></h3>
      </div>
        <div className="container w-11/12 mx-auto">
          {
            likeArtifacts?.map(likeArtifact =><LikeArtifact key={likeArtifact._id} likeArtifact={likeArtifact}></LikeArtifact>)
          }
        </div>
    </div>
  )
}
