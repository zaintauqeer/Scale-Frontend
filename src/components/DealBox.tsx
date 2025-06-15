import React from 'react'

const DealBox = () => {
  return (
    <div className='mt-10 rounded-sm bg-[#F2F2F2] border border-[#0000000A] p-5'>
      <div className="bg-white w-full aspect-video flex justify-center items-center">
        <img src="/products/product-1.png" className='max-w-full max-h-full' alt="" />
      </div>
      <div className="mt-9 flex justify-between items-center pb-5 mb-5 border-b border-[#CCCCCC]">
        <h3 className='text-2xl font-[Outfit-Bold]'>Al Qassim Cement</h3>
        <p className='text-[28px] font-[Outfit-Bold] text-[#F25550]'>15,000 SAR</p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <h3 className='text-xl font-[Outfit-Bold] text-[#444444] flex items-center'><img src="/icons/location.svg" alt="" /> Jeddah, SA</h3>
        <p className='text-xl font-[Outfit-Bold] text-[#F25550]'>2 days : 130h : 45m : 23s</p>
      </div>
      <div className="mt-9 flex justify-between items-center pb-5 mb-5 border-b border-[#CCCCCC]">
        <h3 className='text-xl font-[Outfit-Bold]'>Participants</h3>
        <div className='flex items-center'>
          <img src="/participants/user-1.jpg" className='w-[40px] h-[40px] object-cover translate-x-[150%] border-2 border-[#FFFFFF] rounded-full' alt="" />
          <img src="/participants/user-2.jpg" className='w-[40px] h-[40px] object-cover translate-x-full border-2 border-[#FFFFFF] rounded-full' alt="" />
          <img src="/participants/user-3.jpg" className='w-[40px] h-[40px] object-cover translate-x-1/2 border-2 border-[#FFFFFF] rounded-full' alt="" />
          <div className='w-[40px] h-[40px] bg-white rounded-full z-10 flex justify-center items-center text-[#222222] text-sm font-[Outfit-Bold]'>+2</div>
        </div>
      </div>
    </div>
  )
}

export default DealBox