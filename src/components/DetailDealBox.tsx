"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations, useLocale } from "next-intl";

export interface DetailDealBoxProps {
  image: string;
  images?: string[];
  title: { en: string; ar: string };
  price: string;
  location: { en: string; ar: string };
  timeLeft: string;
  progress: number;
  supplierName: { en: string; ar: string };
  minOrder: string | number;
  deliveryTimeframe: string;
  delivery: string;
  description: { en: string; ar: string }; // Kept in interface but not used in UI
  termsAndNotes: { en: string; ar: string }; // Kept in interface but not used in UI
  paymentInstructions: { en: string; ar: string }; // Kept in interface but not used in UI
  whatsappMessages: { en: string; ar: string }; // Kept in interface but not used in UI
  prefilledMessages: { en: string; ar: string }; // Kept in interface but not used in UI
  onBuyNow?: () => void;
}

const DetailDealBox: React.FC<DetailDealBoxProps> = ({
  image,
  images = [],
  title,
  price,
  location,
  timeLeft,
  progress,
  supplierName,
  minOrder,
  deliveryTimeframe,
  delivery,
  whatsappMessages,
  onBuyNow,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const t = useTranslations("dealBox");
  const locale = useLocale() as "en" | "ar";


  const gallery: string[] = [image, ...images.filter((img) => img && img !== image)];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap?.();
      if (typeof selected === "number") {
        setSelectedIndex(selected);
      }
    };

    emblaApi.on?.("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off?.("select", onSelect);
    };
  }, [emblaApi]);


  //----------------------------TIME LEFT
  const [remaining, setRemaining] = useState<string>("");

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const endTime = new Date(timeLeft).getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setRemaining(t("Expired") || "Completed");
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemaining(`${days}days:${hours}h:${minutes}m:${seconds}s`);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft, t]);

  return (
    <div className="lg:px-20 px-5 py-14 flex flex-col lg:flex-row gap-x-12">
      {/* Image section */}
      <div className="flex flex-col gap-5 w-full lg:w-5/12" dir="ltr">
        <div className="bg-[#CCCCCC] rounded-sm overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex aspect-square">
              {gallery.map((src, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={title[locale]}
                      className="object-contain max-h-3/4 w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden aspect-square border-2 ${
                selectedIndex === i ? "border-[#F05526]" : "border-transparent"
              } bg-[#F2F2F2] flex items-center justify-center`}
            >
              <img
                src={src}
                alt="Preview"
                className="h-3/4 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-image.jpg";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Text Info */}
      <div className="flex flex-col gap-5 lg:w-7/12">
        <div className="flex gap-6 justify-between flex-wrap pb-5 border-b border-[#DDDDDD]">
          <h2 className="text-2xl lg:text-[32px] font-bold mb-2">{title[locale]}</h2>
          <span className="text-lg lg:text-[32px] font-semibold text-[#F05526]">{price}</span>
        </div>

        <div className="mt-12 flex flex-col gap-5 text-xl font-medium">
          <InfoRow label={t("Time Left")} value={remaining} highlight />
          <InfoRow label={t("Supplier")} value={supplierName[locale]} />
          <InfoRow label={t("Delivery Area")} value={location[locale]} />
          <InfoRow label={t("Minimum Order Quantity")} value={minOrder} />
          <InfoRow label={t("Delivery Timeframe")} value={deliveryTimeframe} />
          <InfoRow label={t("Delivery")} value={delivery} />
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="w-full h-[14px] bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#F05526] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
          </div>
          <span className="font-semibold text-lg text-[#444444]">
            {Math.min(Math.max(progress, 0), 100)}%
          </span>
        </div>

        <div className="flex gap-4 mt-12">
          <button
            onClick={onBuyNow}
            className="bg-[#F05526] flex-auto text-white px-6 py-3 rounded font-semibold hover:bg-[#d63f1e] transition-colors cursor-pointor"
          >
            {t("Buy now")}
          </button>
          <a href={`https://wa.me/966551324666?text=${whatsappMessages[locale]}`} className="bg-[#F05526] flex-auto text-white py-3 rounded font-semibold hover:bg-[#d63f1e] transition-colors cursor-pointor">
            {t("Join now")}
          </a>
          <button className="border border-gray-300 px-3 py-3 rounded font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointor">
            <img src="/icons/share-icon.svg" alt="Share" className="w-4 h-4" />
            {t("Share")} <span className="hidden lg:inline">{t("for more to join")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, highlight }) => (
  <div className="flex justify-between gap-x-3">
    <span className="text-[#666666]">{label}:</span>
    <span className={highlight ? "text-[#F05526]" : "text-[#222222]"}>{value}</span>
  </div>
);

export default DetailDealBox;