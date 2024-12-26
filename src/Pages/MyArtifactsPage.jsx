import { FiDelete } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { motion } from "motion/react"
import starImg from '../assets/icons8-star-64.png'
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosHook";
import AOS from "aos";
import "aos/dist/aos.css";
export default function MyArtifactsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const axiosSecure = useAxiosSecure()
  const {user} = useAuth();
  const [myArtifacts,setMyArtifacts] = useState([]);
  useEffect(()=>{
    const loadedMyArtifacts = async ()=>{
    await axiosSecure.get(`/allArtifacts?email=${user?.email}`)
      .then(res =>setMyArtifacts(res.data))
    }
    loadedMyArtifacts();
  },[user?.email]);

 const handleDeleteArtifacts = async (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     axiosSecure.delete(`/myArtifacts/${id}`)
      .then((res) => {
        console.log(res.data)
        if(res.data.acknowledged){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
      const remainingApplications = myArtifacts.filter(myArtifact => myArtifact._id !== id);
      setMyArtifacts(remainingApplications)
  }
});
 }
   useEffect(() => {
    document.title = "LiQuest || My Artifacts";
  }, []);
  return (
    <div className="overflow-x-auto py-20 bg-CharcoalGreen ">
      <div className="text-center mb-20 container w-11/12 mx-auto">
                    <motion.h2 data-aos="zoom-in" animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
                    transition={{duration:2, repeat:Infinity}}
                    
                    className="text-4xl lg:text-6xl text-TealBlueGreen font-semibold text-center mb-5 flex items-center gap-5 justify-center"><img src={starImg} alt="" /> My Posted Artifacts <img src={starImg} alt="" /></motion.h2>
                    <div className="w-[50%] mx-auto border-b-[3px] border-TealBlueGreen"></div>
                  </div>
                  <div className="container w-11/12 mx-auto mb-10">
        <h3 className="text-lg font-medium"><span className="text-TealBlueGreen">My Posted Artifacts :</span> <span className="text-TealBlueGreen bg-TealBlueGreen bg-opacity-[0.3] py-1 px-5 w-fit rounded-full">{myArtifacts.length} Artifacts</span></h3>
      </div>
      <table className="table text-center container w-11/12 mx-auto">
        {/* head */}
        <thead className="bg-TealBlueGreen">
          <tr className="border-[1px] border-TealBlueGreen *:text-white  *:text-lg *:font-medium">
            <th></th>
            <th>Artifact Name</th>
            <th>Artifact Type</th>
            <th>Discovered By</th>
            <th>Present Location</th>
            <th>Created & Discoverd</th>
            <th></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {
    myArtifacts.length > 0 ? (
      myArtifacts.map((myArtifact, index) => (
        <tr 
          className="border-[1px] border-TealBlueGreen *:text-TealBlueGreen hover:bg-TealBlueGreen hover:bg-opacity-[0.5] *:hover:text-white group:" 
          key={myArtifact._id}
        >
          <th>{index + 1}</th>
          <td>{myArtifact.artifact_name}</td>
          <td>{myArtifact.artifact_type}</td>
          <td>{myArtifact.discovered_by}</td>
          <td>{myArtifact.present_location}</td>
          <td>{myArtifact.created_at} - {myArtifact.discovered_at}</td>
          <td>
            <Link className="text-TealBlueGreen hover:underline hover:decoration-TealBlueGreen"></Link>
          </td>
          <td className="flex items-center gap-5">
            <FiDelete 
              onClick={() => handleDeleteArtifacts(myArtifact._id)} 
              className="text-TealBlueGreen text-lg"
            />
            <Link to={`/updateArtifacts/${myArtifact._id}`}>
              <FaRegFileAlt className="text-TealBlueGreen text-lg" />
            </Link>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="8" className="text-center py-4 text-LightGray">
          No artifacts available. Add some artifacts to see them here!
        </td>
      </tr>
    )
  }
</tbody>

      </table>
    </div>
  )
}
