// pages/[altaner]/index.tsx
import React from "react";
import AltanerClient from "@/components/Altaner/AltanerClient";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";


async function fetchAltanerData(title: string) {
  const response = await fetch(`https://api.altan.ai/platform/marketplace/templates/altaner/${title}`, { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error('Failed to fetch altaner data');
  }
  return response.json();
}

export async function generateMetadata({ params }: { params: { title: string; locale?: string } }) {
  const locale = params.locale || 'en';
  const altanerData = await fetchAltanerData(params.title);

  if (!altanerData) {
    return {
      title: '404 - Altaner Not Found',
      description: 'Altaner not found',
    };
  }

  const landing = altanerData.template.details.landing;
  const content = landing?.locales.find(l => l.language === locale)?.content 
    || landing?.locales.find(l => l.language === 'en')?.content
    || { title: altanerData.template?.public_name, description: altanerData.template?.description };

  return {
    title: `${content.title} · Altan`,
    description: content.description,
  };
}

export default async function AltanerPage({ params: { title, locale } }: { params: { title: string, locale: string } }) {
  try {
    const altanerData = await fetchAltanerData(title);
    const { resources } = await initTranslations(locale, ["common", "home"]);

    return (
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={["common", "home"]}
      >
        <main>
          <AltanerClient altanerData={altanerData} locale={locale} />
        </main>
      </TranslationsProvider>
    );
  } catch (error) {
    console.error('Error fetching altaner data:', error);
    return (
      <section className="py-20 lg:py-25 xl:py-30 ">
        404 - Altaner not found
      </section>
    );
  }
}
