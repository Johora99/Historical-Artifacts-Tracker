import { useLoaderData } from "react-router-dom"
import Lottie from "react-lottie";
import lottieFile from '../assets/Animation - 1734166572857.json';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { motion } from "motion/react";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
export default function ArtifactsDetailsPage() {
  const data = useLoaderData();
  const {_id,artifact_name,artifact_image,artifact_type,historical_context,created_at,discovered_at,discovered_by,like_count,dislike_count,present_location,artifact_adder} = data;
 const options = {
    animationData: lottieFile,
    loop: true
  };
  return (
  <div className="bgStyle">
        <div className="container w-11/12 mx-auto overflow-hidden">
            <div className="lg:w-[70%] mx-auto my-20 ">
              <div className="bg-white/10 backdrop-blur-sm border-b-[5px] border-s-[5px] border-TealBlueGreen rounded-tr-[100px] rounded-bl-[100px] p-10 shadow-lg rounded-tl-[10px] rounded-br-[10px]">
              <div className="bg-transparent text-CharcoalGreen">

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                <img src={artifact_adder.artifact_added_image} alt="" className="object-cover w-12 h-12 rounded-full shadow"/>
                  <div className="flex flex-col space-y-1">
			          <p className="font-semibold">{artifact_adder.artifact_added_name}</p>
			          <span className="text-xs dark:text-gray-600">{artifact_adder.artifact_added_date}</span>
		           </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-TealBlueGreen my-5"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="w-full">
                      <img src={artifact_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 rounded-xl shadow-lg" />
                    </div>
                <div className="relative z-20">

                      <div className="mb-5">
                  <motion.h3 animate={{color:['rgb(20, 133, 135)','#000','rgb(20, 133, 135)']}} transition={{duration : 2 ,repeat : Infinity}} className="font-bold text-3xl">{artifact_adder.artifact_added_name}</motion.h3>
                  <p></p>
                </div>
                   <div>
                    <p className="text-lg my-2"><span className="font-semibold">Artifact Type</span> : <span>{artifact_type}</span></p>
                   </div>
                   <div>
                    <p className="text-lg"><span className="font-semibold">Historical Context</span> : <span>{historical_context}</span></p>
                   </div>
                   <div className="flex items-center gap-5 my-2">
                    <div>
                    <p className="text-lg"><span className="font-semibold">Created At</span> : <span>{created_at}</span></p>
                   </div>
                   <div>
                    <p className="text-lg"><span className="font-semibold">Discovered At</span> : <span>{discovered_at}</span></p>
                   </div>
                   </div>
                   <div>
                    <p className="text-lg"><span className="font-semibold">Discovered By</span> : <span>{discovered_by}</span></p>
                   </div>
                   <div>
                    <p className="text-lg my-2"><span className="font-semibold">Present Location</span> : <span>{present_location}</span></p>
                   </div>
                   <div className="flex space-x-2 text-sm mt-5">
                        <button type="button" className="flex items-center p-1 space-x-1.5 bg-DeepSeaGreen rounded-xl text-TealBlueGreen py-1 px-3 border-[2px] shadow-lg border-TealBlueGreen">
                          <BiLike className="text-lg"/>
                          <span>{like_count}</span>
                        </button>
                        <button type="button" className="flex items-center p-1 space-x-1.5 bg-DeepSeaGreen rounded-xl text-TealBlueGreen py-1 px-3 border-[2px] shadow-lg border-TealBlueGreen">
                          <BiDislike className="text-lg"/>
                          <span>{dislike_count}</span>
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
