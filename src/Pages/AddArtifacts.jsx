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
export default function AddArtifacts() {
  const {user} = useAuth();
  const options = {
    animationData: lottieFile,
    loop: true
  };
  const handleAddArtifacts = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
  }
  return (
    <div className="bgStyle">
      <div className="bgLinear">
        <div className="container w-11/12 mx-auto overflow-hidden ">
    
        <div className="lg:w-[70%]  mx-auto bg-white lg:flex items-center p-10 my-20 gap-10 rounded-xl shadow-xl relative z-20">

        <div className="flex-1 mx-auto bg-transparent">
          <div>
            <h3 className="text-4xl font-semibold mb-8">Contribute Your Artifact</h3>
          </div>
       <form onSubmit={handleAddArtifacts}>
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
         <input type="text" name="artifact_name" placeholder="Artifact Name" className="input input-field" required/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Artifact Image</span>
         </div>
            <div className="input-style">
          <IoImageOutline className="text-TealBlueGreen"/>
         <input type="url" name="artifact_image" placeholder="Artifact Image" className="input input-field" required/>
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
         <input type="text" name="historical_context" placeholder="Historical Context" className="input input-field" required/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Artifact Type</span>
         </div>
          <select name="artifact_type" className="select select-bordered w-full input-style" required>
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
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Created At</span>
         </div>
           <div className="input-style">
          <MdDateRange className="text-TealBlueGreen"/>
         <input type="text" name="created_at"  placeholder="Created At" className="input input-field" required/>
         </div>
         </label>
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Discovered At</span>
         </div>
           <div className="input-style">
          <MdDateRange className="text-TealBlueGreen"/>
         <input type="text" name="discovered_at"  placeholder="Discovered At" className="input input-field" required/>
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
         <input type="text" name="discovered_by"  placeholder="Discovered By" className="input input-field" required/>
         </div>
         </label>
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Present Location</span>
         </div>
           <div className="input-style">
        <IoLocationOutline className="text-TealBlueGreen"/>
         <input type="text" name="present_location"  placeholder="Present Location" className="input input-field" required/>
         </div>
         </label>
        </div>  
   <div>
    <button className="fromBtn">Add Artifact</button>
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
