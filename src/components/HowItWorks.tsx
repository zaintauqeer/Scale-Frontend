import Link from 'next/link'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='px-20 my-24'>
        <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-12 h-0.5 bg-[#F15625]"></div>
              <span className='uppercase text-[#F15625] font-[Outfit-SemiBold]'>Getting started</span>
            </div>
            <h2 className='text-5xl font-[Outfit-Bold] my-5'>How It Works</h2>
            <p className='text-[#00000099] text-[20px] max-w-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod.</p>
            <div className='mt-10'>
                <Link href='/deals' className="bg-[#F15625] text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-[20px] font-['Outfit-SemiBold'] border border-[#F15625]">View live deals</Link>
                <Link href='/deals' className=" text-black px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-[20px] font-['Outfit-SemiBold'] border border-black ml-5">Order via whatsapp</Link>
            </div>
        </div>
        <div className="flex mt-10 items-center">
            <div className="w-1/2">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center'>
                                <img src="/icons/illus.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] max-w-32'>Browse Ongoing Group Deals</h6>
                            </div>
                            <img src="/icons/arrow.svg" className='rotate-12 origin-left' alt="" />
                        </div>
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center'>
                                <img src="/icons/illus-2.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] max-w-32'>Join the Deal via WhatsApp</h6>
                            </div>
                            <img src="/icons/arrow.svg" alt="" />
                        </div>
                        <div className="mb-8 text-center  w-max flex items-center">
                            <div className='place-items-center'>
                                <img src="/icons/illus-3.svg" alt="" />
                                <h6 className='font-[Outfit-Bold] max-w-32'>Get Delivery When the Deal Closes</h6>
                            </div>
                            <img src="/icons/arrow.svg" className='-rotate-12 origin-left' alt="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="/cement-image.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div className="w-1/2 place-items-center">
                <img src="/products.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks