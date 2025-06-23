import React from 'react'
import DealBox from './DealBox'
import deals from './deals.json'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const LiveDeals = () => {
    const t = useTranslations('liveDeals')
    return (
        <div className='lg:px-20 px-5 lg:my-20 my-8 py-14'>
            <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-[#F15625]"></div>
                <span className='uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold'>{t('subTitle')}</span>
            </div>
            <h2 className='text-5xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5'>{t('title')}</h2>
            <div className="flex gap-4 overflow-x-hidden pb-4 my-8">
                <div className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
                    <img src="/icons/mage_filter.svg" alt="" />
                </div>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/hugeicons_package-moving.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('About to meet MOQ')}</span>
                </button>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/time-line.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('About to end')}</span>
                </button>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/tools.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('Aggregate and Sand')}</span>
                </button>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/hat-hard.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('Block')}</span>
                </button>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/tools.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('Cement')}</span>
                </button>
                <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
                    <img src="/icons/tools.svg" alt="" />
                    <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">{t('Wood')}</span>
                </button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                {deals.map((deal) => (
                  <Link key={deal.id} href={`/deals/${deal.id}`} className="block">
                    <DealBox {...deal} />
                  </Link>
                ))}
            </div>
        </div>
    )
}

export default LiveDeals