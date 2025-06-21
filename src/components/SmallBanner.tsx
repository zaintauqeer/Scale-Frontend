import React from 'react'
import Link from 'next/link'

const SmallBanner = () => {
  return (
    <div className='bg-[#1A3D38] lg:py-[117px] lg:px-[103px] px-[37px] py-[45px]'>
        <div className="flex flex-wrap gap-y-14 items-center">
            <div className="lg:w-2/5 w-full">
                <h4 className='lg:text-[40px] text-3xl text-white font-[Outfit-Bold]'>Don’t Miss the Next Deal</h4>
                <p className='text-[#FFFFFFB2] text-xl mt-3'>Group orders are closing fast, join now and start saving on your next delivery.</p>
            </div>
            <div className='lg:w-3/5 w-full flex justify-end'>
                <Link href='/deals' className="bg-[#F15625] text-white px-11 py-5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-[#F15625]">View live deals</Link>
                <Link href='/deals' className=" text-white px-5 py-5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-white ms-5">Order via whatsapp</Link>
            </div>
        </div>
    </div>
  ) 
}

export default SmallBanner