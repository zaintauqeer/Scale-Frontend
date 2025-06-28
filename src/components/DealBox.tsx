import React from "react";
import { useTranslations } from 'next-intl';
const DealBox = ({
  image,
  title,
  price,
  location,
  timeLeft,
  participants,
  participantsExtra,
  progress,
  supplierImg,
  supplierName,
  minOrder,
  deliveryTimeframe,
  delivery
}: {
  image: string;
  title: string;
  price: string;
  location: string;
  timeLeft: string;
  participants: string[];
  participantsExtra: number;
  progress: number;
  supplierImg: string;
  supplierName: string;
  minOrder: string;
  deliveryTimeframe: string;
  delivery: string;
}) => {
  const t = useTranslations('dealBox');
  return (
    <div className="mt-10 rounded-sm bg-[#F2F2F2] border border-[#0000000A] p-5">
      <div className="bg-white w-full aspect-video flex justify-center items-center">
        <img
          src={image}
          className="max-w-full max-h-full"
          alt=""
        />
      </div>
      <div className="mt-9 flex justify-between items-center flex-wrap pb-5 mb-5 border-b border-[#CCCCCC]">
        <h3 className="lg:text-2xl text-xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold">{title}</h3>
        <p className="lg:text-[28px] text-xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold text-[#F05526]">
          {price}
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <h3 className="lg:text-xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold text-[#444444] flex items-center">
          <img src="/icons/location.svg" alt="" /> {location}
        </h3>
        <p className="lg:text-xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold text-[#F05526]">
          {timeLeft}
        </p>
      </div>
   
      <div className="flex items-center gap-4 mb-10">
        <div className="w-full lg:h-3.5 h-2 bg-gray-200 rounded-full">
          <div className="h-full bg-[#F05526] rounded-full" style={{width: `${progress}%`}}></div>
        </div>
        <span className="lg:text-2xl font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#444444]">
          {progress}%
        </span>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <div>
          <span className="text-[#666666] lg:text-base text-xs block mb-5">{t('Supplier')}:</span>
          <div className="flex items-center ">
            <img src={supplierImg} className="w-6 aspect-square rounded-full border border-[#DDDDDD]" alt="" />
            <h5 className="text-[#222222] ms-3 lg:text-xl font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{supplierName}</h5>
          </div>
          <span className="text-[#666666] lg:text-base text-xs block mb-5 mt-6">{t('Minimum Order Quantity')}:</span>
          <h5 className="text-[#222222] lg:text-xl font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{minOrder}</h5>
        </div>
        <div>
          <span className="text-[#666666] lg:text-base text-xs block mb-5">{t('Delivery Timeframe')}:</span>
          <h5 className="text-[#222222] lg:text-xl font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{deliveryTimeframe}</h5>
          <span className="text-[#666666] lg:text-base text-xs block mb-5 mt-6">{t('Delivery')}:</span>
          <h5 className="text-[#222222] lg:text-xl font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{delivery}</h5>
        </div>
      </div>
      <div className='mt-10 flex gap-6'>
            <button  className="bg-[#F05526] text-center flex-auto  text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] font-['Outfit-SemiBold'] 
 rtl:font-sans rtl:font-semibold border rtl:font-sans rtl:font-semibold border-[#F05525]">{t('Join now')}</button>
            <button  className="w-max whitespace-nowrap text-[#222222] px-6 py-[14px] rounded-sm menu-btn leading-[1.2] font-['Outfit-SemiBold'] 
 rtl:font-sans rtl:font-semibold border rtl:font-sans rtl:font-semibold border-[#DDDDDD] flex gap-x-2 items-center">
              <img src="/icons/share-icon.svg" alt="" />
              {t('Share')} <span className="hidden lg:inline">{t('for more to join')}</span>
            </button>
        </div>
    </div>
  )
}

export default DealBox;
