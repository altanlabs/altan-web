import { Suspense } from 'react';
import InterfaceView from '@/components/interface-view';
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

export async function generateMetadata({
  params: { locale, name }
}: {
  params: { locale: string; name: string }
}) {
  const { t } = await initTranslations(locale, ["common"]);
  return {
    title: `${name} · Altan`,
    description: `Interface preview for ${name}`,
    creator: "Altan",
    publisher: "Altan",
    applicationName: "Altan",
    alternates: {
      canonical: `https://altan.ai/${locale !== 'en' ? `${locale}/` : ''}a/${name}`
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
}

export default async function Page({ 
  params: { locale, name } 
}: { 
  params: { locale: string; name: string } 
}) {
  const { resources } = await initTranslations(locale, ["common"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["common"]}
    >
      <main className="grow">
        <Suspense fallback={<div>Loading...</div>}>
          <InterfaceView name={name} />
        </Suspense>
      </main>
    </TranslationsProvider>
  );
}
