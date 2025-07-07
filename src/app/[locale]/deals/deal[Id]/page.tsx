// 'use client'
// import React from 'react';
// import deals from '@/components/deals.json';
// import DetailDealBox from '@/components/DetailDealBox';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import DealTabs from '@/components/DealTabs';
// import { useTranslations } from 'next-intl';
// type Props = {
//   params: Promise<{ id: string}>;
//   // locale: string;
// }
// export default function DealDetails({ params }: Props) {
//   const {id} = React.use(params)
//   const deal = deals.find((d: { id: string }) => d.id === id);
//   const t = useTranslations('deals');
//   if (!deal) {
//     return (
//       <main className="min-h-screen p-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-6">{t('notFound')}</h1>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <>
//       <div className='mt-8'>
//         <Navbar />
//       </div>
//       <DetailDealBox {...deal} />
//       <DealTabs />
//       <Footer />
//     </>
//   );
// }



'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DetailDealBox from '@/components/DetailDealBox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealTabs from '@/components/DealTabs';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';


interface Deal {
  _id: string;
  featureImage: string;
  images?: string[];
  title: { en: string };
  pricePerUnit: number;
  location: { en: string };
  endDate?: string;
  startDate?: string;
  quantityOrder?: number;
  minorder?: number;
  supplier: { en: string };
  termsEn?: string;
  deliveryArea?: string;
}



export default function DealDetails() {
  const t = useTranslations('deals');
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useRouter();

function handleBuyNow(deal: Deal) {
  // 🛒 Save to localStorage
  localStorage.setItem("cart", JSON.stringify([deal]));

  // 🚀 Go to checkout
  router.push("/en/checkout");
}
  
  // Debug: Log everything
  console.log("🔍 All params:", params);
  console.log("🔍 Pathname:", pathname);
  console.log("🔍 Search params:", searchParams.toString());
  
  // Try multiple approaches to get the ID
  let dealId: string | undefined;
  
  // Method 1: From params (dynamic route)
  dealId = params.dealId || params.id || params.slug || params['deal-id'];
  
  // Method 2: From URL path (extract last segment)
  if (!dealId && pathname) {
    const segments = pathname.split('/').filter(Boolean);
    dealId = segments[segments.length - 1];
  }
  
  // Method 3: From search params
  if (!dealId) {
    dealId = searchParams.get('id') || searchParams.get('dealId');
  }
  
  // Convert to string if it's an array
  const dealIdString = Array.isArray(dealId) ? dealId[0] : dealId;
  
  console.log("🧪 Final dealId:", dealIdString);
  
  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔧 Helper: Calculate time left
  function timeLeftUntil(endDateStr?: string) {
    if (!endDateStr) return '—';
    const now = new Date();
    const end = new Date(endDateStr);
    const diff = end.getTime() - now.getTime();
    if (diff <= 0) return 'Expired';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    return `${days}d ${hrs}h ${mins}m`;
  }

  // 🔧 Helper: Format dates
  function formatDate(dateStr?: string) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  // ✅ Fetch the deal
  useEffect(() => {
    async function fetchDeal(id: string) {
      try {
        console.log("🟡 Fetching for ID:", id);
        const res = await fetch('https://scale-gold.vercel.app/api/items/Allitems', {
          cache: 'no-store',
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        console.log("📦 Raw data:", data);
  
        const items = Array.isArray(data)
          ? data
          : data.deals || data.items || [];
  
        console.log("📋 Extracted items:", items);
  
        const found = items.find((d: any) => d._id === id);
        console.log("🎯 Found deal:", found);
  
        setDeal(found ?? null);
      } catch (error) {
        console.error("❌ Error fetching deal:", error);
      } finally {
        setLoading(false);
      }
    }
  
    if (dealIdString) {
      fetchDeal(dealIdString);
    } else {
      console.log("❌ No dealId found anywhere");
      setLoading(false);
    }
  }, [dealIdString]);

  // 🕑 Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-20 text-gray-500">
          <div className="mb-4">{t('loading')}…</div>
          <div className="text-sm text-gray-400">
            Looking for deal ID: {dealIdString || 'undefined'}
          </div>
        </div>
      </div>
    );
  }

  // ❌ Deal not found
  if (!deal) {
    return (
      <>
        <div className="mt-8">
          <Navbar />
        </div>
        <main className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{t('notFound')}</h1>
            <div className="text-gray-500">
              <p>Deal ID: {dealIdString || 'undefined'}</p>
              <p>Current URL: {pathname}</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ✅ Calculate progress
  const progress =
    deal.quantityOrder && deal.minorder
      ? Math.min(Math.round((deal.quantityOrder / deal.minorder) * 100), 100)
      : 0;

  // ✅ Render deal details
  return (
    <>
      <div className="mt-8">
        <Navbar />
      </div>

      <DetailDealBox
        image={
          deal.featureImage?.startsWith('http')
            ? deal.featureImage
            : `https://scale-gold.vercel.app/uploads/${deal.featureImage || ''}`
        }
        images={
          deal.images?.map((img) =>
            img.startsWith('http') ? img : `https://scale-gold.vercel.app/uploads/${img}`
          ) || []
        }
        title={deal.title?.en || 'Untitled'}
        price={deal.pricePerUnit ? `${deal.pricePerUnit}/Unit` : t('Ask')}
        location={deal.location?.en || '—'}
        timeLeft={timeLeftUntil(deal.endDate)}
        progress={progress}
        supplierName={deal.supplier?.en || '—'}
        minOrder={`${deal.minorder?.toString()} Units` || '—'}
        deliveryTimeframe={
          deal.startDate && deal.endDate
            ? `${formatDate(deal.startDate)} — ${formatDate(deal.endDate)}`
            : 'N/A'
        }
        delivery={deal.deliveryArea || deal.termsEn || 'Included'}
        onBuyNow={() => handleBuyNow(deal)}
      />

      <DealTabs />
      <Footer />
    </>
  );
}