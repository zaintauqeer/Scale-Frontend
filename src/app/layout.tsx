import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
// import { appWithTranslation } from 'next-i18next';


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Scale",
  description: "",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
