import React from 'react'

const Stats = () => {
  return (
    <div className='px-20 my-24'>
      <div className='flex' style={{boxShadow: '0px 0px 20px 0px #FF522129'}}>
        <div className='w-1/3 px-24 py-12'>
          <div className='text-center place-items-center'>
            <img src="/icons/hand-shake.svg" alt="" />
            <h2 className="text-[#1C3C36] text-[56px] my-5 font-['Outfit-Bold']">10+</h2>
            <p className='text-[20px] text-[#00000099]'>Manufacturers onboarded</p>
          </div>
        </div>
        <div className='w-1/3 px-24 py-12'>
          <div className='text-center place-items-center'>
            <img src="/icons/construction.svg" alt="" />
            <h2 className="text-[#1C3C36] text-[56px] my-5 font-['Outfit-Bold']">10+</h2>
            <p className='text-[20px] text-[#00000099]'>Manufacturers onboarded</p>
          </div>
        </div>
        <div className='w-1/3 px-24 py-12'>
          <div className='text-center place-items-center'>
            <img src="/icons/money-hand.svg" alt="" />
            <h2 className="text-[#1C3C36] text-[56px] my-5 font-['Outfit-Bold']">10+</h2>
            <p className='text-[20px] text-[#00000099]'>Manufacturers onboarded</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stats