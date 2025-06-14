import React from 'react'

const Features = () => {
    return (
        <div className='lg:px-20 px-5 lg:my-24 my-8'>
            <div className="text-center">
                <div className="flex items-center gap-2 justify-center">
                    <div className="w-12 h-0.5 bg-[#F15625]"></div>
                    <span className='uppercase text-[#F15625] font-[Outfit-SemiBold]'>Getting started</span>
                </div>
                <h2 className='lg:text-5xl text-3xl font-[Outfit-Bold] my-5'>Our Key Features</h2>
                <p className='text-[#00000099] text-xl max-w-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ut viverra eros euismod. Vestibulum, diam suspendisse adipiscing diam quis. </p>
                <div className="mt-14 py-16 relative px-24 isolate" style={{
                    background: 'linear-gradient(90deg, #fff 0%, #fff 10.33%, #1A3D38 10.33%, #1A3D38 90.67%, #fff 90.67%, #fff 100%)'
                }}>
                    <img src="/s-mark-green.svg" className='hidden lg:block absolute left-0 top-0 h-full -z-10' alt="" />
                    <img src="/s-mark-green.svg" className='hidden lg:block absolute right-0 top-0 h-full -z-10' alt="" />
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3 w-full">
                            <div className="text-center place-items-center text-white lg:px-15">
                                <img src="/icons/design_safety-certificate.svg" alt="" />
                                <h5 className='font-[Outfit-SemiBold] text-xl mt-6 mb-4'>Guaranteed Prices Lower Than Market</h5>
                                <p>Join other yards and unlock bulk prices normally reserved for big factories. Save 5–15% on essential materials like blocks, cement, and more.</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <div className="text-center place-items-center text-white lg:px-15">
                                <img src="/icons/design_safety-certificate.svg" alt="" />
                                <h5 className='font-[Outfit-SemiBold] text-xl mt-6 mb-4'>Full Ordering Through WhatsApp</h5>
                                <p>Join other yards and unlock bulk prices normally reserved for big factories. Save 5–15% on essential materials like blocks, cement, and more.</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <div className="text-center place-items-center text-white lg:px-15">
                                <img src="/icons/design_safety-certificate.svg" alt="" />
                                <h5 className='font-[Outfit-SemiBold] text-xl mt-6 mb-4'>Delivery Included</h5>
                                <p>Join other yards and unlock bulk prices normally reserved for big factories. Save 5–15% on essential materials like blocks, cement, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features