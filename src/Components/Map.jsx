import React from 'react'
import map from '../assets/world.svg'
export default function Map() {
  return (
    <div className='w-[500px] h-[400px] bg-[#171F2F] flex flex-col rounded-[15px]'>
        <div className='text-left ml-5 mt-5 '>
            <h2 className='text-white text-2xl font-semibold'>Customer Demographic</h2>
            <p className='text-[#8CA29A] font-semibold'>Number of customer based on country</p>
        </div>

        <div className='w-full h-[200px] mt-6 flex justify-center items-centerbg-[#101828] '>
            <img src={map} alt="Map" />
        </div>
    </div>
  )
}
