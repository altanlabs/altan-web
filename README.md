# OPTIMAI WEBSITE


## INTERNATIONALIZATION


server-side example:

const { t, resources } = await initTranslations(locale, ["home"]);

{/* <h1>{(t("0"))}</h1> */}

client-side components:

Wrap with provider
```
<TranslationsProvider
    resources={resources}
    locale={locale}
    namespaces={["index"]}
>
{children}
</TranslationsProvider>
```

import { useTranslation } from "react-i18next";

component:
  const { t } = useTranslation();


## UI LIBRARIES


https://nextui.org/docs/components


https://nextjs.org/docs/pages/api-reference/components/link


https://ui.aceternity.com/components/



