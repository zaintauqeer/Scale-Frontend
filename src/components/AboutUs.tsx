import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutUs");
  return (
    <div
      id="about-us"
      className="bg-[#F0F0F0] lg:px-20 px-5 lg:my-20 my-8 py-14"
    >
      <div className="flex items-center flex-wrap gap-y-5">
        <div className="md:w-1/2 w-full lg:pe-20">
          <div className="flex items-center lg:justify-start justify-center gap-2">
            <span className="lg:text-base text-xs uppercase text-[#F15625] font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">
              {t("subTitle")}
            </span>
            <div className="w-12 h-0.5 bg-[#F15625]"></div>
          </div>
          <h2 className="lg:text-5xl text-3xl lg:text-start text-center font-[Outfit-Bold] rtl:font-sans rtl:font-bold rtl:font-sans rtl:font-bold my-5">
            {t("title")}
          </h2>
          <p className="text-[#00000099] text-xl my-8 lg:text-start text-center">
            {t("description")}
          </p>
          <div className="mt-10 hidden lg:inline-block">
            <Link
              href="#"
              className="bg-[#F15625] text-white px-6 py-4 rounded-sm inline-block menu-btn leading-[1.2] text-xl font-['Outfit-SemiBold'] rtl:font-sans rtl:font-semibold border border-[#F15625]"
            >
              {t("link")}
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full place-items-end ">
          <div className="relative">
            <img src="/s-mark.svg" className="max-w-full" alt="" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-6 translate-x-3 h-full scale-y-95 ">
              <div
                className="h-full"
                style={{
                  WebkitMaskImage: "url(/s-mark.svg)",
                  maskImage: "url(/s-mark.svg)",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <img
                  src="/matterials.jpg"
                  className="object-cover scale-y-105 h-full"
                  alt="Materials shaped like S mark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:hidden text-center block">
        <Link
          href="#"
          className="bg-[#F15625] text-white px-4 py-2.5 rounded-sm inline-block menu-btn leading-[1.2] text-xs font-['Outfit-SemiBold'] rtl:font-sans rtl:font-semibold border border-[#F15625]"
        >
          {t("link")}
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
