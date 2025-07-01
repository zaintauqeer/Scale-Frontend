import React from "react";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("features");
  return (
    <div className="lg:px-20 px-5 lg:my-24 my-8">
      <div className="text-center">
        <div className="flex items-center gap-2 justify-center">
          <span className="uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
            {t("subTitle")}
          </span>
          <div className="w-12 h-0.5 bg-[#F15625]"></div>
        </div>

        <h2 className="lg:text-5xl text-3xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold my-5">
          {t("title")}
        </h2>
        <p className="text-[#00000099] text-xl max-w-2xl m-auto">
          {t("description")}
        </p>
        <div className="lg:mt-14 lg:mb-0 mb-64 mt-64 lg:py-16 relative lg:px-24 px-14 isolate lg:bg-[linear-gradient(90deg,#fff_0%,#fff_10.33%,#1A3D38_10.33%,#1A3D38_90.67%,#fff_90.67%,#fff_100%)] bg-[#1A3D38]">
          <img
            src="/s-mark-green.svg"
            className="block absolute left-0 top-0 lg:translate-y-0 -translate-y-[calc(50%-50px)] lg:h-full max-w-full -z-10"
            alt=""
          />
          <img
            src="/s-mark-green.svg"
            className="block absolute right-0 lg:top-0 bottom-0 lg:translate-y-0 translate-y-[calc(50%-50px)] lg:h-full max-w-full -z-10"
            alt=""
          />
          <div className="flex flex-wrap">
            <div className="md:w-1/3 w-full lg:border-e lg:border-b-0 border-b border-dashed border-[#FFFFFF99]">
              <div className="text-center place-items-center text-white lg:px-15 lg:pb-0 pb-6">
                <img
                  src="/icons/safety-certification.svg"
                  alt=""
                  className="w-[41px]"
                />
                <h5 className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-xl mt-6 mb-4">
                  {t("title1")}
                </h5>
                <p>{t("description1")}</p>
              </div>
            </div>
            <div className="md:w-1/3 w-full lg:border-e lg:border-b-0 border-b border-dashed border-[#FFFFFF99]">
              <div className="text-center place-items-center text-white lg:px-15 lg:py-0 py-6">
                <img src="/icons/whatsapp.svg" alt="" className="w-[52px]" />
                <h5 className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-xl mt-6 mb-4">
                  {t("title2")}
                </h5>
                <p>{t("description2")}</p>
              </div>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="text-center place-items-center text-white lg:px-15 lg:pt-0 pt-6">
                <img src="/icons/Delivery.svg" alt="" className="w-[52px]" />
                <h5 className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-xl mt-6 mb-4">
                  {t("title3")}
                </h5>
                <p>{t("description3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
