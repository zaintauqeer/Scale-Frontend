'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
// import Image from 'next/image';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'EN', flag: '/flags/en.png' },
    { code: 'ar', name: 'AR', flag: '/flags/ar.png' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleChange = (newLocale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 p-2 rounded-md ${
          pathname === '/' + locale ? 'text-black lg:text-white' : 'text-[#222222] lg:text-[#222222]'
        }`}
        
      
      >
        {/* <Image
          src={currentLanguage?.flag || ''}
          alt={`${currentLanguage?.name} flag`}
          width={21}
          height={16}
          className="border border-[#CCCCCC]"
        /> */}
        <span>{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
  <div className="absolute top-full mt-1 w-full bg-gray-800 rounded-md shadow-lg overflow-hidden">
    {languages.map((language) => (
      <button
        key={language.code}
        onClick={() => handleChange(language.code)}
        className="flex lg:justify-center items-center w-full p-2 hover:bg-gray-700 text-white"
      >
        {/* <Image
          src={language.flag}
          alt={`${language.name} flag`}
          width={20}
          height={20}
          className="rounded-sm"
        /> */}
        <span>{language.name}</span>
      </button>
    ))}
  </div>
)}

    </div>
  );
}