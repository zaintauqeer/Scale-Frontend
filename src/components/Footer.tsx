import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const g = useTranslations('global')
    const t = useTranslations('footer')
    return (
        <div className='bg-[#0A1816] lg:pt-[72px] lg:px-20 px-5 lg:pb-11 pb-7 pt-10'>
            <div className="text-center place-items-center">
                <img src="/Logo-White.png" alt="" />
                <div className='mt-10 flex lg:gap-5 gap-3 flex-wrap'>
                    <Link href='/deals' className="bg-[#F15625] text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow text-center">{g('viewLiveDeals')}</Link>
                    <Link
                        href="https://wa.me/966551324666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white lg:grow-0 grow text-center">{g('orderViaWhatsapp')}</Link>
                </div>
                <ul className='flex gap-x-3 list-none p-0 m-0 justify-center items-center mt-10 mb-11'>
                    <li>
                        <a href="#" className='w-10 border-[#FFFFFF3D] border bg-[#FFFFFF1A] rounded-full aspect-square flex items-center justify-center'>
                            <img src="/icons/instagram.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='w-10 border-[#FFFFFF3D] border bg-[#FFFFFF1A] rounded-full aspect-square flex items-center justify-center'>
                            <img src="/icons/facebook.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='w-10 border-[#FFFFFF3D] border bg-[#FFFFFF1A] rounded-full aspect-square flex items-center justify-center'>
                            <img src="/icons/tweeter.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='w-10 border-[#FFFFFF3D] border bg-[#FFFFFF1A] rounded-full aspect-square flex items-center justify-center'>
                            <img src="/icons/github.svg" alt="" />
                        </a>
                    </li>
                </ul>
                <p className='text-sm text-center text-white border-t border-[#FFFFFF52] w-full pt-10'>{t('copyright')}</p>
            </div>
        </div>
    )
}

export default Footer