"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

interface DealTabsProps {
  description: { en: string; ar: string };
  termsAndNotes: { en: string; ar: string };
  paymentInstructions: { en: string; ar: string };
}

const DealTabs = ({ description, termsAndNotes, paymentInstructions }: DealTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("dealTabs");
  const locale = useLocale() as "en" | "ar";

  const tabHeadings = [t("Description"), t("Terms & Notes"), t("Payment Instruction")];

  return (
    <div className="lg:px-20 px-5">
      <div className="flex border-b border-[#00000033] mb-4">
        {tabHeadings.map((heading, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 font-[Outfit-Medium] rtl:font-sans rtl:font-medium focus:outline-none transition-colors duration-200 border-b-2 ${
              activeTab === idx ? "border-[#F05526] text-[#F05526]" : "border-transparent text-[#222222]"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {heading}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 0 && (
          <div className="text-[#666666] text-xl">
            <h4 className="text-2xl text-[#222222] mb-5 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              {t("Notes")}
            </h4>
            <p>{description[locale] || t("descriptionFallback")}</p>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h4 className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium text-[#222222] text-2xl">
              {t("Terms & Important Notes")}
            </h4>
            <p className="text-[#666666] mt-5  text-xl">{termsAndNotes[locale] || t("termsNotesFallback")}</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h4 className="text-2xl text-[#222222] mb-5 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              {t("Payment Guidelines")}
            </h4>
            <p className="text-[#666666] text-xl">{paymentInstructions[locale] || t("paymentInstructionsFallback")}</p>
            {/* <p className="text-[#666666] text-xl">
              To secure your spot in this group deal, we kindly ask you to
              complete the payment in advance using the secure link we’ll send
              after you join. This helps us confirm your participation and
              include your order in the collective shipment with others. Once
              your payment is successfully received, your order will be
              officially locked in at the discounted price — no surprises or
              hidden charges. You’ll receive a confirmation receipt via email or
              WhatsApp, along with updates about the next steps in the
              fulfillment process. If you have any questions during or after
              payment, our support team is just a message away and happy to
              assist. Thank you for being part of the <strong>best</strong> shopping starts here!
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DealTabs;