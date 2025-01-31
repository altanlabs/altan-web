// pages/apps/[appName].tsx
import CTA from "@/components/legacy/CTA";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import axios from 'axios';
import UseAction from "@/components/Marketplace/resource/UseAction";
import { Container, Stack, Typography, Chip } from "@mui/material";
import { capitalize } from "lodash";

interface FindActionParams {
  actionName: string;
  appName: string;
  locale: string;
}

const findAction = async ({ locale, actionName, appName }: FindActionParams) => {
  const url = `https://api.altan.ai/platform/marketplace/action?ac=${actionName}&ap=${appName}&l=${locale}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error("Failed to fetch action:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching action:", error);
    return null;
  }
};


interface ItemPageParams {
  params: {
    actionName: string;
    appName: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { locale, actionName, appName } }: ItemPageParams) {
  const action = await findAction({ locale, actionName, appName });
  return {
    title: `Automate ${action?.name} - Integrate ${action?.name} with Altan` || "404 - Action Not found - Altan",
    description: `${action?.description}. Use it with the most advanced automation software of the world.` || "Integrate any action with Altan",
    keywords: [
      "Integration",
      "Automate",
      "Altan",
      ...Object.entries(action?.locations?.properties ?? {}).map(
        ([k, v]: [string, any]) => v.title ?? capitalize(k.replace("_", " "))
      ),
    ],
    alternates: {
      canonical: `https://altan.ai/apps/${locale !== 'en' ? `${locale}/` : ''}${appName.toLowerCase().trim().replace(/\s+/g, '-')}/actions/${actionName.toLowerCase().trim().replace(/\s+/g, '-')}`
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


const ActionPage = async ({ params: { locale, actionName, appName } }: ItemPageParams) => {
  const { t, resources } = await initTranslations(locale, ["home"]);

  const action = await findAction({ actionName, appName, locale });
  if (!action) {
    return (
      <>
        <section className="py-20 lg:py-25 xl:py-30">
          404 - Action not found
        </section>
      </>
    )
  }

  return (
    <main>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={["home"]}
      >
        <UseAction action={action} />
        <Container className="pt-4">
          <Stack spacing={2}>
            <Typography variant="h5">Method</Typography>
            <Chip color="primary" label={action.method} sx={{ width: 50 }} />

            <Typography variant="h5">Parameters</Typography>
            {!!action?.locations?.properties
              ? Object.entries(action.locations.properties).map(
                ([k, p]: [string, any], i) => (
                  <Stack
                    key={`loc-property-${i}`}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Stack>
                      <Typography variant="h6">
                        {p.title ?? capitalize(k.replace("_", " "))}
                      </Typography>
                      <Chip color="primary" label={p.type} />
                    </Stack>
                    <Typography variant="caption">{p.description}</Typography>
                  </Stack>
                )
              )
              : null}
          </Stack>
        </Container>
        <section className="py-10 lg:py-15 xl:py-10">
          <CTA />
        </section>
      </TranslationsProvider>
    </main>
  )
};

export default ActionPage;
