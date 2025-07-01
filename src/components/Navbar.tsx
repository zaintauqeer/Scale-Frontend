"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const g = useTranslations("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Extract the path without locale prefix
  const pathWithoutLocale = pathname?.split("/").slice(2).join("/");
  const basePath = "/" + pathWithoutLocale;

  return (
    <nav className="lg:px-20 px-8 relative z-20">
      <div className="flex items-center justify-between w-full py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" className="lg:w-60 w-24" alt="" />
          </Link>
        </div>

        {/* Desktop Menu - hidden on mobile */}
        <div
          className={`hidden lg:flex items-center space-x-6 text-xl ${
            basePath === "/" ? "text-white" : "text-[#222222]"
          }`}
        >
          <Link
            href={`/${pathname?.split("/")[1]}/deals`}
            className={`${basePath === "/deals" ? "text-[#F05526]" : ""} `}
          >
            {t("deals")}
          </Link>
          <Link
            href={`/${pathname?.split("/")[1]}/#how-it-works`}
            className={`${
              basePath === "/how-it-works" ? "text-[#F05526]" : ""
            }`}
          >
            {t("howItWorks")}
          </Link>
          <Link
            href={`/${pathname?.split("/")[1]}/#about-us`}
            className={`${basePath === "/about-us" ? "text-[#F05526]" : ""}`}
          >
            {t("about")}
          </Link>
          <Link
            href={`/${pathname?.split("/")[1]}/#contact-us`}
            className={`${basePath === "/contact-us" ? "text-[#F05526]" : ""}`}
          >
            {t("contactUs")}
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Language Dropdown */}
          <div className="hidden lg:block">
            <div className="relative">
              <LanguageSwitcher />
            </div>
          </div>

          {/* View Deals Button - always visible */}
          <Link
            href={`/${pathname?.split("/")[1]}/deals`}
            className={`bg-[#F15625] text-white lg:px-6 px-4 lg:me-0 me-2  lg:py-4 py-2 rounded-sm lg:ms-8 leading-[1.2] font-['Outfit-SemiBold'] 
 rtl:font-sans rtl:font-semibold lg:text-base text-xs`}
          >
            {g("viewLiveDeals")}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-white rounded-sm border-0 p-1.5"
          >
            <img
              src={
                basePath === "/"
                  ? "/icons/menu-icon.svg"
                  : "/icons/menu-icon-black.svg"
              }
              alt="Menu"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-50 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-4">
          <button onClick={() => setIsMenuOpen(false)} className="self-end p-2">
            <img
              src="/icons/close-icon.svg"
              alt="Close menu"
              className="w-6 h-6"
            />
          </button>

          <div className="flex flex-col space-y-4 mt-8">
            <Link
              href={`/${pathname?.split("/")[1]}/deals`}
              className={`${
                basePath === "/deals" ? "text-[#F05526]" : ""
              } text-lg`}
            >
              {t("deals")}
            </Link>
            <Link
              href={`/${pathname?.split('/')[1]}/#how-it-works`}
              className={`${
                basePath === "/how-it-works" ? "text-[#F05526]" : ""
              } text-lg`}
            >
              {t("howItWorks")}
            </Link>
            <Link
              href={`/${pathname?.split('/')[1]}/#about-us`}
              className={`${
                basePath === "/about-us" ? "text-[#F05526]" : ""
              } text-lg`}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${pathname?.split('/')[1]}/#contact-us`}
              className={`${
                basePath === "/contact-us" ? "text-[#F05526]" : ""
              } text-lg`}
            >
              {t("contactUs")}
            </Link>
            <div className="lg:mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
