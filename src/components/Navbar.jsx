import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import logo from '../assets/logo.png'
import useAuth from "../Hooks/useAuth";
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Navbar() {
  const {user,signOutUser} = useAuth();
  const [navIcon,setNavIcon] = useState(false);
  const [userLink,setUserLink] = useState(false);
  const handleSignOut = ()=>{
    signOutUser();
    
  }
  return (
    <div className="w-full bg-CharcoalGreen sticky top-0 z-50 backdrop-blur-2xl">
      <div className="container w-11/12 mx-auto">
        <nav className="text-white flex items-center justify-between py-8">
          <div className="flex items-center">
            <img src={logo} alt="" />
          <h2 className="text-2xl lg:text-4xl font-bold [text-shadow:_7px_5px_9px_rgb(20,133,135)]"><span className="text-TealBlueGreen">Li</span>Quest</h2>
          </div>
          <div className="hidden lg:block">
          <ul className="flex items-center gap-10 *:text-lg *:font-normal">
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "activeNav" : "navLink")}>Home</NavLink></li>
            <li><NavLink to='/allArtifacts' className={({ isActive }) => (isActive ? "activeNav" : "navLink")}>All Artifacts</NavLink></li>

            {
              user && <>
                 <li><NavLink to='/addArtifacts' className={({ isActive }) => (isActive ? "activeNav" : "navLink")}>Add Artifacts</NavLink></li>
            <li className="relative group z-[20]"><NavLink className='navLink'>
              <p className="flex items-center gap-2">  My Profile<FaChevronDown /></p>
              <ul className="absolute -top-[200px] left-0 p-5 bg-slate-700 w-48  group-hover:block group-hover:top-[180%] transition-all duration-1000 ease-in-out">
               <li><NavLink to='/myArtifacts'>My Artifacts</NavLink></li>
               <li><NavLink to='/myLikedArtifacts'>Liked Artifacts</NavLink></li>
              </ul>
              </NavLink></li>
              </>
            }



          
          </ul>
          </div>
          <div className="hidden lg:block">
            {
              user ? <div className="flex items-center gap-5 *:text-lg *:text-TealBlueGreen">
                <div>
                <img
            src={user?.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full cursor-pointer"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content={user?.displayName}
          />
          <ReactTooltip id="profile-tooltip" place="left-end" effect="solid" />
                </div>
                <Link onClick={handleSignOut} to='/logIn' className="navBtn btnBland">
            <FaRegCircleUser className="z-[20]"/>
            <button className="z-[20]">Sign Out</button>
            </Link>
              </div>
              :
          <div className="flex items-center gap-5 *:text-lg *:text-TealBlueGreen">
            <Link to='/logIn' className="navBtn btnBland">
            <FaRegCircleUser className="z-[20]"/>
            <button className="z-[20]">Sign In</button>
            </Link>
            <Link to='/signUp' className="navBtn btnBland">
            <MdOutlinePersonAddAlt  className="z-[20]"/>
            <button className="z-[20]">Sign Up</button>
            </Link>
          </div>
            }
          </div>

          <div className="lg:hidden">
            <div onClick={()=>setNavIcon(!navIcon)} className="relative z-[20]">
            {
              navIcon ? <ImCross /> : <GiHamburgerMenu className="text-xl"/> 
            }
            {
            <div onClick={(e) => e.stopPropagation()} className={`absolute transition-all duration-1000 bg-TealBlueGreen p-5 w-44 ${navIcon ? 'top-10' : '-top-96'}  right-0
            `} >
              <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allArtifacts'>All Artifacts</NavLink></li>
            <li><NavLink to='/addArtifacts'>Add Artifacts</NavLink></li>
            <li className="relative group">
              <p onClick={(e)=>{e.stopPropagation();setUserLink(!userLink)}} className="flex items-center gap-2">  My Profile <FaChevronDown /></p>
              <ul className={`${userLink ? 'block' : 'hidden'}`}>
               <li><NavLink to='/myArtifacts'>My Artifacts</NavLink></li>
               <li><NavLink to='/myLikedArtifacts'>Liked Artifacts</NavLink></li>
              </ul>
              </li>
                {
                  user ? 
              <div className=" *:text-white hover:*:text-TealBlueGreen">
              <Link onClick={handleSignOut} to='/logIn' className="navBtn border-white py-1 btnBland my-2">
            <FaRegCircleUser className="z-[20]"/>
            <button className="z-[20]">Sign Out</button>
            </Link>
              </div>
              :      
              <div className=" *:text-white hover:*:text-TealBlueGreen">
            <Link to='/logIn' className="navBtn border-white py-1 btnBland my-2">
            <FaRegCircleUser className="z-[20]"/>
            <button className="z-[20]">Sign In</button>
            </Link>
            <Link  to='/signUp' className="navBtn border-white py-1 btnBland">
            <MdOutlinePersonAddAlt  className="z-[20]"/>
            <button className="z-[20]">Sign Up</button>
            </Link>
          </div>
                }
              </ul>
            </div>
            }
          
            </div>
          </div>




    
        </nav>
      </div>
      
    </div>
  )
}
