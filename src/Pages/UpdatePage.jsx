
import Lottie from "react-lottie";
import lottieFile from '../assets/Animation - 1734166572857.json'
import { IoLocationOutline } from "react-icons/io5";
import { LuClipboardType } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { GiAncientRuins } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosHook";
export default function UpdatePage() {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth();
  const {id} = useParams();
  const navigate = useNavigate();
  const [data,setData] = useState({});
  const {_id,artifact_name,artifact_image,artifact_type,historical_context,created_at,discovered_at,discovered_by,like_count,dislike_count,present_location,artifact_adder} = data;
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axiosSecure.get(`/allArtifacts/${id}`);
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData(); 
}, [id]); 

  const options = {
    animationData: lottieFile,
    loop: true
  };
  const handleUpdateArtifacts = (e)=>{
    e.preventDefault();
    const artifact_added_name = e.target.name.value;
    const artifact_added_email = e.target.email.value;
    const artifact_name = e.target.artifact_name.value;
    const artifact_image = e.target.artifact_image.value;
    const historical_context = e.target.historical_context.value;
    const artifact_type = e.target.artifact_type.value;
    const created_at = e.target.created_at.value;
    const discovered_at = e.target.discovered_at.value;
    const discovered_by = e.target.discovered_by.value;
    const present_location = e.target.present_location.value;
     
    const artifact_adder = {
      artifact_added_name , artifact_added_email,artifact_added_image : user.photoURL,artifact_added_date : new Date ().toISOString().split('T')[0]
    }
  const allData = {
    artifact_name,artifact_image,artifact_type,historical_context,created_at,discovered_at,discovered_by,like_count : like_count,dislike_count : dislike_count,present_location,artifact_adder
    
  }
  axiosSecure.put(`/updateArtifacts/${id}`,allData)
  .then(res => {
    if(res.data.matchedCount){
                        Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
          navigate('/myArtifacts')

  })

  }
     useEffect(() => {
    document.title = "LiQuest || Update Page";
  }, []);
  return (
    <div className="bgStyle">
      <div className="bgLinear">
        <div className="container w-11/12 mx-auto overflow-hidden ">
    
        <div className="lg:w-[70%]  mx-auto bg-white lg:flex items-center p-10 my-20 gap-10 rounded-xl shadow-xl relative z-20">

        <div className="flex-1 mx-auto bg-transparent">
          <div>
            <h3 className="text-4xl font-semibold mb-8">Contribute Your Artifact</h3>
          </div>
       <form onSubmit={handleUpdateArtifacts}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Name</span>
         </div>
         <div className="input-style">
          <BsPersonGear className="text-TealBlueGreen"/>
         <input type="text" name="name" placeholder="Enter Your Name" className="input input-field" value={user?.displayName} readOnly  required/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Email</span>
         </div>
            <div className="input-style">
          <MdOutlineAttachEmail className="text-TealBlueGreen"/>
         <input type="email" name="email" placeholder="Enter Your Email" className="input input-field" value={user?.email} readOnly required/>
         </div>
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Artifact Name</span>
         </div>
         <div className="input-style">
          <GiAncientRuins className='text-TealBlueGreen'/>
         <input type="text" name="artifact_name" placeholder="Artifact Name" className="input input-field" defaultValue={artifact_name} required/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Artifact Image</span>
         </div>
            <div className="input-style">
          <IoImageOutline className="text-TealBlueGreen"/>
         <input type="url" name="artifact_image" placeholder="Artifact Image" className="input input-field" defaultValue={artifact_image} required/>
         </div>
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Historical Context</span>
         </div>
            <div className="input-style">
          <LuClipboardType className="text-TealBlueGreen"/>
         <input type="text" name="historical_context" placeholder="Historical Context" className="input input-field" defaultValue={historical_context} required/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Artifact Type</span>
         </div>
          {
            data?.artifact_type && <select name="artifact_type" className="select select-bordered w-full input-style" defaultValue={artifact_type} required>
           <option selected>Artifact Type</option>
           <option>Tools & Implements</option>
           <option>Weapons</option>
           <option>Jewelry</option>
           <option>Architectural Remains</option>
           <option>Maps & Atlases</option>
           <option>Clothing & Textiles</option>
           <option>Instruments</option>
           <option>Cultural Artifacts</option>
           <option>Human Remains</option>
         </select>
          }
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Created At</span>
         </div>
           <div className="input-style">
          <MdDateRange className="text-TealBlueGreen"/>
         <input type="text" name="created_at"  placeholder="Created At" className="input input-field" defaultValue={created_at} required/>
         </div>
         </label>
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Discovered At</span>
         </div>
           <div className="input-style">
          <MdDateRange className="text-TealBlueGreen"/>
         <input type="text" name="discovered_at"  placeholder="Discovered At" className="input input-field" defaultValue={discovered_at} required/>
         </div>
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Discovered By</span>
         </div>
           <div className="input-style">
          <BsPersonGear className="text-TealBlueGreen"/>
         <input type="text" name="discovered_by"  placeholder="Discovered By" className="input input-field" defaultValue={discovered_by} required/>
         </div>
         </label>
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Present Location</span>
         </div>
           <div className="input-style">
        <IoLocationOutline className="text-TealBlueGreen"/>
         <input type="text" name="present_location"  placeholder="Present Location" className="input input-field" defaultValue={present_location} required/>
         </div>
         </label>
        </div>  
   <div>
    <button className="fromBtn">Update Artifact</button>
   </div>
       </form>
        </div>
       <div className="h-full w-full absolute top-0 left-0 z-[-1]">
        <Lottie options={options} loop={true}></Lottie>
        </div>
        </div>
      
        
        </div>
      </div>
    </div>
  )
}
