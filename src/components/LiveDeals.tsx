"use client";

import React, { useEffect, useState } from "react";
import DealBox from "./DealBox";
import { useRouter } from "next/navigation"; // Ensure useRouter is imported
import { useTranslations, useLocale } from "next-intl";

interface Deal {
  _id: string;
  title: { en: string; ar: string };
  featureImage?: string;
  images?: string[];
  pricePerUnit?: number;
  marketPrice?: number;
  unit?: { en: string; ar: string };
  location: { en: string; ar: string };
  minorder?: number;
  minRequiredBuyers?: number;
  quantityOrder?: number;
  totalSold?: number;
  startDate?: string;
  endDate?: string;
  deliveryArea?: string;
  supplier: { en: string; ar: string };
  description: { en: string; ar: string };
  termsAndNotes: { en: string; ar: string };
  paymentInstructions: { en: string; ar: string };
  whatsappMessages: { en: string; ar: string };
  prefilledMessages: { en: string; ar: string };
  category?: { en: string; ar: string };
  onBuyNow?: () => void;
}

interface Category {
  _id: string;
  name: { en: string; ar: string }; // Updated to support multilingual names
}

const LiveDeals: React.FC = () => {
  const t = useTranslations("liveDeals");
  const locale = useLocale() as "en" | "ar";


  const router = useRouter();
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

//---------------------All Items Api

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems");
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.deals || data.items || [];
        setDeals(list);
        setFilteredDeals(list);
      } catch (error) {
        console.error("Failed to fetch deals:", error);
      }
    };
    fetchDeals();
  }, []);


  //------------------Categories Api

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://scale-gold.vercel.app/api/getAllCategories");
        const result = await res.json();
  
        const transformedCategories = result.map((cat: { _id: string; name_en: string; name_ar: string }) => ({
          _id: cat._id,
          name: {
            en: cat.name_en,
            ar: cat.name_ar,
          },
        }));
        console.log(transformedCategories)
        setCategories(transformedCategories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
  
    fetchCategories();
  }, []);

  

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredDeals(deals);
    } else {
      setFilteredDeals(
        deals.filter(
          (deal) =>
            deal.category?.en?.toLowerCase() ===
            selectedCategory.name.en.toLowerCase()
        )
      );
    }
  }, [selectedCategory, deals]);
  
  

  // timeLeft={deal.endDate || ""}: string => {
  //   if (!endDateStr) return "—";
  //   const now = new Date();
  //   const end = new Date(endDateStr);
  //   const diff = end.getTime() - now.getTime();
  //   if (diff <= 0) return t("Expired");
  //   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //   const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //   const mins = Math.floor((diff / (1000 * 60)) % 60);
  //   const secs = Math.floor((diff / (1000 * 60)) % 60);
  //   return `${days}days:${hrs}h:${mins}m:${secs}s`;
  // };


  //--------Deal click habdler
  const handleDealClick = (dealId: string) => {
    router.push(`/${locale}/deals/${dealId}`); // Navigate to detail page
  };


  //--------------------Buy Now Handler

  const handleBuyNow = (deal: Deal) => {
    const cartItem = {
      _id: deal._id,
      title: deal.title,
      pricePerUnit: deal.pricePerUnit,
    };
    localStorage.setItem("cart", JSON.stringify([cartItem]));
    localStorage.removeItem("cartForm");
    router.push(`/${locale}/cart`); // Navigate to cart page
  };


  //--------------------------JSX STARTS FROM HERE

  return (
    <div className="lg:px-20 lg:my-20 my-8 py-14">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 px-5 lg:px-0">
          <span className="uppercase text-[#F15625] font-semibold">{t("subTitle")}</span>
          <div className="w-12 h-0.5 bg-[#F15625]" />
        </div>
        <h2 className="text-5xl font-bold my-5 px-5 lg:px-0">{t("title")}</h2>

        {/* Filters */}
        <div className="flex gap-4 overflow-x-auto pb-4 my-8 px-5 lg:px-0">
          <div 
           onClick={() => setSelectedCategory(null)}
          className="flex items-center gap-2 bg-[#F05526] text-white px-5 py-3.5 rounded-xs min-w-fit">
            <img src="/icons/mage_filter.svg" alt="" />
          </div>
          {categories.map((category) => (
           <button
           key={category._id}
           onClick={() =>
             setSelectedCategory(
               selectedCategory?._id === category._id ? null : category
             )
           }
           className={`flex items-center gap-2 border px-4 py-2 rounded-xs min-w-fit text-sm font-semibold ${
             selectedCategory?._id === category._id
               ? "bg-[#F05526] text-white"
               : "border-[#CCCCCC] text-[#666666] hover:bg-gray-100"
           }`}
         >
           {category.name[locale] || category.name.en}
         </button>
         
          ))}
        </div>
      </div>

      {/* Deals */}
      {filteredDeals.length === 0 ? (
        <p className="text-center text-gray-500 px-5">{t("NoLiveDeals")}</p>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
          {filteredDeals.map((deal) => (
            <div
              key={deal._id}
              onClick={() => handleDealClick(deal._id)}
              className="cursor-pointer"
            >
              <DealBox
                image={
                  deal.featureImage?.startsWith("http")
                    ? deal.featureImage
                    : `https://scale-gold.vercel.app/uploads/${deal.featureImage || ""}`
                }
                title={deal.title}
                
                  price={deal.pricePerUnit ? `${deal.pricePerUnit}${deal.unit ? `/${deal.unit[locale]}` : "/Unit"}` : t("Ask")}
                location={deal.location}
                timeLeft={deal.endDate || ""}
                progress={
                  deal.quantityOrder && deal.totalSold
                    ? Math.round(Math.min(deal.totalSold / deal.quantityOrder, 1) * 100)
                    : 0
                }
                supplierName={deal.supplier}
                minOrder={deal.minorder?.toString() || "—"}
                deliveryTimeframe={
                  deal.startDate && deal.endDate
                    ? `${new Date(deal.startDate).toLocaleDateString(locale)} - ${new Date(
                        deal.endDate
                      ).toLocaleDateString(locale)}`
                    : "N/A"
                }
                delivery={deal.deliveryArea || "Included"}
                description={deal.description}
                termsAndNotes={deal.termsAndNotes}
                paymentInstructions={deal.paymentInstructions}
                whatsappMessages={deal.whatsappMessages}
                prefilledMessages={deal.prefilledMessages}
                onBuyNow={() => handleBuyNow(deal)} // Triggers cart navigation
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveDeals;