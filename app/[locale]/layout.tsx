"use client";
import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import ScrollToTop from "@/components/legacy/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Script from "next/script";
import { dir } from "i18next";
import ToasterContext from "@/components/context/ToastContext";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Preloader from "@/components/Preloader";
import Header from '@/components/Landing/components/ui/header'
import Footer from '@/components/Landing/components/ui/footer'
import '../css/style.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const LAYOUT_LOCALES = ["common", "header", "footer"];

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://app.altan.ai/jssnippet/cbsnippet.js";
  //   script.async = true;
  //   script.id = "dade8627-dc51-4166-84b7-bd705f152a71";
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const [translations, setTranslations] = useState<{
    t: any;
    resources: any;
  } | null>(null);
  

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t, resources } = await initTranslations(locale, LAYOUT_LOCALES);
      setTranslations({ t, resources });
    };
    fetchTranslations();
  }, [locale]);

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <meta
          name="facebook-domain-verification"
          content="y2urt029wv6tv11xdbv1r582i3ptdj"
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXMH838');`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXMH838"
            height="0"
            width="0"
            className="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"> 

        <NextUIProvider>
          <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
            {/* <Lines /> */}
            {!translations ? (
              <Preloader />
            ) : (
              <TranslationsProvider
                resources={translations.resources}
                locale={locale}
                namespaces={LAYOUT_LOCALES}
              >
                <ToasterContext />
                <Header locale={locale} />

                  {children}

                <Footer />
              </TranslationsProvider>
            )}
            <ScrollToTop />
          </ThemeProvider>
        </NextUIProvider>
       </div > 

      </body>
    </html>
  );
}
