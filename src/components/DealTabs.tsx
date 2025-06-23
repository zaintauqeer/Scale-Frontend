import React, { useState } from "react";
import { useTranslations } from 'next-intl'


const DealTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations('dealTabs')
  const tabHeadings = [t('Description'), t('Terms & Notes'), t('Payment Instruction')];
  return (
    <div className="lg:px-20 px-5">
      <div className="flex border-b border-[#00000033] mb-4">
        {tabHeadings.map((heading, idx) => (
          <button
            key={heading}
            className={`px-4 py-2 font-[Outfit-Medium] rtl:font-sans rtl:font-medium focus:outline-none transition-colors duration-200 border-b-2 ${activeTab === idx
              ? "border-[#F25550] text-[#F25550]"
              : "border-transparent text-[#222222]"
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
              {t('Notes')}
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet
              quis faucibus in sapien phasellus tincidunt. Urna nunc vitae donec
              purus est arcu posuere sed. Ut turpis nam consectetur laoreet quis
              mauris tempus. Amet morbi pellentesque sagittis integer. Amet mi
              odio maecenas sed fermentum suspendisse enim in ornare. Pulvinar
              penatibus amet facilisis est gravida tellus.
            </p>
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              Product 1:
            </h4>
            <p>
              (1) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <p>
              (2) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              Product 2:
            </h4>
            <p>
              (1) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <p>
              (2) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              Product 3:
            </h4>
            <p>
              (1) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <p>
              (2) Lorem ipsum dolor sit amet consectetur. Ultricies porttitor
              amet quis faucibus in sapien phasellus tincidunt
            </p>
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              Market Price Comparison
            </h4>
            <div className="flex gap-x-5">
              <ul className="text-[#666666] mt-5 text-xl list-disc ps-4 flex flex-col gap-y-5">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet quis faucibus in sapien phasellus tincidunt. Urna nunc vitae donec purus est arcu posuere sed. Ut turpis nam consectetur laoreet quis mauris tempus. Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet quis faucibus in sapien phasellus tincidunt. 
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet quis faucibus in sapien phasellus tincidunt. 
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet quis faucibus in sapien phasellus tincidunt. Urna nunc vitae donec purus est arcu posuere sed.
                </li>
              </ul>
              <img src="/chart.svg" className="hidden lg:block"/>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h4 className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium text-[#222222] text-2xl">
              {t('Terms & Important Notes')}
            </h4>
            <ul className="text-[#666666] mt-5 text-xl list-disc ps-4 flex flex-col gap-y-5">
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Group-Based Pricing')}:
                </span>
                <br />{t('para1')}
                refunded in full.
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Payment Confirmation')}:
                </span>
                <br />{t('para2')}
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Estimated Delivery Time')}:
                </span>
                <br />{t('para3')}
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Product Availability')}:
                </span>
                <br />{t('para4')}
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Refunds & Cancellations')}:
                </span>
                <br />{t('para5')}
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Support & Communication')}:
                </span>
                <br />{t('para6')}
              </li>
              <li>
                <span className="font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
                  {t('Images & Descriptions')}:
                </span>
                <br />{t('para7')}
              </li>
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h4 className="text-2xl text-[#222222] mb-5 font-[Outfit-Medium] rtl:font-sans rtl:font-medium">
              {t('Payment Guidelines')}
            </h4>
            <p className="text-[#666666] text-xl">
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
              assist. Thank you for being part of the ter shopping starts here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealTabs;
