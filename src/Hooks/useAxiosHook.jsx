import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../AllContext/AuthContext";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
  baseURL:import.meta.env.VITE_API_URL,
  withCredentials:true,
})

const useAxiosSecure = ()=>{
  const navigate = useNavigate();
  const {signOutUser} = useContext(AuthContext);
  useEffect(()=>{
    axiosSecure.interceptors.response.use(
    res =>{
      return res;
    },
    async error =>{
      console.log('')
      if(error.response.status === 401 || error.response.status === 403 ){
      signOutUser();
      navigate('/logIn')
      }
    }
    
  )
  },[signOutUser,navigate]);
  return axiosSecure;
}
export default useAxiosSecure;