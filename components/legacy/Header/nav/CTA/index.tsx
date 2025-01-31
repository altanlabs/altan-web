"use client";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/react";


const CTA = ({ locale }) => {
  const { t } = useTranslation("common");

  return (
    <div className="mt-7 flex items-center gap-6 md:mt-0 hidden md:flex">
      {/* <ThemeToggler /> */}
      <LocaleSwitcher locale={locale} />
      <Link
        href="https://dashboard.altan.ai"
      >
        <Button className="bg-white color-white text-gray-700 rounded-full py-3 px-6 hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
>
          {t("access")}

        </Button>
      </Link>
    </div>
  )
};

export default CTA;