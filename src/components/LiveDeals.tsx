import React from 'react'
import DealBox from './DealBox'

const LiveDeals = () => {
    return (
        <div className='lg:px-20 px-5 lg:my-20 my-8 py-14'>
            <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-[#F15625]"></div>
                <span className='uppercase text-[#F15625] font-[Outfit-SemiBold]'>Live deals</span>
            </div>
            <h2 className='text-5xl font-[Outfit-Bold] my-5'>Explore our latest deals</h2>
            <div className="grid grid-cols-2 gap-x-10">
                <DealBox/>
                <DealBox/>
                <DealBox/>
                <DealBox/>
            </div>
        </div>
    )
}

export default LiveDeals