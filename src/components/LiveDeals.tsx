"use client"

import React from "react";
import DealBox from "./DealBox";
import deals from "./deals.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const LiveDeals = () => {
  const t = useTranslations("liveDeals");
  const pathname = usePathname();

  // Extract the path without locale prefix
  const pathWithoutLocale = pathname?.split("/").slice(2).join("/");
  const basePath = "/" + pathWithoutLocale;
  return (
    <div className="lg:px-20 lg:my-20 my-8 py-14">
      <div className="">
        <div className="flex items-center gap-2 px-5 lg:px-0">
          <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
            {t("subTitle")}
          </span>
          <div className="w-12 h-0.5 bg-[#F15625]"></div>
        </div>
        <h2 className="text-5xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 px-5 lg:px-0">
          {t("title")}
        </h2>
        <div className="flex gap-4 overflow-x-hidden pb-4 my-8 px-5 lg:px-0">
          <div className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
            <img src="/icons/mage_filter.svg" alt="" />
          </div>

          <button className="flex items-center gap-2 border cursor-pointer border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
            <img src="/icons/hat-hard.svg" alt="" />
            <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">
              {t("Block")}
            </span>
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
        {deals.map((deal) => (
          <Link
            key={deal.id}
            href={`/${pathname?.split("/")[1]}/deals/${deal.id}`}
            className="block"
          >
            <DealBox {...deal} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LiveDeals;
