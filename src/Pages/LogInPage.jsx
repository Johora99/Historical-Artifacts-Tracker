import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import Lottie from "react-lottie";
import lottieFile from '../assets/Animation - 1734166572857.json';
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import useAuth from "../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function LogInPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [error,setError] = useState('')
  const {userLogIn,resetPassword} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();


   const handleResetPassword = () => {
    const resetEmail = emailRef.current?.value;
    resetPassword(resetEmail)
    .then(res=>{
      console.log(res);
    })
    .catch(err =>{
      
    })
 }
     const options = {
    animationData: lottieFile,
    loop: true
  };
  const handleLogIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email)
    userLogIn(email,password)
    .then(res =>{
      navigate(location.state || '/');
    })
    .catch(err =>{
      setError(err)
    })
  }
     useEffect(() => {
    document.title = "LiQuest || Login Page";
  }, []);
  return (
      <div className="bgStyle">
      <div className="bgLinear">
        <div className="container w-11/12 mx-auto overflow-hidden ">
    
        <div data-aos="zoom-in" className="lg:w-[45%]  mx-auto bg-white lg:flex items-center p-10 my-20 gap-10 rounded-xl shadow-xl relative z-20">

        <div  className="flex-1 mx-auto bg-transparent">
          <div>
            <h3 className="text-4xl font-semibold mb-8">Welcome Back !</h3>
          </div>
       <form onSubmit={handleLogIn}>
         <label className="form-control w-full">
         <div className="label">
         <span className="label-text text-lg font-medium">Email</span>
         </div>
            <div className="input-style">
          <TfiEmail className="text-TealBlueGreen"/>
         <input type="text" name="email" placeholder="Enter your Email" className="input input-field" ref={emailRef}/>
         </div>
         </label>
         <label className="form-control w-full">
         <div className="label">
          <div className="w-full flex items-center justify-between">
         <span className="label-text text-lg font-medium">Password</span>
         <Link onClick={handleResetPassword} className="label-text text-lg font-medium">Forget Password</Link>
          </div>
         </div>
            <div className="input-style">
              <RiLockPasswordLine className="text-TealBlueGreen"/>
         <input type="text" name="password" placeholder="Enter Your Password" className="input input-field" />
         </div>
         </label>
   <div>
    <button className="fromBtn">Sign In</button>
   </div>
   <div>
    {
      error && <p className="text-red-500 mt-2">Please check your credentials and try again.</p>
    }
   </div>
       </form>
       <div>
        <p className="text-lg font-medium mt-5">Don’t have an account? <Link to='/signUp' className="text-TealBlueGreen hover:underline hover:underline-offset-2 hover:decoration-TealBlueGreen">Sign Up</Link> </p>
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
