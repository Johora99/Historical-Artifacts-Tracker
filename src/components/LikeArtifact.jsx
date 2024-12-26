import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function LikeArtifact({likeArtifact}) {
  const {artifacts_Info,artifact_adder} = likeArtifact;
  const {_id,artifact_name,artifact_image,artifact_type,historical_context,created_at,discovered_at,discovered_by,present_location} = artifacts_Info;
  const {artifact_added_name,artifact_added_image,artifact_added_date} =artifacts_Info.artifact_adder;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="zoom-in" className="border-[1px] border-TealBlueGreen border-s-8 rounded-xl text-TealBlueGreen mb-5 shadow-xl">
       <div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-5">
          <img src={artifact_image} alt="" className="w-32 h-28 object-cover"/>
          <div>
            <h4 className="text-xl font-medium">{artifact_name}</h4>
            <p>{artifact_type}</p>
          </div>
          </div>
          <div className="border-r-[2px] border-TealBlueGreen pr-10">
            <p className="flex items-center gap-2"><RiCompassDiscoverLine /> Discovered By : {discovered_by}</p>
            <p className="flex items-center gap-2"><IoLocationOutline />Present Location : {present_location}</p>
          </div>
          <div className="flex items-center gap-5">
            <img src={artifact_added_image} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium">{artifact_added_name}</p>
              <p>{artifact_added_date}</p>
            </div>
          </div>
            <div className="ml-auto p-10">
              <Link to={`/artifactsDetails/${_id}`} className="border-[1px] border-TealBlueGreen py-2 px-5 hover:bg-TealBlueGreen hover:text-white transition-all duration-300">Go Details</Link>
            </div>
        </div>
       </div>
    </div>
  )
}
