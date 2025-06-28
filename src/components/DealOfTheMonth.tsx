"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type DealItem = {
  title: string;
  subText: string;
  endTime: string;
};

interface DealBoxProps {
  title: string;
  subText: string;
  endTime: string;
}

const deals: DealItem[] = [
  {
    title: "Deal of the month",
    subText: "Save 40% on market prices",
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
  },
];

const DealBox: React.FC<DealBoxProps> = ({ title, subText, endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    if (difference <= 0) return { hours: "00", minutes: "00", seconds: "00" };

    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const t = useTranslations("dealOfTheMonth");

  return (
    <div className="relative bg-[#D26200] w-full rounded-lg px-6 md:px-10 py-10 min-h-[320px] md:flex flex-col md:flex-row justify-between items-center overflow-visible mt-10">
      {/* Left Content */}
      <div className="text-white md:w-1/2 w-full space-y-4 z-10">
        <img src="/Logo-White.png" alt="Logo" className="w-36 mb-8" />
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-[28px]">{subText}</p>
        <div>
          <p className="text-[32px] mb-1">{t("endsIn")}</p>
          <p className="text-[32px] font-semibold">
            {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </p>
        </div>
        <Link
          href="#"
          className="mt-4 inline-block bg-white text-[#F05526] font-semibold text-[16px] px-15 py-2 rounded-sm hover:bg-gray-100 transition"
        >
          {t("viewDeals")}
        </Link>
      </div>

      {/* Right Image - Block level on mobile, floating on desktop */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
        {/* Mobile: Block images */}
        <div className="block md:hidden relative">
          <img
            src="/cement-image.png"
            alt="Cement Deal"
            className="w-[320px] object-contain drop-shadow-lg"
          />
          <img
            src="/shadow.png"
            alt="Shadow"
            className="w-[320px] object-contain absolute bottom-4 left-0 -z-10"
          />
        </div>

        {/* Desktop: Absolute positioned images (original styling) */}
        <div className="hidden md:block">
          <img
            src="/cement-image.png"
            alt="Cement Deal"
            className="w-[517px] object-contain drop-shadow-lg absolute top-[-18%] right-[55px]"
          />
          <img
            src="/Shadow.png"
            alt="Shadow"
            className="w-[517px] object-contain drop-shadow-lg absolute bottom-[-2%] right-[55px]"
          />
        </div>
      </div>
    </div>
  );
};

const DealOfTheMonth = () => {
  return (
    <div className="lg:px-20 px-5 lg:my-16 my-8">
      <div className="flex lg:flex-nowrap flex-wrap gap-x-5">
        {deals.map((deal, index) => (
          <DealBox
            key={index}
            title={deal.title}
            subText={deal.subText}
            endTime={deal.endTime}
          />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheMonth;