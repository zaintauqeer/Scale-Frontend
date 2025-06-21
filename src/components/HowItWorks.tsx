import Link from 'next/link'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='lg:px-20 px-5 lg:my-24 my-8 mt-8'>
        <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-12 h-0.5 bg-[#F15625]"></div>
              <span className='uppercase text-[#F15625] lg:text-base text-xs font-[Outfit-SemiBold]'>Getting started</span>
            </div>
            <h2 className='lg:text-5xl text-3xl font-[Outfit-Bold] my-5'>How It Works</h2>
            <p className='text-[#00000099] text-xl lg:max-w-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod.</p>
            <div className='mt-10'>
                <Link href='/deals' className="bg-[#F15625] text-white lg:px-11 px-8 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-[#F15625]">View live deals</Link>
                    <Link href='/deals' className=" text-black lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border border-black ms-5">Order via whatsapp</Link>
            </div>
        </div>
        <div className="flex flex-wrap mt-10 items-center">
            <div className="lg:w-1/2 w-full">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center lg:w-[135px] w-24'>
                                <img className='lg:w-[100] w-20 m-auto aspect-square' src="/icons/illus-1.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] lg:text-base text-xs max-w-32'>Browse Ongoing Group Deals</h6>
                            </div>
                            <img src="/icons/arrow.svg" className='lg:rotate-12 rotate-45 origin-left lg:w-28 w-20' alt="" />
                        </div>
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center lg:w-[135px] w-24'>
                                <img  className='lg:w-[100] w-20 m-auto aspect-square' src="/icons/illus-2.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] lg:text-base text-xs max-w-32'>Join the Deal via WhatsApp</h6>
                            </div>
                            <img  className='lg:w-28 w-16' src="/icons/arrow.svg" alt="" />
                        </div>
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center lg:w-[135px] w-24'>
                                <img  className='lg:w-[100] w-20 m-auto aspect-square' src="/icons/illus-3.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] lg:text-base text-xs max-w-32'>Get Delivery When the Deal Closes</h6>
                            </div>
                            <img src="/icons/arrow.svg" className='lg:-rotate-12 -rotate-45 origin-left lg:w-28 w-20' alt="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="/cement-image.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full place-items-center">
                <img src="/products.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks