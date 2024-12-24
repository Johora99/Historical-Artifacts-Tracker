import CountUp from 'react-countup';

export default function Counter() {
  return (
    <div className='w-full bg-DeepSeaGreen mb-20 py-10'>
      <div className='container w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10'>
   
       <div className='bg-CharcoalGreen p-5'>
        <CountUp start={0} end={1000} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5'>
        <CountUp start={0} end={1000} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5'>
        <CountUp start={0} end={1000} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
       <div className='bg-CharcoalGreen p-5'>
        <CountUp start={0} end={1000} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
       </div>
      </div>
</div>
  )
}
