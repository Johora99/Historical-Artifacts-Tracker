import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from '../assets/icons8-google-48.png'
import useAuth from "../Hooks/useAuth";


export default function GoogleSignIn() {
  const navigator = useNavigate();
  const location = useLocation();
  const {googleSignIn} = useAuth();
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(res =>{
    if(location.state?.from){
          navigator(location.state.from)
        }else{
          navigator('/')
        }
    })
    .catch(err =>{
      console.log(err)
    })
  }
  return (
    <div>
      <button onClick={(handleGoogleSignIn)} className="googleBtn mx-auto">  
      <img src={googleIcon} alt="" className="w-8 h-8"/> 
      <span className="text-lg font-medium">Log In With Google</span>
      </button>
    </div>
  )
}
