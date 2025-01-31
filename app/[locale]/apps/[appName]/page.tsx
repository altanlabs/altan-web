// pages/apps/[appName].tsx
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import axios from 'axios';
import IntegrateApp from "@/components/Marketplace/resource/IntegrateApp";
import ProductPreview from "@/components/Marketplace/ProductPreview";
import { Container, Chip } from '@mui/material'
import Cta02 from "@/components/Landing/components/cta-02";

interface FindAgentParams {
  title: string;
}

const findApp = async ({ title }: FindAgentParams) => {
  const formattedTitle = title.replace(/-/g, ' ');
  const url = `https://api.altan.ai/platform/marketplace/app?name=${formattedTitle}&relationships=${true}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200 && response.data) {
      return response.data.products[0];
    } else {
      console.error("Failed to fetch app:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching app:", error);
    return null;
  }
};


interface ItemPageParams {
  params: {
    appName: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { locale, appName } }: ItemPageParams) {
  const app = await findApp({ title: appName });
  return {
    title: `Automate ${app?.name} - Integrate ${app?.name} with Altan` || "404 - App Not found - Altan",
    description: `${app?.description}. Use it with the most advanced automation software of the world.` || "Integrate any app and with Altan",
    keywords: ['Integration', 'Automate', 'Altan'],
    alternates: {
      canonical: `https://altan.ai/apps/${locale !== 'en' ? `${locale}/` : ''}${appName.toLowerCase().trim().replace(/\s+/g, '-')}`
    },
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
    },
  }
};


const AppPage = async ({ params: { locale, appName } }: ItemPageParams) => {
  const { t, resources } = await initTranslations(locale, ["home"]);

  const app = await findApp({ title: appName });
  if (!app) {
    return (
      <>
        <section className="py-20 lg:py-25 xl:py-30">
          404 - App not found
        </section>
      </>
    )
  }

  return (
    <main className="grow">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={["home"]}
      >
        <IntegrateApp app={app} />

        <Container className="pt-4 pb-16">
          <div className="mb-8">
            <Chip color="primary" label={`${app?.actions?.items?.length} Actions`} className="mr-2" />
            <Chip color="info" label={`${app?.webhooks?.items?.length || 0} Webhooks`} className="mr-2" />
          </div>
          {
            !!app.actions?.items?.length && (
              <ProductPreview
                // app_id={app.id}
                type="action"
                products={app.actions.items}
              />
            )
          }
          {
            !!app.webhooks?.items?.length && (
              <ProductPreview
                // app_id={app.id}
                type="webhook"
                products={app.webhooks.items}
              />
            )
          }

        </Container>
        <Cta02 />
      </TranslationsProvider>
    </main>
  )
};

export default AppPage;
