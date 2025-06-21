'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatBoxProps {
  icon: string;
  end: number;
  suffix?: string;
  text: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, end, suffix = '', text }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="xl:w-1/3 w-full lg:px-24 px-10 py-12">
      <div className="text-center">
        <img src={icon} alt="Stat Icon" className='inline' />
        <h2 className="text-[#1C3C36] lg:text-[56px] text-[40px] my-5 font-['Outfit-Bold'] leading-snug">
          {inView ? <CountUp end={end} duration={2} /> : 0}
          {suffix}
        </h2>
        <p className="lg:text-xl text-[#00000099]">{text}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="px-20 lg:my-24 my-9">
      <div className="flex flex-wrap" style={{ boxShadow: '0px 0px 20px 0px #FF522129' }}>
        <StatBox icon="/icons/hand-shake.svg" end={10} suffix="+" text="Manufacturers onboarded" />
        <StatBox icon="/icons/construction.svg" end={25} suffix="%" text="Growth rate" />
        <StatBox icon="/icons/money-hand.svg" end={45} suffix="+ Tons" text="Materials processed" />
      </div>
    </div>
  );
};

export default Stats;
