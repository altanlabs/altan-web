import initTranslations from "@/app/i18n";
import PayAsYouGo from "@/components/@money/@subscriptions/PayAsYouGo";
import SubscriptionGroup from "@/components/@money/@subscriptions/SubscriptionGroup";

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, ["home"]);
  return {
    title: `Pricing · Altan`,
    description: `${t("description")}` || "Pricing",
    keywords: `${t("keywords")}` || ['Automation', 'Altan'],
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

export default async function PricingPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // const { t, resources } = await initTranslations(locale, ["marketplace"]);

  return (
    <main className="w-full pt-[90px]">
      <SubscriptionGroup subscriptionIds={['000d0e69-53b9-4494-b215-00dd1e5f7586']} />
    </main>
  );
}
