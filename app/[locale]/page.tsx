
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

import Hero from '@/components/Landing/components/hero'
import Clients from '@/components/Landing/components/clients'
import Features from '@/components/Landing/components/features'
import Features02 from '@/components/Landing/components/features-02'
import Features03 from '@/components/Landing/components/features-03'
import TestimonialsCarousel from '@/components/Landing/components/testimonials-carousel'
import Features04 from '@/components/Landing/components/features-04'
import Testimonials from '@/components/Landing/components/testimonials'
import Cta from '@/components/Landing/components/cta'
import IntegrationsSection from "@/components/Landing/integrations/integrations-section";
import YouTubeDemos from "@/components/Landing/components/YouTubeDemos";
import Community from "@/components/Landing/components/community";


export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, ["common", "home"]);
  return {
    title: `${t("title")}` || "404 - Job Not found",
    description: `${t("description")}` || "404 - Job Not found",
    keywords: `${t("keywords")}` || ['Automation', 'Altan'],
    creator: "Altan",
    publisher: "Altan",
    applicationName: "Altan",
    alternates: {
      canonical: `https://altan.ai/${locale !== 'en' ? `${locale}/` : ''}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  };
};

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { resources } = await initTranslations(locale, ["common", "home"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["common", "home"]}
    >
      <main className="grow">
        <Hero />
        <Community />
        {/* <Clients locale={locale} /> */}
        {/* <YouTubeDemos/> */}
        {/* <TestimonialsCarousel /> */}
        <Features02 />
        <IntegrationsSection />
        {/* <Features03 locale={locale} /> */}
        {/* <Features04 locale={locale} /> */}
        <Testimonials />
        <Cta />
      </main>
    </TranslationsProvider>
  );
}
