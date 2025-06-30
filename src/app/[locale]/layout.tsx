import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
// import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Scale",
  description: "",
  icons: {
    icon: "/favicon.png", // Path to your favicon in /public
  },
};


async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
  //   <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
  //     <body className={`${outfit.variable} antialiased`}>
  //       <NextIntlClientProvider>
  //         {children}
  //       </NextIntlClientProvider>
  //     </body>
  //   </html>
  // );

  <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
  <head>
    <link rel="icon" href="/favicon.png" />
    <title>Scale</title>
  </head>
  <body className={`${outfit.variable} antialiased`}>
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  </body>
</html>
  );
}

export default RootLayout;
