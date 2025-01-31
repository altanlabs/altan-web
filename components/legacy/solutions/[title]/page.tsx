// // pages/solutions/[title].tsx
// import SolutionHero from "@/components/legacy/Solutions/SolutionHero";
// import { solutionData } from "@/components/legacy/Solutions/solutionData";
// import DescriptionSection from "@/components/legacy/DescriptionSection";
// import SolutionSections from "@/components/legacy/Solutions/SolutionSections";
// import CTA from "@/components/legacy/CTA";
// import initTranslations from "@/app/i18n";
// import TranslationsProvider from "@/components/TranslationsProvider";


// export async function generateMetadata({ params }) {
//   const currentSolution = findSolutionByTitle(params.title);
//   return {
//     title: `${currentSolution?.title} Automation - Altan` || "404 - Solution Not found",
//     description: currentSolution?.subtitle || "404 - Solution Not found",
//     keywords: currentSolution?.tags || ['Automation', 'Altan'],
//     creator: currentSolution?.author || "Altan",
//     publisher: "Altan",
//     applicationName: "Altan",
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true
//       }
//     },
//     // openGraph: {
//     //   title: currentSolution?.title || "Run your business on autopilot",
//     //   description: currentSolution?.subtitle || "404 - Job Not found",
//     //   siteName: "Altan",
//     //   images: [{
//     //     url: currentSolution?.image || "404 - Job Not found",
//     //     alt: currentSolution?.title || "404 - Job Not found",
//     //   }]
//     // }
//   }
// };


// const findSolutionByTitle = (title: string) => {
//   return solutionData.find(sol => sol.id === title);
// };

// export default async function JobPage({ params: { locale, title } }: {
//   params: { title: string, locale: string }
// }) {
//   const { t, resources } = await initTranslations(locale, ["home"]);

//   const currentSolution = findSolutionByTitle(title);
//   if (!currentSolution) {
//     return (
//       <>
//         <section className="py-20 lg:py-25 xl:py-30">
//           404 - Solution not found
//         </section>
//       </>
//     )
//   }
//   return (
//     <main>
//       <TranslationsProvider
//         resources={resources}
//         locale={locale}
//         namespaces={["home"]}
//       >
//         <SolutionHero title={currentSolution.title} subtitle={currentSolution?.subtitle || ""} />
//         <DescriptionSection description={currentSolution.description || ""}/>
//         <SolutionSections sections={currentSolution.sections}/>
//         <CTA/>
//       </TranslationsProvider>
//     </main>
//   )
// };

