import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import parse from 'html-react-parser';
const HeroSection = () => {
    const t = useTranslations('hero');
    const g = useTranslations('global')
    return (
        <div className='relative isolate bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat lg:m-8 m-4 lg:px-12 px-3 lg:py-14 py-8 rounded-[20px]'>
            <div className='absolute -z-10 inset-0 bg-black/50 rounded-[20px]'></div>
            <div className="flex">
                <div className='text-white lg:pt-96 pt-48 lg:w-1/2 relative'>
                    <h1 className='lg:text-[64px] text-3xl lg:leading-16 font-bold'>
                        {parse(t('title'))}
                    </h1>
                    <p className='lg:text-2xl lg:pe-32 mt-8'>{t('description')}</p>
                    <div className='lg:mt-12 text-center mt-8 flex lg:gap-5 gap-3 flex-wrap'>
                        <Link href='/deals' className="bg-[#F15625] text-white lg:px-11 px-7 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow">{g('viewLiveDeals')}</Link>
                        <Link 
                            href="https://wa.me/966551324666" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="text-white lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn lg:grow-0 grow leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white"
                        >
                            {g('orderViaWhatsapp')}
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:flex hidden justify-end items-end">
                    <Link href="https://wa.me/966551324666" target="_blank" rel="noopener noreferrer" className='max-w-52 text-center flex justify-center flex-col items-center gap-5 '>
                        <img src="icons/whatsapp-logo.svg" alt="" />
                        <p className='text-white'>
                            Check the deals and jointhem in less than 10 seconds
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
