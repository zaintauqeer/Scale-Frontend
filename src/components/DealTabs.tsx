import React, { useState } from "react";

const tabHeadings = ["Description", "Terms & Notes", "Payment Instruction"];

const DealTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:px-20 px-5">
      <div className="flex border-b border-[#00000033] mb-4">
        {tabHeadings.map((heading, idx) => (
          <button
            key={heading}
            className={`px-4 py-2 font-[Outfit-Medium] focus:outline-none transition-colors duration-200 border-b-2 ${activeTab === idx
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
            <h4 className="text-2xl text-[#222222] mb-5 font-[Outfit-Medium]">
              Notes
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultricies porttitor amet
              quis faucibus in sapien phasellus tincidunt. Urna nunc vitae donec
              purus est arcu posuere sed. Ut turpis nam consectetur laoreet quis
              mauris tempus. Amet morbi pellentesque sagittis integer. Amet mi
              odio maecenas sed fermentum suspendisse enim in ornare. Pulvinar
              penatibus amet facilisis est gravida tellus.
            </p>
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium]">
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
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium]">
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
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium]">
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
            <h4 className="text-2xl text-[#222222] mb-5 mt-6 font-[Outfit-Medium]">
              Market Price Comparison
            </h4>
            <div className="flex gap-x-5">
              <ul className="text-[#666666] mt-5 text-xl list-disc pl-4 flex flex-col gap-y-5">
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
            <h4 className="font-[Outfit-Medium] text-[#222222] text-2xl">
              Terms & Important Notes
            </h4>
            <ul className="text-[#666666] mt-5 text-xl list-disc pl-4 flex flex-col gap-y-5">
              <li>
                <span className="font-[Outfit-Medium]">
                  Group-Based Pricing:
                </span>
                <br /> The final deal price is valid only if the minimum number
                of buyers join before the deadline. If the deal does not meet
                the required number of participants, your payment will be
                refunded in full.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Payment Confirmation:
                </span>
                <br /> Your order is only confirmed once full payment is
                received through the provided secure payment link. Unpaid orders
                will not be processed.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Estimated Delivery Time:
                </span>
                <br /> Ordersare dispatched only after the deal closes and the
                bulk order is processed. Delivery timelines may vary depending
                on the supplier location and shipment volume.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Product Availability:
                </span>
                <br /> In rare cases where the product becomes unavailable after
                the deal ends, you will be notified and refunded promptly.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Refunds & Cancellations:
                </span>
                <br /> Refunds are only issued if the deal does not reach the
                minimum buyer count or if the order is canceled by the supplier.
                Buyer-initiated cancellations after payment may not be eligible
                for refunds.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Support & Communication:
                </span>
                <br /> All updates regarding your order will be shared via
                WhatsApp or email. For any questions, feel free to contact our
                support team directly through the quick support link provided.
              </li>
              <li>
                <span className="font-[Outfit-Medium]">
                  Images & Descriptions:
                </span>
                <br /> Product images are for reference only. Please review
                product specs and descriptions carefully before joining a deal.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h4 className="text-2xl text-[#222222] mb-5 font-[Outfit-Medium]">
              Payment Guidelines
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
