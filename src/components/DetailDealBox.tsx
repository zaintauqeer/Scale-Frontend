// import React, { useState, useEffect } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import { useTranslations } from 'next-intl';

// interface DetailDealBoxProps {
//   id: string;
//   image: string;
//   images?: string[]; // Made optional to match default prop
//   title: string;
//   price: string;
//   location: string;
//   timeLeft: string;

//   progress: number;
//   // supplierImg: string;
//   supplierName: string;
//   minOrder: string;
//   deliveryTimeframe: string;
//   delivery: string;
// }

// const DetailDealBox = ({
//   image,
//   images = [],
//   title,
//   price,
//   location,
//   timeLeft,

//   progress,
//   // supplierImg,
//   supplierName,
//   minOrder,
//   deliveryTimeframe,
//   delivery,
// }: DetailDealBoxProps) => {
//   // Destructure both the ref and the API from useEmblaCarousel
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const dealImages = images.length > 0 ? images : [image, image, image, image];

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (!emblaApi) return;
//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };
//     emblaApi.on('select', onSelect);
//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi]);

//   const t = useTranslations('dealBox');
//   return (
//     <div className="lg:px-20 px-5 py-14 flex flex-col lg:flex-row gap-x-12">
//       {/* Images Section */}
//       <div className="flex flex-col gap-5 w-full lg:w-5/12" dir='ltr'>
//         {/* Main Image */}
//         <div className="bg-[#CCCCCC] rounded-sm overflow-hidden">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="embla__container aspect-square">
//               {dealImages.map((img: string, index: React.Key) => (
//                 <div key={index} className="embla__slide ">
//                   <div className="h-full flex items-center justify-center">
//                     <img
//                       src={img}
//                       alt={`${title}`}
//                       className="object-contain max-h-3/4"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {dealImages.map((img: string, index: React.Key) => (
//             <button
//               key={index}
//               onClick={() => {
//                 if (emblaApi) {
//                   emblaApi.scrollTo(Number(index));
//                 }
//               }}
//               className={`
//                 flex-shrink-0 
//                 w-20 h-20 
//                 rounded-sm
//                 overflow-hidden 
//                 cursor-pointer
//                 border-2 
//                 bg-[#F2F2F2]
//                 aspect-square
//                 flex items-center justify-center

//                 ${selectedIndex === index ? 'border-[#F05526]' : 'border-transparent'}
//               `}
//             >
//               <img
//                 src={img}
//                 alt={`Preview`}
//                 className="h-3/4 object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* Information Section */}
//       <div className="gap-5 lg:w-7/12">
//         <div className='flex gap-6 flex-wrap justify-between pb-5 border-b border-[#DDDDDD]'>
//           <h2 className="lg:text-[32px] font-[Outfit-Bold] rtl:font-sans rtl:font-bold mb-2">{title}</h2>
//           <span className="lg:text-[32px] text-lg font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#F05526]">{price}</span>
//         </div>
//         <div className="mt-12 flex flex-col gap-5 font-[Outfit-Medium] rtl:font-sans rtl:font-medium text-xl">
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Time Left')}:</div>
//             <div className=" text-[#F05526]">{timeLeft}</div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Supplier')}:</div>
//             <div className="flex items-center gap-2">
//               {/* <img src={supplierImg} alt={supplierName} className="w-[40px] h-[40px] rounded-full border" /> */}
//               <span className="">{supplierName}</span>
//             </div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Supplier')}:</div>
//             <div className=" text-[#222222]">{location}</div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Delivery Area')}:</div>
//             <div className=" text-[#222222]">{location}</div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Minimum Order Quantity')}:</div>
//             <div className=" text-[#222222]">{minOrder}</div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Delivery Timeframe')}:</div>
//             <div className=" text-[#222222]">{deliveryTimeframe}</div>
//           </div>
//           <div className='flex gap-x-3 justify-between'>
//             <div className="text-[#666666]">{t('Delivery')}:</div>
//             <div className=" text-[#222222]">{delivery}</div>
//           </div>
//         </div>
//         {/* Participants */}
//         {/* <div className='mt-12 flex justify-between gap-x-3 mb-6'>
//           <div className="text-[##222222] text-2xl mb-2">{t('Participants')}</div>
//           <div className="flex items-center gap-2">
//             {participants.map((p, i) => (
//               <img key={i} src={p} className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white -ms-2 first:ms-0" alt="participant" />
//             ))}
//             <div className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center text-xs font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-gray-700 border-2 border-white -ms-2">
//               +{participantsExtra}
//             </div>
//           </div>
//         </div> */}
//         {/* Progress Bar */}
//         <div className="flex items-center gap-4">
//           <div className="w-full h-[14px] bg-gray-200 rounded-full">
//             <div className="h-full bg-[#F05526] rounded-full" style={{ width: `${progress}%` }}></div>
//           </div>
//           <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-lg text-[#444444]">{progress}%</span>
//         </div>
//         {/* Action Buttons */}
//         <div className="flex gap-4 mt-12">
//           <button className="bg-[#F05526] flex-auto text-white px-6 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{t('Join now')}</button>
//           <button className="border border-gray-300 px-6 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold flex items-center gap-2">
//             <img src="/icons/share-icon.svg" alt="Share" className="w-4 h-4" />
//             {t('Share')} <span className="hidden lg:inline">{t('for more to join')}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailDealBox;


















// 






// "use client";

// import React, { useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { useTranslations } from "next-intl";

// /* ------------------------------------------------------------------ */
// /* Props                                                               */
// /* ------------------------------------------------------------------ */
// export interface DetailDealBoxProps {
//   image: string;
//   images?: string[];
//   title: string;
//   price: string;
//   location: string;
//   timeLeft: string;
//   progress: number;            // 0 – 100
//   supplierName: string;
//   minOrder: string | number;
//   deliveryTimeframe: string;
//   delivery: string;
//   onBuyNow?: () => void;
// }

// /* ------------------------------------------------------------------ */
// /* Component                                                           */
// /* ------------------------------------------------------------------ */
// const DetailDealBox: React.FC<DetailDealBoxProps> = ({
//   image,
//   images = [],
//   title,
//   price,
//   location,
//   timeLeft,
//   progress,
//   supplierName,
//   minOrder,
//   deliveryTimeframe,
//   delivery,
//   onBuyNow,
// }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const [selectedIndex, setSelectedIndex] = useState<number>(0);

//   const gallery: string[] = [image, ...images.filter((img) => img && img !== image)];

//   useEffect(() => {
//     if (!emblaApi) return;
  
//     const onSelect = () => {
//       const selected = emblaApi.selectedScrollSnap?.();
//       if (typeof selected === "number") {
//         setSelectedIndex(selected);
//       }
//     };
  
//     emblaApi.on?.("select", onSelect);
//     onSelect(); // in case you want to set initial state immediately
  
//     return () => {
//       emblaApi.off?.("select", onSelect);
//     };
//   }, [emblaApi]);
  

//   const t = useTranslations("dealBox");

//   return (
//     <div className="lg:px-20 px-5 py-14 flex flex-col lg:flex-row gap-x-12">
//       {/* ---------------- Images ---------------- */}
//       <div className="flex flex-col gap-5 w-full lg:w-5/12" dir="ltr">
//         {/* Main carousel */}
//         <div className="bg-[#CCCCCC] rounded-sm overflow-hidden">
//           <div ref={emblaRef} className="overflow-hidden">
//             <div className="flex aspect-square">
//               {gallery.map((src, i) => (
//                 <div key={i} className="flex-[0_0_100%] min-w-0">
//                   <div className="h-full flex items-center justify-center">
//                     <img
//                       src={src}
//                       alt={title}
//                       className="object-contain max-h-3/4 w-full"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.src = "/placeholder-image.jpg";
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Thumbnails */}
//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {gallery.map((src, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => emblaApi?.scrollTo(i)}
//               className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden aspect-square border-2 ${
//                 selectedIndex === i ? "border-[#F05526]" : "border-transparent"
//               } bg-[#F2F2F2] flex items-center justify-center`}
//             >
//               <img
//                 src={src}
//                 alt="Preview"
//                 className="h-3/4 object-cover"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.src = "/placeholder-image.jpg";
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- Info ---------------- */}
//       <div className="flex flex-col gap-5 lg:w-7/12">
//         {/* Title + Price */}
//         <div className="flex gap-6 justify-between flex-wrap pb-5 border-b border-[#DDDDDD]">
//           <h2 className="text-2xl lg:text-[32px] font-[Outfit-Bold] rtl:font-sans rtl:font-bold mb-2">
//             {title}
//           </h2>
//           <span className="text-lg lg:text-[32px] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#F05526]">
//             {price}
//           </span>
//         </div>

//         {/* Facts */}
//         <div className="mt-12 flex flex-col gap-5 text-xl font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
//           <InfoRow label={t("Time Left")} value={timeLeft} highlight />
//           <InfoRow label={t("Supplier")} value={supplierName} />
//           <InfoRow label={t("Delivery Area")} value={location} />
//           <InfoRow label={t("Minimum Order Quantity")} value={minOrder} />
//           <InfoRow label={t("Delivery Timeframe")} value={deliveryTimeframe} />
//           <InfoRow label={t("Delivery")} value={delivery} />
//         </div>

//         {/* Progress */}
//         <div className="flex items-center gap-4 mt-6">
//           <div className="w-full h-[14px] bg-gray-200 rounded-full">
//             <div
//               className="h-full bg-[#F05526] rounded-full transition-all duration-300"
//               style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
//             />
//           </div>
//           <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-lg text-[#444444]">
//             {Math.min(Math.max(progress, 0), 100)}%
//           </span>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-4 mt-12">
//           <button
//             onClick={onBuyNow}
//             className="bg-[#F05526] flex-auto cursor-pointer  text-white px-6 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold hover:bg-[#d63f1e] transition-colors"
//           >
//             {t("Buy now")}
//           </button>
//           <button className="bg-[#F05526] flex-auto text-white py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold hover:bg-[#d63f1e] transition-colors">
//             {t("Join now")}
//           </button>
//           <button className="border border-gray-300 px-3 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
//             <img src="/icons/share-icon.svg" alt="Share" className="w-4 h-4" />
//             {t("Share")}{" "}
//             <span className="hidden lg:inline">{t("for more to join")}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Small reusable row                                                  */
// /* ------------------------------------------------------------------ */
// interface InfoRowProps {
//   label: string;
//   value: React.ReactNode;
//   highlight?: boolean;
// }

// const InfoRow: React.FC<InfoRowProps> = ({ label, value, highlight }) => (
//   <div className="flex justify-between gap-x-3">
//     <span className="text-[#666666]">{label}:</span>
//     <span className={highlight ? "text-[#F05526]" : "text-[#222222]"}>{value}</span>
//   </div>
// );

// export default DetailDealBox;












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
          <button className="bg-[#F05526] flex-auto text-white py-3 rounded text-center font-semibold hover:bg-[#d63f1e] transition-colors cursor-pointor">
            {t("Join now")}
          </button>
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