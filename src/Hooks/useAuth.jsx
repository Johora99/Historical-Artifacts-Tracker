import { useContext } from "react";
import AuthContext from "../AllContext/AuthContext";


const useAuth = ()=>{
  const authContext = useContext(AuthContext);
  return authContext;
}
export default useAuth;