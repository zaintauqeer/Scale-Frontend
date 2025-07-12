"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import DetailDealBox from "@/components/DetailDealBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealTabs from "@/components/DealTabs";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface Deal {
  _id: string;
  featureImage: string;
  images?: string[];
  title: { en: string; ar: string };
  pricePerUnit?: number;
  interval?: number;
  location: { en: string; ar: string };
  endDate?: string;
  startDate?: string;
  quantityOrder?: number;
  totalSold?: number;
  minorder?: number;
  supplier: { en: string; ar: string };
  deliveryArea?: string;
  description?: { en: string; ar: string };
  termsAndNotes?: { en: string; ar: string };
  paymentInstructions?: { en: string; ar: string };
  whatsappMessages?: { en: string; ar: string };
  prefilledMessages?: { en: string; ar: string };
  unit?: { en: string; ar: string };
}

export default function DealDetails() {
  const t = useTranslations("deals");
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = params as { locale: string };
  
  
  let id = params?.id as string | undefined;

  // Fallback to pathname if id is not found
  if (!id && pathname) {
    const segments = pathname.split("/").filter(Boolean);
    id = segments[segments.length - 1];
    console.log("🔍 Fallback id from pathname:", id);
  }

  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);

  function handleBuyNow(deal: Deal) {
    const cartItem = {
      _id: deal._id,
      title: deal.title,
      pricePerUnit: deal.pricePerUnit,
      interval:deal.interval,
    };
    localStorage.setItem("cart", JSON.stringify([cartItem]));
    localStorage.removeItem("cartForm");
    router.push(`/${locale}/cart`);
  }

  // Helper: Calculate time left (fixed to include seconds)
  // function calculateTimeLeft(endDateStr?: string): string {
  //   if (!endDateStr) return "—";
  //   const now = new Date();
  //   const end = new Date(endDateStr);
  //   const diff = end.getTime() - now.getTime();
  //   if (diff <= 0) return t("Expired");
  //   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //   const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //   const mins = Math.floor((diff / (1000 * 60)) % 60);
  //   const secs = Math.floor(diff / 1000) % 60; // Correct seconds calculation
  //   return `${days}days:${hrs}h:${mins}m:${secs}s`;
  // }

  // Helper: Format dates in English regardless of locale
  function formatDate(dateStr?: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  useEffect(() => {
    async function fetchDeal() {
      try {
        console.log("🟡 Fetching for ID:", id);
        const res = await fetch("https://scale-gold.vercel.app/api/items/Allitems", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.table(data);

        const items = Array.isArray(data) ? data : data.deals || data.items || [];
        console.table(items);

        const found = items.find((d: Deal) => d._id === id);
        console.log("🎯 Found deal:", found);

        setDeal(found ?? null);
      } catch (error) {
        console.error("❌ Error fetching deal:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchDeal();
    } else {
      console.log("❌ No dealId found");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#F05526]"></div>
      </div>
    );
  }

  if (!deal) {
    return (
      <>
        <div className="mt-8">
          <Navbar />
        </div>
        <main className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{t("notFound")}</h1>
            <div className="text-gray-500">
              <p>Deal ID: {id || "undefined"}</p>
              <p>Current URL: {window.location.href}</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const progress =
    deal.quantityOrder && deal.totalSold
      ? Math.min(Math.round((deal.totalSold / deal.quantityOrder) * 100), 100)
      : 0;

  return (
    <>
      <div className="mt-8">
        <Navbar />
      </div>
      <DetailDealBox
        description={deal.description || { en: "No description available", ar: "لا يوجد وصف متاح" }}
        termsAndNotes={deal.termsAndNotes || { en: "No terms available", ar: "لا توجد شروط متاحة" }}
        paymentInstructions={deal.paymentInstructions || { en: "No payment instructions available", ar: "لا توجد تعليمات دفع متاحة" }}
        whatsappMessages={deal.whatsappMessages || { en: "", ar: "" }}
        prefilledMessages={deal.prefilledMessages || { en: "", ar: "" }}
        image={
          deal.featureImage?.startsWith("http")
            ? deal.featureImage
            : `https://scale-gold.vercel.app/uploads/${deal.featureImage || ""}`
        }
        images={
          deal.images?.map((img) =>
            img.startsWith("http") ? img : `https://scale-gold.vercel.app/uploads/${img}`
          ) || []
        }
        title={deal.title}
        price={deal.pricePerUnit ? `${deal.pricePerUnit}${deal.unit ? `/${deal.unit[locale as keyof typeof deal.unit]}` : "/Unit"}` : t("Ask")}
        location={deal.location}
        timeLeft={deal.endDate || ""}
        progress={progress}
        supplierName={deal.supplier}
        minOrder={deal.minorder?.toString() || "—"}
        deliveryTimeframe={
          deal.startDate && deal.endDate
            ? `${formatDate(deal.startDate)} — ${formatDate(deal.endDate)}`
            : "N/A"
        }
        delivery={deal.deliveryArea || "Included"}
        onBuyNow={() => handleBuyNow(deal)}
      />
      <DealTabs
        description={deal.description || { en: "No description available", ar: "لا يوجد وصف متاح" }}
        termsAndNotes={deal.termsAndNotes || { en: "No terms available", ar: "لا توجد شروط متاحة" }}
        paymentInstructions={deal.paymentInstructions || { en: "No payment instructions available", ar: "لا توجد تعليمات دفع متاحة" }}
      />
      <Footer />
    </>
  );
}