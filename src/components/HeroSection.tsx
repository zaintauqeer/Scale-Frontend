import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className='relative isolate bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat lg:m-8 m-4 lg:px-12 px-3 py-14 rounded-[20px]'>
            <div className='absolute -z-10 inset-0 bg-black/50 rounded-[20px]'></div>
            <div className='text-white lg:pt-96 pt-48 lg:w-1/2 '>
                <h1 className='lg:text-[64px] text-3xl lg:leading-16 font-bold'>
                    Get Bulk Prices. <br /> Without Bulk Orders.
                </h1>
                <p className='lg:text-2xl lg:pr-32 mt-8'>Join construction material group deals through WhatsApp in just a few taps.</p>
                <div className='lg:mt-12 mt-8'>
                <Link href='/deals' className="bg-[#F15625] text-white lg:px-11 px-8 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-[#F15625]">View live deals</Link>
                <Link href='/deals' className=" text-white lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-white ml-5">Order via whatsapp</Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
