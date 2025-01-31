"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { useTranslation } from "react-i18next";
import Double from '@/components/legacy/Double';

const Feature = () => {
  const { t } = useTranslation();

  return (
    // <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: `${t("5")}`,
            subtitle: `${t("6")}`,
            description: `${t("7")}`,
          }}
        />
        
        <div className="mt-12 flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
          <Double projects={
            [{
              name: t("8"),
              description: "",
              src: "https://api.altan.ai/platform/media/4d86e2bf-cebb-47f9-b9aa-2eca51c22031",
              year: t("9"),
            },
            {
              name: t("10"),
              description: "",
              src: "https://api.altan.ai/platform/media/edd6ed99-654d-4268-b604-a5ceee860962",
              year: t("11"),
            },
            ]
          } />
          
          {/* <div className="mb-8 lg:mb-0 items-center justify-center">
            <video width="420" height="280" preload="none" autoPlay muted loop className="rounded-lg">
              <source src="https://api.altan.ai/platform/media/4d86e2bf-cebb-47f9-b9aa-2eca51c22031" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{t("8")}</h3>
              <h4 className="text-md my-2">{t("9")}</h4>
            </div>
          </div>
          <div>
            <video width="420" height="280" preload="none" autoPlay muted loop className="rounded-lg">
              <source src="https://api.altan.ai/platform/media/edd6ed99-654d-4268-b604-a5ceee860962"  />
              Your browser does not support the video tag.
            </video>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{t("10")}</h3>
              <h4 className="text-md my-2">{t("11")}</h4>
            </div>
          </div> */}
        </div>
      </div>
    // </section>
  );
};


export default Feature;



// import { EvervaultCard, Icon } from "../ui/evervault-card";
// import {
//   TextRevealCard,
//   TextRevealCardDescription,
//   TextRevealCardTitle,
// } from "../ui/text-reveal-card";


// function SafeAI() {
//   return (
//     <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

//       <EvervaultCard text="safeAI" />

//       <h2 className="dark:text-white text-black mt-4 text-sm font-light">
//         Invest in a platform where innovation is synonymous with security. Trust in technology that protects and performs.
//       </h2>
//       <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
//         Unmatched Security
//       </p>
//     </div>
//   );
// }

// function Technology() {
//   return (
//     <TextRevealCard
//       text="Expertise in your field,"
//       revealText="Innovation in ours."
//     >
//       <TextRevealCardTitle>
//         Delegate with ease.
//       </TextRevealCardTitle>
//       <TextRevealCardDescription>
//         Engage the future of automation and watch your business transform.
//       </TextRevealCardDescription>
//     </TextRevealCard>
//   );
// }