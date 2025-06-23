import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const SmallBanner = () => {
  const t = useTranslations('smallBanner')
  const g = useTranslations('global')
  return (
    <div className='bg-[#1A3D38] lg:py-[117px] lg:px-[103px] px-[37px] py-[45px]'>
      <div className="flex flex-wrap gap-y-14 items-center">
        <div className="lg:w-2/5 w-full">
          <h4 className='lg:text-[40px] text-3xl text-white font-[Outfit-Bold] rtl:font-sans rtl:font-bold'>{t('title')}</h4>
          <p className='text-[#FFFFFFB2] text-xl mt-3'>{t('description')}</p>
        </div>
        <div className='lg:w-3/5 w-full flex justify-end lg:gap-5 gap-3 flex-wrap'>
          <Link href='/deals' className="bg-[#F15625] text-white lg:px-11 px-7 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow text-center">{g('viewLiveDeals')}</Link>
          <Link
            href="https://wa.me/966551324666"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white lg:px-5 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white lg:grow-0 grow text-center">{g('orderViaWhatsapp')}</Link>
        </div>
      </div>
    </div>
  )
}

export default SmallBanner