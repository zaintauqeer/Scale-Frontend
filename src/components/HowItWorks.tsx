"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HowItWorks = () => {
  const pathname = usePathname();
  const t = useTranslations("howItWorks");
  const g = useTranslations("global");

  
  return (
    <div id="how-it-works" className="lg:px-20 px-5 lg:my-24 my-8 mt-8">
      <div className="text-center">
        <div className="flex items-center gap-2 justify-center">
          <span className="uppercase text-[#F15625] lg:text-base text-xs font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
            {t("subtitle")}
          </span>
          <div className="w-12 h-0.5 bg-[#F15625]"></div>
        </div>
        <h2 className="lg:text-5xl text-3xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5">
          {t("title")}
        </h2>
        <p className="text-[#00000099] text-xl lg:max-w-2xl m-auto">
          {t("description")}
        </p>
        <div className="mt-10 lg:gap-5 gap-3 flex flex-wrap justify-center">
          <Link
            href={`/${pathname?.split("/")[1]}/deals`}
            className="bg-[#F15625] text-white lg:px-11 px-8 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow text-center"
          >
            {g("viewLiveDeals")}
          </Link>
          <Link
            href="https://wa.me/966551324666"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-black lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-black lg:grow-0 grow text-center"
          >
            {g("orderViaWhatsapp")}
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 items-center">
        <div dir="ltr" className="lg:w-1/2 w-full lg:pe-10">
          <div className="flex items-center">
            <div className="w-1/2">
              <div className="mb-8 text-center  w-max flex items-center">
                <div className="place-items-center lg:w-[135px] w-24">
                  <img
                    className="lg:w-[100] w-20 m-auto aspect-square"
                    src="/icons/illus-1.svg"
                    alt=""
                  />
                  <h6 className="font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-base text-xs max-w-32">
                    {t("Browse Ongoing Group Deals")}
                  </h6>
                </div>
                <img
                  src="/icons/arrow.svg"
                  className="lg:rotate-12 rotate-45 origin-left lg:w-28 w-20"
                  alt=""
                />
              </div>
              <div className="mb-8 text-center  w-max flex items-center">
                <div className="place-items-center lg:w-[135px] w-24">
                  <img
                    className="lg:w-[100] w-20 m-auto aspect-square"
                    src="/icons/illus-2.svg"
                    alt=""
                  />
                  <h6 className="font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-base text-xs max-w-32">
                    {t("Join the Deal via WhatsApp")}
                  </h6>
                </div>
                <img className="lg:w-28 w-16" src="/icons/arrow.svg" alt="" />
              </div>
              <div className="mb-8 text-center  w-max flex items-center">
                <div className="place-items-center lg:w-[135px] w-24">
                  <img
                    className="lg:w-[100] w-20 m-auto aspect-square"
                    src="/icons/illus-3.svg"
                    alt=""
                  />
                  <h6 className="font-[Outfit-Bold] rtl:font-sans rtl:font-bold lg:text-base text-xs max-w-32">
                    {t("Get Delivery When the Deal Closes")}
                  </h6>
                </div>
                <img
                  src="/icons/arrow.svg"
                  className="lg:-rotate-12 -rotate-45 origin-left lg:w-28 w-20"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2">
              <img src="/cement-image.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="lg:w-1/2 w-full place-items-center lg:ps-10 border-s border-[#0000001F]">
                    <img className='rtl:hidden max-w-full' src="/products.png" alt="" />
                    <img className='ltr:hidden max-w-full' src="/products-ar.png" alt="" />
                </div> */}

        <div className="hidden lg:block lg:w-1/2 place-items-center lg:ps-10 border-s border-[#0000001F]">
          <img className="rtl:hidden max-w-full" src="/products.png" alt="" />
          <img
            className="ltr:hidden max-w-full"
            src="/products-ar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
