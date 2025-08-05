import React from 'react'
import MyGaugeChart from './MyGaugeChart'

export default function Target() {
 
  return (
    <div className='  p-0 m-0 w-[420px] h-[580px] bg-[#171F2F] rounded-[15px]  '>
<div className='flex flex-col flex-wrap bg-[#171F2F] p-0 m-0 w-full h-[420px] rounded-[15px]'>
 <div className='text-left mt-7 flex flex-wrap flex-col gap-3 ml-5'>
            <h2 className='text-white text-2xl font-semibold'>Monthly Target</h2>
            <p className='text-[#75A2A6]'>Target you’ve set for each month</p>
        </div>

        
      <div className='w-full h-[220px] flex flex-col justify-center items-center '>

           
            <MyGaugeChart 
               
                
            />
        </div>
        <div className='text-center  flex flex-wrap flex-col  ml-5' >
          <p className='text-[#75A2A6] '>You earn $3287 today, it's higher than last month. 
           </p>
           <p className='text-[#75A2A6]'> Keep up your good work!</p>
        </div>
</div>
<div className = 'w-full h-[160px] rounded-br-[15px] rounded-bl-[15px] bg-[#384d79] p-0 m-0 grid grid-cols-[1fr_1fr_1fr] text-center   '>
<div className='ml-3 mt-6'>
<p className='text-[#75A2A6] text-1xl'>Target</p>
<p className='text-white text-2xl'>$20k</p>
</div>

<div className='ml-3 mt-6'>
<p className='text-[#75A2A6] text-1xl'>Revenue</p>
<p className='text-white text-2xl'>$20k</p>
</div>

<div className='ml-3 mt-6'>
<p className='text-[#75A2A6] text-1xl'>Today</p>
<p className='text-white text-2xl'>$20k</p>
</div>

</div>
       
    </div>
  )
}