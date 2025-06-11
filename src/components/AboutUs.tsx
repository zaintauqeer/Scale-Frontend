import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='bg-[#F0F0F0] px-20 my-20 py-14'>
            <div className="flex items-center flex-wrap gap-y-4">
                <div className='md:w-1/2 w-full lg:pr-20'>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-0.5 bg-[#F15625]"></div>
                        <span className='uppercase text-[#F15625] font-[Outfit-SemiBold]'>About us</span>
                    </div>
                    <h2 className='text-5xl font-[Outfit-Bold] my-5'>Helping retailers save together.</h2>
                    <p className='text-[#00000099] text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis. Et id volutpat sit odio venenatis a dui. Pharetra, quam non, amet pretium tincidunt sem tincidunt fringilla. Convallis ac viverra egestas in bibendum metus, elit. Sagittis lacinia sit.</p>
                    <div className="mt-10">
                        <Link href='/deals' className="bg-[#F15625] text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-[20px] font-['Outfit-SemiBold'] border border-[#F15625]">About our company</Link>
                    </div>
                </div>
                <div className="md:w-1/2 w-full place-items-end">
                    <div className="relative">
                        <img src="/s-mark.svg" className='max-w-full' alt="" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 h-full scale-y-95 ">
                            <div className='h-full' style={{
                                WebkitMaskImage: 'url(/s-mark.svg)',
                                maskImage: 'url(/s-mark.svg)',
                                WebkitMaskSize: 'cover',
                                maskSize: 'cover',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center'
                            }}>
                                <img src="/matterials.jpg" className="object-cover scale-y-105 h-full" alt="Materials shaped like S mark" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs