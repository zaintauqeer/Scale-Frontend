import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className='relative isolate bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat m-8 px-12 py-14 rounded-[20px]'>
            <div className='absolute -z-10 inset-0 bg-black/50 rounded-[20px]'></div>
            <div className='text-white pt-96 w-1/2 '>
                <h1 className='text-[64px] leading-16 font-bold'>
                    Get Bulk Prices. <br /> Without Bulk Orders.
                </h1>
                <p className='text-2xl pr-32 mt-8'>Join construction material group deals through WhatsApp in just a few taps.</p>
                <div className='mt-12'>
                    <Link href='/deals' className="bg-[#F15625] text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-[20px] font-['Outfit-SemiBold'] border border-[#F15625]">View live deals</Link>
                    <Link href='/deals' className=" text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-[20px] font-['Outfit-SemiBold'] border border-white ml-5">Order via whatsapp</Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
