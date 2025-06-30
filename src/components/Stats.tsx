'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {useTranslations} from 'next-intl';

interface StatBoxProps {
  icon: string;
  end: number;
  suffix?: string;
  text: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, end, suffix = '', text }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  

  return (
    <div ref={ref} className="xl:w-1/3 w-full lg:px-24 px-8 py-12">
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
  const t = useTranslations('stats');
  return (
    <div className=" px-5 lg:my-24 my-9 lg:px-20">
      <div className="flex flex-wrap" style={{ boxShadow: '0px 0px 20px 0px #FF522129' }}>
        <StatBox icon="/icons/hand-shake.svg" end={10} suffix="+" text={t('ManufacturersOnboarded')} />
        <StatBox icon="/icons/construction.svg" end={25} suffix="%" text={t('GrowthRate')} />
        <StatBox icon="/icons/money-hand.svg" end={45} suffix={`+ ${t('tons')}`} text={t('MaterialsProcessed')} />
      </div>
    </div>
  );
};

export default Stats;
