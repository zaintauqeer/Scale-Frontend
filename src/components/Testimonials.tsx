"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    const t = useTranslations('testimonail')
    return (
        <div className='lg:px-20 px-5 lg:my-24 my-8 bg-[#F4F4F4] pt-16 pb-36'>
            <div className="flex items-center gap-2">
                
                <span className='uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold'>{t('subTitle')}</span>
                <div className="w-12 h-0.5 bg-[#F15625]"></div>
            </div>
            <div className="flex justify-between flex-wrap items-baseline">
                <h2 className='lg:text-5xl text-3xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 max-w-lg'>{t('title')}</h2>
                <div>
                    <button
                        className="py-3.5 px-9 border rounded-sm border-[#F15625] hover:bg-gray-100 cursor-pointer"
                        onClick={scrollPrev}
                    >
                        <img className='rtl:rotate-180' src="/icons/button-arrow.svg" alt="" />
                    </button>
                    <button
                        className="py-3.5 px-9 ms-5 border rounded-sm border-[#F15625] hover:bg-gray-100 cursor-pointer"
                        onClick={scrollNext}
                    >
                        <img src="/icons/button-arrow.svg" className='ltr:rotate-180' alt="" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap items-center relative mt-28">
                <div className="absolute lg:w-4/12 w-full left-0 lg:top-1/2 top-0 lg:-translate-y-1/2">
                    <img src="/s-mark.svg" className='w-full' alt="" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2  h-full w-full">
                        <div className='h-full' style={{
                            WebkitMaskImage: 'url(/s-mark.svg)',
                            maskImage: 'url(/s-mark.svg)',
                            WebkitMaskSize: 'cover',
                            maskSize: 'cover',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center'
                        }}>
                            <img src="/testimonail-img.jpg" className="object-cover h-full" alt="Materials shaped like S mark" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full ml-auto">
                    <div dir='ltr' className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide p-5">
                                <div className="text-center rounded-2xl bg-white px-12 py-16 relative isolate" style={{ boxShadow: '0px 0px 20px 0px #0000001F' }}>
                                    <h2 className='font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-[40px] text-xl max-w-xl m-auto'>{t('testimonialTitle')}</h2>
                                    {/* <p className='lg:text-xl mt-5 mb-14 text-[#4F4F4F]'>{t('testimonialDescription')}</p> */}
                                    <h4 className='font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#222222] lg:text-2xl text-xs'>{t('testimonialName')}</h4>
                                    <p className='lg:text-xl text-xs text-[#666666]'>{t('testimonialPosition')}</p>
                                    <img src="/shadow-testimonail.svg" className='absolute top-0 right-0 -z-0' alt="" />
                                    <img src="/shadow-testimonail.svg" className='absolute bottom-0 left-0 -z-0 rotate-180' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute top-1/12 left-1/12 -z-0' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute bottom-1/6 right-1/12 -z-0 rotate-180' alt="" />
                                </div> 
                            </div>
                            <div className="embla__slide p-5">
                                <div className="text-center rounded-2xl bg-white px-12 py-16 relative isolate" style={{ boxShadow: '0px 0px 20px 0px #0000001F' }}>
                                    <h2 className='font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-[40px] text-xl max-w-xl m-auto'>{t('testimonialTitle2')}</h2>
                                    {/* <p className='lg:text-xl mt-5 mb-14 text-[#4F4F4F]'>{t('testimonialDescription2')}</p> */}
                                    <h4 className='font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#222222] lg:text-2xl text-xs'>{t('testimonialName2')}</h4>
                                    <p className='lg:text-xl text-xs text-[#666666]'>{t('testimonialPosition')}</p>
                                    <img src="/shadow-testimonail.svg" className='absolute top-0 right-0 -z-0' alt="" />
                                    <img src="/shadow-testimonail.svg" className='absolute bottom-0 left-0 -z-0 rotate-180' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute top-1/12 left-1/12 -z-0' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute bottom-1/6 right-1/12 -z-0 rotate-180' alt="" />
                                </div>
                            </div>
                            <div className="embla__slide p-5">
                                <div className="text-center rounded-2xl bg-white px-12 py-16 relative isolate" style={{ boxShadow: '0px 0px 20px 0px #0000001F' }}>
                                    <h2 className='font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-[40px] text-xl max-w-xl m-auto'>{t('testimonialTitle')}</h2>
                                    {/* <p className='lg:text-xl mt-5 mb-14 text-[#4F4F4F]'>{t('testimonialDescription')}</p> */}
                                    <h4 className='font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#222222] lg:text-2xl text-xs'>{t('testimonialName')}</h4>
                                    <p className='lg:text-xl text-xs text-[#666666]'>{t('testimonialPosition')}</p>
                                    <img src="/shadow-testimonail.svg" className='absolute top-0 right-0 -z-0' alt="" />
                                    <img src="/shadow-testimonail.svg" className='absolute bottom-0 left-0 -z-0 rotate-180' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute top-1/12 left-1/12 -z-0' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute bottom-1/6 right-1/12 -z-0 rotate-180' alt="" />
                                </div>
                            </div>
                            <div className="embla__slide p-5">
                                <div className="text-center rounded-2xl bg-white px-12 py-16 relative isolate" style={{ boxShadow: '0px 0px 20px 0px #0000001F' }}>
                                    <h2 className='font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-[40px] text-xl max-w-xl m-auto'>{t('testimonialTitle2')}</h2>
                                    {/* <p className='lg:text-xl mt-5 mb-14 text-[#4F4F4F]'>{t('testimonialDescription')}</p> */}
                                    <h4 className='font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#222222] lg:text-2xl text-xs'>{t('testimonialName@')}</h4>
                                    <p className='lg:text-xl text-xs text-[#666666]'>{t('testimonialPosition')}</p>
                                    <img src="/shadow-testimonail.svg" className='absolute top-0 right-0 -z-0' alt="" />
                                    <img src="/shadow-testimonail.svg" className='absolute bottom-0 left-0 -z-0 rotate-180' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute top-1/12 left-1/12 -z-0' alt="" />
                                    <img src="/icons/quotes-icon.svg" className='absolute bottom-1/6 right-1/12 -z-0 rotate-180' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials