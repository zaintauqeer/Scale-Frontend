'use client'
import React, {useState,useEffect} from 'react'
import Link from 'next/link'

type DealItem = {
    title: string;
    subText: string;
    endTime: string
};

interface DealBoxProps {
    title: string;
    subText: string;
    endTime: string
  }

const deals: DealItem[] = [
    {
        title: "Deal of the month",
        subText: "Save 40% on market prices",
        endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    },
    {
        title: "Deal of the month",
        subText: "Save 40% on market prices",
        endTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
    },
]

const DealBox: React.FC<DealBoxProps> = ({ title, subText, endTime}) =>{
    const calculateTimeLeft = () => {
        const difference = +new Date(endTime) - +new Date();
        if (difference <= 0) return { hours: '00', minutes: '00', seconds: '00' };
    
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
    
        return { hours, minutes, seconds };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [endTime]);
    return (
        <div className='bg-[#D26200] px-6 py-7 w-full'>
            <div className="flex">
                <div className="w-1/2">
                    <h2 className='font-[Outfit-Bold] text-white text-3xl'>{title}</h2>
                    <p className='text-xl text-white'>{subText}</p>
                    <div className="my-6">
                        <p className='text-xl text-[#FFFFFF99]'>Ends in</p>
                        <p className="text-3xl font-[Outfit-SemiBold] text-white">
                            {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                        </p>
                    </div>
                    <Link href="#" className='w-[200px] inline-block font-[Outfit-SemiBold] p-3 bg-white text-center text-[#F05526] rounded-sm'>View Deal</Link>
                </div>
                <div className="w-1/2">
                    <img src="/cement-image.png" className='w-[250px] ms-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

const DealOfTheMonth = () => {
  return (
    <div className='lg:px-20 px-5 lg:my-16 my-8'>
        <div className="flex lg:flex-nowrap flex-wrap  gap-x-5">
            {deals.map((deal, index) => (
                <DealBox key={index} title={deal.title} subText={deal.subText} endTime={deal.endTime}/>
            ) )}
        </div>
    </div>
  )
}

export default DealOfTheMonth