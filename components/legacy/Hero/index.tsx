"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Highlight } from "@/components/legacy/ui/hero-highlight";
import { Stack, Typography } from '@mui/material';
import Link from "next/link";
import { FlipWords } from "@/components/legacy/ui/flip-words";

export default function Index({ locale }) {
  const { t } = useTranslation(["common", "home"]);
  const [businessWords, setBusinessWords] = useState<string[]>([""," Workflows", " AI", " Forms", " Pay"]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundSpheres}>
        {[...Array(25)].map((_, index) => {
          const size = `${Math.random() * 10 + 5}px`;
          return (
            <div
              key={index}
              className={styles.sphere}
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `-${Math.random() * 20}s`,
              }}
            ></div>
          );
        })}
      </div>

      <div className={styles.content}>
        <div className="max-w-c-1315 text-center">
          <h2 className="flex flex-row items-center justify-center motion-subheader dark:text-white">
              Altan  <FlipWords className="flip-words-container" words={businessWords.slice(1)} />
          </h2>
          <h1 className="flex flex-col items-center motion-header dark:text-white xl:text-hero gap-5">
            <Highlight className="text-black dark:text-white">
              {t("home:autopilot")}
            </Highlight>
          </h1>

          <h3>
            <Typography variant="h5" className="text-black dark:text-white">
              
              {t("home:slogan")}
            </Typography>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Link href="https://dashboard.altan.ai" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-blue-600 text-white rounded-full py-3 px-6 hover:bg-blue-700 transition-colors"
              >
                {t("common:get_started_free")}
              </button>
            </Link>
            <Link href="https://calendar.app.google/ABJcEPvQn2hqjgcEA" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-white text-gray-700 border border-gray-300 rounded-full py-3 px-6 hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>
                  {t("common:bookdemo")}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


// const loginWithGoogle = useCallback(async () => {
//   try {
//     const params: Record<string, string> = {
//       origin: getBaseUrl(),
//       origin_redirect: "https://dashboard.altan.ai"
//     };
//     const hostname = window.location.hostname;
//     if (hostname === "localhost") {
//       params.dev = "345647hhnurhguiefiu5CHAOSDOVEtrbvmirotrmgi";
//     }

//     const url = constructBaseUrl("https://api.altan.ai/auth", '/login/google', params);

//     const width = 600;
//     const height = 600;
//     const left = (window.screen.width / 2) - (width / 2);
//     const top = (window.screen.height / 2) - (height / 2);
//     const windowFeatures = `toolbar=no, menubar=no, width=${width}, height=${height}, top=${top}, left=${left}`;
//     const popup = window.open(url, 'GoogleLogin', windowFeatures);

//     if (!popup) throw new Error("Popup blocked");

//     const checkPopup = setInterval(() => {
//       if (popup.closed) {
//         clearInterval(checkPopup);
//         window.location.href = "https://dashboard.altan.ai";
//       }
//     }, 1000);
//   } catch (error) {
//     console.error("Login with Google failed:", error);
//   }
// }, []);