
import { Link } from 'react-router-dom';
import bgImg from '../assets/home6-trending-jobs-bg.png'
import Img1 from '../assets/vase-being-excavating.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function BecomeAMember() {
const bgStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundAttachment: 'fixed',
};
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div style={bgStyle} className='w-full py-20'>
       <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]'>
        <div data-aos="fade-right" className='bg-CharcoalGreen relative group'>
          <img src={Img1} alt="" className='w-full h-[300px] lg:h-[500px] object-cover'/>
        
        </div>
        <div data-aos="fade-left" className='relative group'>
          <div className='p-10'>
          <h2 className='text-4xl lg:text-6xl font-semibold text-TealBlueGreen mb-10'>Become A Member </h2>
          <ul className='*:text-white text-xl lg:*:text-2xl'>
            <li>Unlimited General Ticks</li>
            <li className='my-2'>Free Tickets to Special Artifact Hacks</li>
            <li>Access to a Member Entrance</li>
          </ul>
            <div className=" text-TealBlueGreen hover:text-TealBlueGreen mt-10">
            <Link to='/signUp' className="navBtn border-TealBlueGreen py-2 lg:py-3 px-10 btnBland my-2 w-fit">
            <button className="z-[20] text-lg font-medium">Become A Member</button>
              </Link>
          </div>
                </div>
                  <div className='w-full h-full absolute bg-DeepSeaGreen bg-opacity-[0.5] top-0 left-0 z-20 transition-all duration-500  group-hover:-translate-x-[100%]'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
