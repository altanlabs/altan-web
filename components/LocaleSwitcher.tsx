"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { setCookie } from 'cookies-next';


export default function LocaleSwitcher({ locale }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    setCookie('NEXT_LOCALE', newLocale, { expires: date, path: '/' })
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    router.refresh();
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className="bg-transparent text-white rounded p-1 [&>option]:bg-gray-800 [&>option]:text-white"
    >
      <option key="en" value="en">
        English
      </option>
      <option key="es" value="es">
        Español
      </option>
      <option key="de" value="de">
        Deutsch
      </option>
      <option key="ar" value="ar">
        العربية
      </option>
      <option key="it" value="it">
        Italiano
      </option>
      <option key="pt" value="pt">
        Português
      </option>
      <option key="fr" value="fr">
        Français
      </option>
      <option key="zh" value="zh">
        中文
      </option>
      <option key="ja" value="ja">
        日本語
      </option>
      <option key="ru" value="ru">
        Русский
      </option>
    </select>
  );
}
