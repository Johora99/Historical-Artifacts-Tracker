
import bgImg from '../assets/home6-trending-jobs-bg.png'
import Img1 from '../assets/vase-being-excavating.jpg';
export default function BecomeAMember() {
const bgStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundAttachment: 'fixed',
};
  return (
    <div style={bgStyle} className='w-full py-20'>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
          <img src={Img1} alt="" />
        </div>
        <div>
          <h2 className='text-6xl font-semibold text-TealBlueGreen'>Become A Member </h2>
          <ul>
            <li>Unlimited General Ticks</li>
            <li>Free Tickets to Special Artifact Hacks</li>
            <li>Access to a Member Entrance</li>
          </ul>
        </div>
       </div>
    </div>
  )
}
