'use client'
import React from 'react';
import deals from '@/components/deals.json';
import DetailDealBox from '@/components/DetailDealBox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealTabs from '@/components/DealTabs';
import { useTranslations } from 'next-intl';
type Props = {
  params: Promise<{ id: string}>;
  // locale: string;
}
export default function DealDetails({ params }: Props) {
  const {id} = React.use(params)
  const deal = deals.find((d: { id: string }) => d.id === id);
  const t = useTranslations('deals');
  if (!deal) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('notFound')}</h1>
        </div>
      </main>
    );
  }
  return (
    <>
      <div className='mt-8'>
        <Navbar />
      </div>
      <DetailDealBox {...deal} />
      <DealTabs />
      <Footer />
    </>
  );
}