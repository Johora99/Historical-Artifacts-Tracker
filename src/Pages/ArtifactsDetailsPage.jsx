import Lottie from "react-lottie";
import lottieFile from '../assets/Animation - 1734166572857.json';
import { motion } from "motion/react";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosHook";
import { Await, useParams } from "react-router-dom";
import { BiDislike } from "react-icons/bi";
export default function ArtifactsDetailsPage() {
  const axiosSecure = useAxiosSecure()
  const {id} = useParams();
  const {user} = useAuth();
  const [likes,setLikes] = useState({});
  const [isLiked, setIsLiked] = useState();
  const [artifact,setArtifact] = useState({});
  const options = {
    animationData: lottieFile,
    loop: true
  };
     useEffect(() => {
    document.title = "LiQuest || Artifact Details";
  }, []);
  useEffect(() => {
  const handle = async () => {
    try {
  
      const response = await axiosSecure.get(`/allArtifacts/byId/${id}`);
      setArtifact(response.data);
    
    } catch (error) {
      console.error('Error fetching artifact data:', error);
    }
  };
  handle();
}, [id]);
useEffect(()=>{
  const handleLikeData = async ()=>{
    
    await axiosSecure.get(`/like?email=${user?.email}`)
    .then(res => {
      setLikes(res.data)
      
    })
  }
  handleLikeData()
},[user?.email])
useEffect(() => {
  if (likes.length > 0) {
    const filter = likes.find((item) => item.artifacts_Info._id === id);
    setIsLiked(filter?.like)
  }
}, [likes]);

const likeData = {
  liked_by: user?.email,
  artifacts_Info: artifact,
  like : true,
};

const handleLike = async () => {
  setIsLiked(!isLiked)
  try {
    await axiosSecure.post(`/like`, likeData)
    .then(res=>{
      if (res.data.message === 'Disliked successfully!') {
      toast.error('Like Removed!');
    } else if(res.data.message === 'Liked successfully!'){
      toast.success('You have liked this artifact!');
    }
    })

    const response = await axiosSecure.get(`/allArtifacts/byId/${id}`);
    setArtifact(response.data); 
  } catch (error) {
    toast.error('You have already liked this artifact!');
  }
};

  return (
  <div className="bgStyle">
         <div className="container w-11/12 mx-auto overflow-hidden">
            <div className="lg:w-[70%] mx-auto my-20 ">
              <div className="bg-white/10 backdrop-blur-sm border-b-[5px] border-s-[5px] border-TealBlueGreen rounded-tr-[100px] rounded-bl-[100px] p-10 shadow-lg rounded-tl-[10px] rounded-br-[10px]">
              <div className="bg-transparent text-CharcoalGreen">

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                <img src={artifact?.artifact_adder?.artifact_added_image} alt="" className="object-cover w-12 h-12 rounded-full shadow"/>
                  <div className="flex flex-col space-y-1">
			          <p className="font-semibold">{artifact?.artifact_adder?.artifact_added_name}</p>
			          <span className="text-xs dark:text-gray-600">{artifact?.artifact_adder?.artifact_added_date}</span>
		           </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-TealBlueGreen my-5"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="w-full">
                      <img src={artifact?.artifact_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 rounded-xl shadow-lg" />
                    </div>
                <div className="relative z-20">

                      <div className="mb-5">
                  <motion.h3 animate={{color:['rgb(20, 133, 135)','#000','rgb(20, 133, 135)']}} transition={{duration : 2 ,repeat : Infinity}} className="font-bold text-3xl">{artifact?.artifact_name}</motion.h3>
                  <p></p>
                </div>
                   <div>
                    <p className="text-lg my-2 ">
                    <span className="font-semibold">Artifact Type :</span><span>{artifact?.artifact_type}</span></p>
                   </div>
                   <div>
                    <p className="text-lg">
                         <span className="font-semibold">Historical Context :</span>
                           <span>{artifact?.historical_context}</span> 
                      </p>
                   </div>
                   <div className="flex items-center gap-5 my-2">
                    <div>
                    <p className="text-lg"><span className="font-semibold">Created At</span> : <span>{artifact?.created_at}</span></p>
                   </div>
                   <div>
                    <p className="text-lg"><span className="font-semibold">Discovered At</span> : <span>{artifact?.discovered_at}</span></p>
                   </div>
                   </div>
                   <div>
                    <p className="text-lg"><span className="font-semibold">Discovered By</span> : <span>{artifact?.discovered_by}</span></p>
                   </div>
                   <div>
                    <p className="text-lg my-2"><span className="font-semibold">Present Location</span> : <span>{artifact?.present_location}</span></p>
                   </div>
                   <div className="flex space-x-2 text-sm mt-5">
                    
                      <button onClick={handleLike} type="button" className="flex items-center p-1 space-x-1.5 bg-DeepSeaGreen rounded-xl text-TealBlueGreen py-1 px-3 border-[2px] shadow-lg border-TealBlueGreen">
                        {
                          isLiked ?   
                            <span className="flex items-center gap-1"><BiDislike  className="text-lg"/>{artifact?.like_count}</span> : <span className="flex items-center gap-1"><BiLike className="text-lg"/>{artifact?.like_count}</span>
                        }
                        
                        </button> 
                          
                    
                      
                      
                      </div>
            <div className="h-full w-full absolute top-0 left-0 z-[-1]">
             <Lottie options={options} loop={true}></Lottie>
            </div>
                </div>
                </div>
              </div>
              </div>
            </div>

      </div>
    </div>
  )
}
