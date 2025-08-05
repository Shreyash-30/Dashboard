import React, { useState } from 'react'

export default function Card({svg, title}) {
 
  return (
    <div className=' p-0 m-0 w-80 h-50 border-1 border-black border-solid ml-5 mt-5 bg-[#171F2F] rounded-[20px]'>
      <div className='flex flex-col flex-wrap items-left ml-5'>
 <div className = ' bg-[#6e96ca] mt-5  w-16 h-16 border-1 border-black border-solid flex items-center justify-center flex-wrap rounded-[15px] mb-3' >
         
              < img src={svg} alt="customer" className='size-10  ' />
        </div>

        <div className='text-[17px] text-[#415580] mb-3'>
             <h2>{title}</h2>
        </div>

     
        <div className='flex flex-row flex-wrap gap-25 mr-5'>
             <h2 className='text-3xl text-white font-bold'>3,782</h2>
             <div className=' mt-3 flex  items-center justify-center flex-wrap bg-[#1da33e] w-20 h-7 border-black border-1 border-solid rounded-[15px]'>
               <h2 className='text-center' >11.09%</h2>
             </div>
            
        </div>
        
           
    
       
       </div>        
    </div>
  )
}
