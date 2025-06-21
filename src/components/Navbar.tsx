'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations('navbar');
  const g = useTranslations('global')
  
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
            {t('deals')}
          </Link>
          <Link href="/how-it-works" className={`${basePath === '/how-it-works' ? 'text-[#f25550]' : ''}`}>
            {t('howItWorks')}
          </Link>
          <Link href="/about" className={`${basePath === '/about' ? 'text-[#f25550]' : ''}`}>
            {t('about')}
          </Link>
          <Link href="/contact-us" className={`${basePath === '/contact-us' ? 'text-[#f25550]' : ''}`}>
            {t('contactUs')}
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
          <Link href={'/deals'} className={`bg-[#F15625] text-white lg:px-6 px-4 lg:me-0 me-2  lg:py-4 py-2 rounded-sm lg:ms-8 leading-[1.2] font-['Outfit-SemiBold'] lg:text-base text-xs`}>
            {g('viewLiveDeals')}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-white rounded-sm border-0 p-1.5">
            <img src="icons/menu-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}