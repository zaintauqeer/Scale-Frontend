'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
// import { useTranslations } from 'next-intl';

export default function Navbar() {
  const pathname = usePathname();
  // const t = useTranslations('navbar');
  
  // Extract the path without locale prefix
  const pathWithoutLocale = pathname?.split('/').slice(2).join('/');
  const basePath = '/' + pathWithoutLocale;

  return (
    <nav className='lg:px-20 px-8'> 
      <div className="flex items-center justify-between w-full py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" className='lg:w-60 w-24' alt="" />
          </Link>
        </div>

        {/* Desktop Menu - hidden on mobile */}
        <div className={`hidden md:flex items-center space-x-6 text-xl ${basePath === '/' ? 'text-white' : ''}`}>
          <Link href="/deals" className={`${basePath === '/deals' ? 'text-[#f25550]' : ''} `}>
            Deals
          </Link>
          <Link href="/how-it-works" className={`${basePath === '/how-it-works' ? 'text-[#f25550]' : ''}`}>
            How it works
          </Link>
          <Link href="/about" className={`${basePath === '/about' ? 'text-[#f25550]' : ''}`}>
            About
          </Link>
          <Link href="/contact-us" className={`${basePath === '/contact-us' ? 'text-[#f25550]' : ''}`}>
            Contact us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Language Dropdown */}
          <div className="hidden md:block">
            <div className="relative">
              <LanguageSwitcher />
              
            </div>
          </div>

          {/* View Deals Button - always visible */}
          <Link href={'/deals'} className="bg-[#F15625] text-white lg:px-6 px-4 lg:mr-0 mr-2  lg:py-4 py-2 rounded-sm ml-8 menu-btn leading-[1.2] font-['Outfit-SemiBold']">
            View Live Deals
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-white rounded-sm border-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}