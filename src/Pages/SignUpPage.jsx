import { FaRegUserCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Lottie from "react-lottie";
import lottieFile from '../assets/Animation - 1734166572857.json'
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SignUpPage() {
     const {creatUser,userUpdateProfile} = useAuth();
     const navigator = useNavigate();
     const [passwordError,setPasswordError] = useState('');
     const [error,setError] = useState('');
     const [checkError,setCheckError] = useState('')
   const options = {
    animationData: lottieFile,
    loop: true
  };
  const handleSignUp = (e)=>{
    e.preventDefault();
    setPasswordError('');
    setError('');
    setCheckError('');
    const first_Name = e.target.first_Name.value;
    const last_Name = e.target.last_Name.value;
    const user_Name = e.target.user_Name.value;
    const email = e.target.email.value;
    const Photo_URL = e.target.Photo_URL.value;
    const password = e.target.password.value;
    const checkBox = e.target.checkBox.checked;
    if(password.length < 6){
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } 
    if(!/[A-Z]/.test(password)){
      setPasswordError('Password must contain at least one uppercase letter.');
      return;
    }
    if(!/[a-z]/.test(password)){
     setPasswordError('Password must contain at least one lowercase letter.');
     return;
    }
    if(!/\d/.test(password)){
     setPasswordError('Password must contain at least one number.');
     return;
    }
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
      setPasswordError('Password must contain at least one special character.');
      return;
    }
    if(!checkBox){
      setCheckError('Accept Our Terms and Policy.');
      return;
    }

    creatUser(email,password)
    .then(res => {
      userUpdateProfile(first_Name + " " + last_Name , Photo_URL)
      .then(res => {
       
      })
      .catch(err =>{
        console.log(err)
      })
      console.log(res)
      navigator('/');
    })
    .catch(err =>{
      setError(err)
    })
  }
     useEffect(() => {
    document.title = "LiQuest || Sign Up Page";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bgStyle">
      <div className="bgLinear">
        <div className="container w-11/12 mx-auto overflow-hidden ">
    
        <div data-aos="zoom-in" className="lg:w-[70%]  mx-auto bg-white lg:flex items-center p-10 my-20 gap-10 rounded-xl shadow-xl relative z-20">

        <div className="flex-1 mx-auto bg-transparent">
          <div>
            <h3 className="text-4xl font-semibold mb-8">Your Journey Starts Here</h3>
          </div>
       <form onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">First Name</span>
         </div>
         <div className="input-style">
          <FaRegUserCircle className="text-TealBlueGreen"/>
         <input type="text" name="first_Name" placeholder="Enter Your First Name" className="input input-field" />
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Last Name</span>
         </div>
            <div className="input-style">
          <FaRegUserCircle className="text-TealBlueGreen"/>
         <input type="text" name="last_Name" placeholder="Enter Your Last Name" className="input input-field" />
         </div>
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">User Name</span>
         </div>
            <div className="input-style">
          <FaRegUserCircle className="text-TealBlueGreen"/>
         <input type="text" name="user_Name" placeholder="Enter Your User Name" className="input input-field" />
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Email</span>
         </div>
            <div className="input-style">
          <TfiEmail className="text-TealBlueGreen"/>
         <input type="email" name="email" placeholder="Enter your Email" className="input input-field" />
         </div>
         </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3">
         <label className="form-control w-full ">
         <div className="label">
         <span className="label-text text-lg font-medium">Photo Url</span>
         </div>
           <div className="input-style">
          <MdOutlinePhotoCamera className="text-TealBlueGreen"/>
         <input type="url" name="Photo_URL"  placeholder="Enter Your Photo Url" className="input input-field" />
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Password</span>
         </div>
            <div className="input-style">
              <RiLockPasswordLine className="text-TealBlueGreen"/>
         <input type="text" name="password" placeholder="Enter Your Password" className="input input-field" />
         </div>
         </label>
        </div>
        <div>
          {
            passwordError && <p className="text-base text-red-500 my-2">{passwordError}</p>
          }
        </div>
    <div className="flex items-center gap-2">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" name="checkBox" className="peer hidden"/>
    <span className="checkBox">✓</span>
    <span className="text-lg font-medium">Here, I will agree to company terms & conditions.</span>
    </label>
   </div>
   <div>
    {
      checkError && <p className="text-base text-red-500 mt-1">{checkError}</p>
    }
   </div>
   <div>
    <button className="fromBtn">Sign Up</button>
   </div>
       </form>
       <div>
        {
          error && <p className='text-base text-red-500 my-2'>Already Have An Account !</p>
        }
       </div>
       <div>
        <p className="text-lg font-medium mt-5 text-center">Already have an account? <Link to='/logIn' className="text-TealBlueGreen hover:underline hover:underline-offset-2 hover:decoration-TealBlueGreen">Login</Link> Here</p>
       </div>
       <div>
         <GoogleSignIn></GoogleSignIn>
       </div>
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
