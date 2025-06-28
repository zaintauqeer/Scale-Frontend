"use client";

import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};


const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const t = useTranslations('faq')
  const faqs: FAQItem[] = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a1'),
    },
    {
      question: t('q3'),
      answer: t('a1'),
    },
    {
      question: t('q4'),
      answer: t('a1'),
    },
    {
      question: t('q5'),
      answer: t('a1'),
    },
  ];

  return (
    <div className="lg:px-20 px-5 lg:my-24 my-8">
      <div className="flex flex-wrap gap-y-16">
        <div className="lg:ps-10 lg:w-2/6 w-full lg:pe-7">
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-[#F15625]"></div>
            <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">{t('subTitle')}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <h2 className="lg:text-5xl text-3xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5 max-w-lg">{t('title')}</h2>
          </div>
          <p className="text-[#00000099] text-xl max-w-2xl">
            {t('description')}
          </p>
          <div className="bg-[#F05526] py-5 px-6 mt-10 rounded-xl">
            <h4 className="flex items-center gap-x-2 text-white lg:text-xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold"><img src="icons/chat-icon.svg" alt="" /> You have different questions?</h4>
            <p className="lg:text-lg mt-2 text-[#FFFFFF99]">Our team will answer all your questions,we ensure a quick responce</p>
            <Link href="#contact-us" className="lg:py-3 lg:px-11 py-2 px-4 text-[#1A3D38] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold bg-[#FFFFFF] rounded-sm inline-block mt-5">Contact our team</Link>
          </div>
        </div>

        <div className="lg:pe-10 lg:w-4/6 w-full lg:ps-7">
          <div className="">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F4F4F4] rounded-xl p-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="lg:text-xl font-[Outfit-Medium] rtl:font-sans rtl:font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 lg:text-base text-xs transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 text-[#00000099]">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
