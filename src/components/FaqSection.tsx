"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who is Scale for?",
    answer: "Scale is built for construction material yards that want to save on purchasing. It’s also for suppliers and manufacturers who want to sell larger volumes more easily.",
  },
  {
    question: "How does group buying help yards?",
    answer: "Scale is built for construction material yards that want to save on purchasing. It’s also for suppliers and manufacturers who want to sell larger volumes more easily.",
  },
  {
    question: "When will my order be delivered?",
    answer: "Scale is built for construction material yards that want to save on purchasing. It’s also for suppliers and manufacturers who want to sell larger volumes more easily.",
  },
  {
    question: "What happens if the group deal doesn’t reach the target?",
    answer: "Scale is built for construction material yards that want to save on purchasing. It’s also for suppliers and manufacturers who want to sell larger volumes more easily.",
  },
  {
    question: "How do I place an order?",
    answer: "Scale is built for construction material yards that want to save on purchasing. It’s also for suppliers and manufacturers who want to sell larger volumes more easily.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:px-20 px-5 lg:my-24 my-8">
      <div className="flex flex-wrap gap-y-4">
        <div className="lg:w-2/6 w-full">
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-[#F15625]"></div>
            <span className="uppercase text-[#F15625] font-[Outfit-SemiBold]">FAQS</span>
          </div>
          <div className="flex justify-between items-baseline">
            <h2 className="text-5xl font-[Outfit-Bold] my-5 max-w-lg">Frequently Asked Question</h2>
          </div>
          <p className="text-[#00000099] text-xl max-w-2xl">
            Loved by millions, enjoyed in over 100 countries worldwide!
          </p>
        </div>

        <div className="lg:w-4/6 w-full">
          <div className="">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F4F4F4] rounded-xl p-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-xl font-[Outfit-Medium]">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
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
