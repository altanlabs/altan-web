import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Integrations from "@/components/Marketplace/Integrations";

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, ["apps"]);
  return {
    title: "Apps",
    description: "Apps",
    keywords: ['Automation', 'Altan', 'apps'],
    creator: "Altan",
    publisher: "Altan",
    applicationName: "Altan",
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

export default async function AppsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t, resources } = await initTranslations(locale, ["marketplace"]);

  return (
    <main>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={["common","marketplace"]}
      >
        <Integrations isAppMode/>
        {/* <IntegrationsSection />
        <IntegrationsList /> */}
      </TranslationsProvider>
    </main>

  );
}
