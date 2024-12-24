import CountUp from 'react-countup';
import Img1 from '../assets/count1.png'
import Img2 from '../assets/count2.png'
import Img3 from '../assets/count3.png'
import Img4 from '../assets/count4.png'
export default function Counter() {
  return (
    <div className='w-full bg-DeepSeaGreen py-10'>
      <div className='container w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 '>
   
       <div className='bg-CharcoalGreen p-5 shadow-lg text-center text-white text-xl font-medium'>
        <CountUp start={0} end={15000} delay={0}>
  {({ countUpRef }) => (
    <div>
      <img src={Img1} alt="" className='w-14 shadow-xl mx-auto mb-3'/>
      <p className='text-2xl mb-2'>Members</p>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5 shadow-lg text-center text-white text-xl font-medium'>
        <CountUp start={0} end={100} delay={0}>
  {({ countUpRef }) => (
    <div>
      <img src={Img2} alt="" className='w-14 shadow-xl mx-auto mb-3'/>
      <p className='text-2xl mb-2'>Artifacts</p>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5 shadow-lg text-center text-white text-xl font-medium'>
        <CountUp start={0} end={16} delay={0}>
  {({ countUpRef }) => (
    <div>
      <img src={Img3} alt="" className='w-14 shadow-xl mx-auto mb-3'/>
      <p className='text-2xl mb-2'>Awards</p>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5  shadow-lg text-center text-white text-xl font-medium'>
        <CountUp start={0} end={20500} delay={0}>
  {({ countUpRef }) => (
    <div className=''>

      <img src={Img4} alt="" className='w-14 shadow-xl  mx-auto mb-3'/>
    <p className='text-2xl mb-2'>ViSitors</p>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
      </div>
</div>
  )
}
