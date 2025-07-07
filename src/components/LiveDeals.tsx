// "use client"

// import React from "react";
// import DealBox from "./DealBox";
// import deals from "./deals.json";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useTranslations } from "next-intl";

// const LiveDeals = () => {
//   const t = useTranslations("liveDeals");
//   const pathname = usePathname();

  

//   return (
//     <div className="lg:px-20 lg:my-20 my-8 py-14">
//       <div className="">
//         <div className="flex items-center gap-2 px-5 lg:px-0">
//           <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
//             {t("subTitle")}
//           </span>
//           <div className="w-12 h-0.5 bg-[#F15625]"></div>
//         </div>
//         <h2 className="text-5xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 px-5 lg:px-0">
//           {t("title")}
//         </h2>
//         <div className="flex gap-4 overflow-x-hidden pb-4 my-8 px-5 lg:px-0">
//           <div className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
//             <img src="/icons/mage_filter.svg" alt="" />
//           </div>

//           <button className="flex items-center gap-2 border cursor-pointer border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
//             <img src="/icons/hat-hard.svg" alt="" />
//             <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">
//               {t("Block")}
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
//         {deals.map((deal) => (
//           <Link
//             key={deal.id}
//             href={`/${pathname?.split("/")[1]}/deals/${deal.id}`}
//             className="block"
//           >
//             <DealBox {...deal} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LiveDeals;





// "use client";

// import React, { useState, useEffect } from "react";
// import DealBox from "./DealBox";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useTranslations } from "next-intl";

// const LiveDeals = () => {
//   const t = useTranslations("liveDeals");
//   const pathname = usePathname();

//   const [deals, setDeals] = useState([]);

//   useEffect(() => {
//     const fetchDeals = async () => {
//       try {
//         const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems", {
//           method: "GET",
//         });

//         const data = await res.json();
//         const list = Array.isArray(data) ? data : data.deals || data.items || [];
//         setDeals(list);
//         console.log("DEALS:", list);
//       } catch (error) {
//         console.error("Failed to fetch deals:", error);
//       }
//     };

//     fetchDeals();
//   }, []);

//   const calculateTimeLeft = (endDateStr) => {
//     if (!endDateStr) return "—";
//     const now = new Date();
//     const end = new Date(endDateStr);
//     const diff = end - now;
//     if (diff <= 0) return "Expired";
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const mins = Math.floor((diff / (1000 * 60)) % 60);
//     const secs = Math.floor((diff / 1000) % 60);
//     return `${days}days: ${hrs}h: ${mins}m:${secs}s`;
//   };

//   return (
//     <div className="lg:px-20 lg:my-20 my-8 py-14">
//       {/* Header */}
//       <div>
//         <div className="flex items-center gap-2 px-5 lg:px-0">
//           <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
//             {t("subTitle")}
//           </span>
//           <div className="w-12 h-0.5 bg-[#F15625]" />
//         </div>
//         <h2 className="text-5xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 px-5 lg:px-0">
//           {t("title")}
//         </h2>
//         <div className="flex gap-4 overflow-x-hidden pb-4 my-8 px-5 lg:px-0">
//           <div className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
//             <img src="/icons/mage_filter.svg" alt="" />
//           </div>
//           <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
//             <img src="/icons/hat-hard.svg" alt="" />
//             <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">
//               {t("Block")}
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Deal List */}
//       {deals.length === 0 ? (
//         <p className="text-center text-gray-500 px-5">{t("No live deals available")}</p>
//       ) : (
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
//           {deals.map((deal) => (
//             <Link
//               key={deal._id}
//               href={`/${pathname?.split("/")[1] || "en"}/deals/${deal._id}`}
//               className="block"
//             >
//               <DealBox
//                 image={
//                   deal.featureImage?.startsWith("http")
//                     ? deal.featureImage
//                     : `https://scale-gold.vercel.app/uploads/${deal.featureImage || ""}`
//                 }
//                 title={deal.title.en || t("Untitled")}
//                 price={deal.pricePerUnit ? `${deal.pricePerUnit}/Unit` : t("Ask")}
//                 location={deal.location.en || "—"}
//                 timeLeft={calculateTimeLeft(deal.endDate)}
//                 progress={
//                   deal.quantityOrder
//                     ? Math.round(Math.min(((deal.minorder ?? 0) / deal.quantityOrder)) * 100, 100)
//                     : 0
//                 }
//                 // supplierImg="/supplier-default.png"
//                 supplierName={deal.supplier.en || "—"}
//                 minOrder={deal.minorder?.toString() || "—"}
//                 deliveryTimeframe={
//                   deal.startDate && deal.endDate
//                     ? `${new Date(deal.startDate).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'short',
//                         day: 'numeric'
//                       })} - ${new Date(deal.endDate).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'short',
//                         day: 'numeric'
//                       })}`
//                     : "N/A"
//                 }
                
                
//                 delivery={deal.deliveryArea || "Included"}
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveDeals;







"use client";

import React, { useState, useEffect } from "react";
import DealBox from "./DealBox";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Deal {
  _id: string;
  title: { en: string };
  featureImage?: string;
  pricePerUnit?: number;
  location: { en: string };
  minorder?: number;
  quantityOrder?: number;
  startDate?: string;
  endDate?: string;
  deliveryArea?: string;
  supplier: { en: string };
  key: string; // to allow extra fields without error
}

const LiveDeals: React.FC = () => {
  const t = useTranslations("liveDeals");
  const pathname = usePathname();

  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems", {
          method: "GET",
        });

        const data = await res.json();
        const list = Array.isArray(data) ? data : data.deals || data.items || [];
        setDeals(list);
        console.log("DEALS:", list);
      } catch (error) {
        console.error("Failed to fetch deals:", error);
      }
    };

    fetchDeals();
  }, []);

  const calculateTimeLeft = (endDateStr?: string): string => {
    if (!endDateStr) return "—";
    const now = new Date();
    const end = new Date(endDateStr);
    const diff = end.getTime() - now.getTime();
    if (diff <= 0) return "Expired";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return `${days}days: ${hrs}h: ${mins}m:${secs}s`;
  };

  return (
    <div className="lg:px-20 lg:my-20 my-8 py-14">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 px-5 lg:px-0">
          <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
            {t("subTitle")}
          </span>
          <div className="w-12 h-0.5 bg-[#F15625]" />
        </div>
        <h2 className="text-5xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 px-5 lg:px-0">
          {t("title")}
        </h2>
        <div className="flex gap-4 overflow-x-hidden pb-4 my-8 px-5 lg:px-0">
          <div className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
            <img src="/icons/mage_filter.svg" alt="" />
          </div>
          <button className="flex items-center gap-2 border border-[#CCCCCC] px-4 py-2 rounded-xs min-w-fit hover:bg-gray-50">
            <img src="/icons/hat-hard.svg" alt="" />
            <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#666666] lg:text-xl">
              {t("Block")}
            </span>
          </button>
        </div>
      </div>

      {/* Deal List */}
      {deals.length === 0 ? (
        <p className="text-center text-gray-500 px-5">{t("No live deals available")}</p>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
          {deals.map((deal) => (
            <Link
              key={deal._id}
              href={`/${pathname?.split("/")[1] || "en"}/deals/${deal._id}`}
              className="block"
            >
              <DealBox
                image={
                  deal.featureImage?.startsWith("http")
                    ? deal.featureImage
                    : `https://scale-gold.vercel.app/uploads/${deal.featureImage || ""}`
                }
                title={deal.title?.en || t("Untitled")}
                price={deal.pricePerUnit ? `${deal.pricePerUnit}/Unit` : t("Ask")}
                location={deal.location?.en || "—"}
                timeLeft={calculateTimeLeft(deal.endDate)}
                progress={
                  deal.quantityOrder
                    ? Math.round(Math.min(((deal.minorder ?? 0) / deal.quantityOrder)) * 100)
                    : 0
                }
                supplierName={deal.supplier?.en || "—"}
                minOrder={deal.minorder?.toString() || "—"}
                deliveryTimeframe={
                  deal.startDate && deal.endDate
                    ? `${new Date(deal.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })} - ${new Date(deal.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}`
                    : "N/A"
                }
                delivery={deal.deliveryArea || "Included"}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveDeals;
