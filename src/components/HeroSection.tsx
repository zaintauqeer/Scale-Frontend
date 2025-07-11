// "use client";
// import React from "react";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import parse from "html-react-parser";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { usePathname } from "next/navigation";

// const HeroSection = () => {
//   const t = useTranslations("hero");
//   const g = useTranslations("global");
//   const pathname = usePathname();

//   const slides = [
//     {
//       title: t("title"),
//       description: t("description"),
//       image: "/hero-bg.png",
//     },
//     {
//       title: t("title"),
//       description: t("description"),
//       image: "/hero-bg.png",
//     },
//   ];

//   return (
//     <Swiper
//       loop={true}
//       autoplay={{ delay: 5000 }}
//       spaceBetween={50}
//       modules={[Autoplay]}
//     >
//       <div className='relative isolate bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8 rounded-[20px]'>
//         <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {/* Move background image into each slide */}
//             <div
//               className="flex relative lg:m-8 m-4 lg:min-h-[calc(100dvh-32px)] min-h-[calc(100dvh-16px)] rounded-[20px] isolate bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8 "
//               style={{
//                 backgroundImage: `url('${slide.image}')`,
//               }}
//             >
//               <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

//               <div className="flex mt-auto w-full">
//                 <div className="text-white lg:w-1/2 relative lg:pt-24 pt-12">
//                   <h1 className="lg:text-[64px] text-3xl lg:leading-16 font-bold">
//                     {parse(slide.title)}
//                   </h1>
//                   <p className="lg:text-2xl lg:pe-32 mt-8">
//                     {slide.description}
//                   </p>
//                   <div className="lg:mt-12 text-center mt-8 flex lg:gap-5 gap-3 flex-wrap">
//                     <Link
//                       href={`/${pathname?.split("/")[1]}/#about-us`}
//                       className="bg-[#F15625] text-white lg:px-11 px-7 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow"
//                     >
//                       {g("viewLiveDeals")}
//                     </Link>
//                     <Link
//                       href="https://wa.me/966551324666?text=hello"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn lg:grow-0 grow leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white"
//                     >
//                       {g("orderViaWhatsapp")}
//                     </Link>
//                   </div> 
//                 </div> 

//                 <div className="lg:w-1/2 lg:flex hidden justify-end items-end">
//                   <Link
//                     href="https://wa.me/966551324666?text=hello"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="max-w-52 text-center flex justify-center flex-col items-center gap-5 "
//                   >
//                     <img
//                       src="icons/whatsapp-logo.svg"
//                       alt=""
//                       className="w-16"
//                     />
//                     <p className="text-white">
//                     {t("dealAndJoin")}
//                     </p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </div>
//     </Swiper>
//   );
// };

// export default HeroSection;

















// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import parse from "html-react-parser";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { usePathname } from "next/navigation";

// const HeroSection = () => {
//   const t = useTranslations("hero");
//   const g = useTranslations("global");
//   const pathname = usePathname();
//   const [whatsappMessage, setWhatsappMessage] = useState("hello"); // Fallback message

//   // Determine language from pathname
//   const language = pathname?.split("/")[1] === "ar" ? "ar" : "en";

//   // Fetch deals from API
//   useEffect(() => {
//     const fetchDeals = async () => {
//       try {
//         const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems");
//         if (!res.ok) throw new Error("Failed to fetch deals");
//         const deals = await res.json();
//         // Assuming we use the first deal's WhatsApp message
//         if (deals.length > 0) {
//           const message = language === "ar" ? deals[0].whatsappAr : deals[0].whatsappEn;
//           setWhatsappMessage(encodeURIComponent(message || "hello")); // URL-encode the message
//         }
//       } catch (err) {
//         console.error("Error fetching WhatsApp message:", err);
//       }
//     };

//     fetchDeals();
//   }, [language]);

//   const slides = [
//     {
//       title: t("title"),
//       description: t("description"),
//       image: "/hero-bg.png",
//     },
//     {
//       title: t("title"),
//       description: t("description"),
//       image: "/hero-bg.png",
//     },
//   ];

//   return (
//     <Swiper
//       loop={true}
//       autoplay={{ delay: 5000 }}
//       spaceBetween={50}
//       modules={[Autoplay]}
//     >
//       <div className="relative isolate bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8 rounded-[20px]">
//         <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="flex relative lg:m-8 m-4 lg:min-h-[calc(100dvh-32px)] min-h-[calc(100dvh-16px)] rounded-[20px] isolate bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8"
//               style={{
//                 backgroundImage: `url('${slide.image}')`,
//               }}
//             >
//               <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

//               <div className="flex mt-auto w-full">
//                 <div className="text-white lg:w-1/2 relative lg:pt-24 pt-12">
//                   <h1 className="lg:text-[64px] text-3xl lg:leading-16 font-bold">
//                     {parse(slide.title)}
//                   </h1>
//                   <p className="lg:text-2xl lg:pe-32 mt-8">{slide.description}</p>
//                   <div className="lg:mt-12 text-center mt-8 flex lg:gap-5 gap-3 flex-wrap">
//                     <Link
//                       href={`/${pathname?.split("/")[1]}/#about-us`}
//                       className="bg-[#F15625] text-white lg:px-11 px-7 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow"
//                     >
//                       {g("viewLiveDeals")}
//                     </Link>
//                     <Link
//                       href={`https://wa.me/966551324666?text=${whatsappMessage}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn lg:grow-0 grow leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white"
//                     >
//                       {g("orderViaWhatsapp")}
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2 lg:flex hidden justify-end items-end">
//                   <Link
//                     href={`https://wa.me/966551324666?text=${whatsappMessage}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="max-w-52 text-center flex justify-center flex-col items-center gap-5"
//                   >
//                     <img src="icons/whatsapp-logo.svg" alt="" className="w-16" />
//                     <p className="text-white">{t("dealAndJoin")}</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </div>
//     </Swiper>
//   );
// };

// export default HeroSection;
















"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl"; // Switched to useLocale
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const t = useTranslations("hero");
  const g = useTranslations("global");
  const locale = useLocale(); // Use useLocale for consistent locale detection
  const [whatsappMessage, setWhatsappMessage] = useState<string | null>(null);
  const [loadingWhatsapp, setLoadingWhatsapp] = useState(true);

  // Fetch deals from API
  useEffect(() => {
    const fetchDeals = async () => {
      setLoadingWhatsapp(true);
      try {
        const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems", {
          cache: "no-store", // Ensure fresh data
        });
        if (!res.ok) throw new Error("Failed to fetch deals");
        const deals = await res.json();
        console.log("Fetched deals:", deals); // Debug API response
        // Use the first deal's whatsappMessages
        if (deals.length > 0 && deals[0].whatsappMessages) {
          const message = locale === "ar" ? deals[0].whatsappMessages.ar : deals[0].whatsappMessages.en;
          setWhatsappMessage(encodeURIComponent(message || t("defaultWhatsappMessage")));
        } else {
          setWhatsappMessage(encodeURIComponent(t("defaultWhatsappMessage")));
        }
      } catch (err) {
        console.error("Error fetching WhatsApp message:", err);
        setWhatsappMessage(encodeURIComponent(t("defaultWhatsappMessage")));
      } finally {
        setLoadingWhatsapp(false);
      }
    };

    fetchDeals();
  }, [locale, t]);

  const slides = [
    {
      title: t("title"),
      description: t("description"),
      image: "/hero-bg.png",
    },
    {
      title: t("title"),
      description: t("description"),
      image: "/hero-bg.png",
    },
  ];

  // Use a fallback while loading or if message is null
  const whatsappLink = whatsappMessage
    ? `https://wa.me/966551324666?text=${whatsappMessage}`
    : `https://wa.me/966551324666?text=${encodeURIComponent(t("defaultWhatsappMessage"))}`;

  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 5000 }}
      spaceBetween={50}
      modules={[Autoplay]}
    >
      <div className="relative isolate bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8 rounded-[20px]">
        <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex relative lg:m-8 m-4 lg:min-h-[calc(100dvh-32px)] min-h-[calc(100dvh-16px)] rounded-[20px] isolate bg-cover bg-center bg-no-repeat lg:px-12 px-3 lg:py-14 py-8"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute -z-10 inset-0 bg-black/50 rounded-[20px]"></div>

              <div className="flex mt-auto w-full">
                <div className="text-white lg:w-1/2 relative lg:pt-24 pt-12">
                  <h1 className="lg:text-[64px] text-3xl lg:leading-16 font-bold">
                    {parse(slide.title)}
                  </h1>
                  <p className="lg:text-2xl lg:pe-32 mt-8">{slide.description}</p>
                  <div className="lg:mt-12 text-center mt-8 flex lg:gap-5 gap-3 flex-wrap">
                    <Link
                      href={`/${locale}/#about-us`} // Use locale for consistency
                      className="bg-[#F15625] text-white lg:px-11 px-7 lg:py-5 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-[#F15625] lg:grow-0 grow"
                    >
                      {g("viewLiveDeals")}
                    </Link>
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white lg:px-11 px-4 lg:py-5 py-2.5 rounded-sm inline-block menu-btn lg:grow-0 grow leading-[1.2] lg:text-xl text-xs font-['Outfit-SemiBold'] border rtl:font-sans rtl:font-semibold border-white"
                    >
                      {g("orderViaWhatsapp")}
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 lg:flex hidden justify-end items-end">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-52 text-center flex justify-center flex-col items-center gap-5"
                  >
                    <img src="icons/whatsapp-logo.svg" alt="" className="w-16" />
                    <p className="text-white">{t("dealAndJoin")}</p>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default HeroSection;
