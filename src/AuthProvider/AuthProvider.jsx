import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "../AllContext/AuthContext";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export default function AuthProvider({children}) {
  const provider = new GoogleAuthProvider();
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  // user creat by using firebase ============================
   const creatUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
   }
  //  user login by using firebase ============================
  const userLogIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  // set current user =================================
 useEffect(()=>{
  const handleUser = onAuthStateChanged (auth, currentUser =>{
    setUser(currentUser);
    if(currentUser?.email){
      const email = {email:currentUser?.email}
      axios.post('http://localhost:5000/jwt',email,{withCredentials:true})
      .then(res =>console.log(res.data))
    }
    else{
      axios.get('http://localhost:5000/removeToken',{withCredentials:true})
      .then(res=>console.log(res.data))
    }
      setLoading(false);
    })
    return ()=>{
      handleUser();
    }
  
 },[]);
//  update profile ===========================
const userUpdateProfile = (name,photoURL)=>{
  return updateProfile(auth.currentUser,{
    displayName:name,photoURL:photoURL
  })
}
// handle sign out by firebase =========================
const signOutUser = ()=>{
  setLoading(true)
 signOut(auth)
 .then(res =>{
  console.log(res);
 })
 .catch(err =>{
  console.log(err)
 })
  
}
// google sign in by using firebase =====================
const googleSignIn = ()=>{
  setLoading(true);
  return signInWithPopup(auth,provider);
}
  const authInfo = {
   creatUser,
   userLogIn,
   user,
   signOutUser,
   googleSignIn,
   userUpdateProfile,
   loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
