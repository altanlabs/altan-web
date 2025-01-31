// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import dynamic from "next/dynamic";
// import Link from "next/link";

// const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
//   ssr: false,
// });

// function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   };
//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
//   const sampleArcs = [
//     {
//       order: 1,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -22.9068,
//       endLng: -43.1729,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 1,
//       startLat: 28.6139,
//       startLng: 77.209,
//       endLat: 3.139,
//       endLng: 101.6869,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 1,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -1.303396,
//       endLng: 36.852443,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 3.139,
//       endLng: 101.6869,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 2,
//       startLat: -15.785493,
//       startLng: -47.909029,
//       endLat: 36.162809,
//       endLng: -115.119411,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: -33.8688,
//       startLng: 151.2093,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: 21.3099,
//       startLng: -157.8581,
//       endLat: 40.7128,
//       endLng: -74.006,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 3,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: 11.986597,
//       startLng: 8.571831,
//       endLat: -15.595412,
//       endLng: -56.05918,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: -34.6037,
//       startLng: -58.3816,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 4,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 48.8566,
//       endLng: -2.3522,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 14.5995,
//       startLng: 120.9842,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: -33.8688,
//       endLng: 151.2093,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 5,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 48.8566,
//       endLng: -2.3522,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: -15.432563,
//       startLng: 28.315853,
//       endLat: 1.094136,
//       endLng: -63.34546,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: 37.5665,
//       startLng: 126.978,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 6,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 51.5072,
//       endLng: -0.1276,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: -19.885592,
//       startLng: -43.951191,
//       endLat: -15.595412,
//       endLng: -56.05918,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: 48.8566,
//       startLng: -2.3522,
//       endLat: 52.52,
//       endLng: 13.405,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 7,
//       startLat: 52.52,
//       startLng: 13.405,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: -8.833221,
//       startLng: 13.264837,
//       endLat: -33.936138,
//       endLng: 18.436529,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: 49.2827,
//       startLng: -123.1207,
//       endLat: 52.3676,
//       endLng: 4.9041,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 8,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: 40.7128,
//       endLng: -74.006,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: -22.9068,
//       endLng: -43.1729,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 9,
//       startLat: 1.3521,
//       startLng: 103.8198,
//       endLat: -34.6037,
//       endLng: -58.3816,
//       arcAlt: 0.5,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: -22.9068,
//       startLng: -43.1729,
//       endLat: 28.6139,
//       endLng: 77.209,
//       arcAlt: 0.7,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 31.2304,
//       endLng: 121.4737,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 10,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 52.3676,
//       endLng: 4.9041,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: 41.9028,
//       startLng: 12.4964,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: -6.2088,
//       startLng: 106.8456,
//       endLat: 31.2304,
//       endLng: 121.4737,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 11,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 1.3521,
//       endLng: 103.8198,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 34.0522,
//       startLng: -118.2437,
//       endLat: 37.7749,
//       endLng: -122.4194,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 35.6762,
//       startLng: 139.6503,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.2,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 12,
//       startLat: 22.3193,
//       startLng: 114.1694,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: 52.52,
//       startLng: 13.405,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: 11.986597,
//       startLng: 8.571831,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 13,
//       startLat: -22.9068,
//       startLng: -43.1729,
//       endLat: -34.6037,
//       endLng: -58.3816,
//       arcAlt: 0.1,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//     {
//       order: 14,
//       startLat: -33.936138,
//       startLng: 18.436529,
//       endLat: 21.395643,
//       endLng: 39.883798,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//   ];
//   return (
//     <div style={{width: '100%', height: 'auto', maxHeight: '700px'}}>
//       <World data={sampleArcs} globeConfig={globeConfig} />;
//     </div>
//   )
 
  
// }

// const Contact = () => {
//   /**
//    * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
//    * Reason: To fix rehydration error
//    */
//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* <!-- ===== Contact Start ===== --> */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0">
//         <div className="relative mx-auto max-w-c-1390 px-7.5 pt-1 lg:px-15 lg:pt-1 xl:px-20 xl:pt-2">
//           <div className="absolute left-0 top-0 -z-1 h-2/3 w-full"></div>
//           <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
//             <GlobeDemo/>
//             {/* <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
//             >
//               <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Send a message
//               </h2>

//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-11.5 flex">
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
//                   ></textarea>
//                 </div>

//                 <div className="flex flex-wrap gap-4 xl:justify-between ">
//                   <div className="mb-4 flex md:mb-0">
//                     <input
//                       id="default-checkbox"
//                       type="checkbox"
//                       className="peer sr-only"
//                     />
//                     <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
//                       <svg
//                         className="opacity-0 peer-checked:group-[]:opacity-100"
//                         width="10"
//                         height="8"
//                         viewBox="0 0 10 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
//                           fill="white"
//                         />
//                       </svg>
//                     </span>
//                     <label
//                       htmlFor="default-checkbox"
//                       className="flex max-w-[425px] cursor-pointer select-none pl-5"
//                     >
//                       By clicking Checkbox, you agree to use our “Form” terms
//                       And consent cookie usage in browser.
//                     </label>
//                   </div>

//                   <button
//                     aria-label="send message"
//                     className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
//                   >
//                     Send Message
//                     <svg
//                       className="fill-white"
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
//                         fill=""
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </motion.div> */}

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 2, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
//             >
//               <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Find us
//               </h2>

              

//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   United States
//                 </h3>
//                 <p>2055 Limestone Rd, Wilmington, Delaware 19808</p>
//               </div>
              
//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Spain
//                 </h3>
//                 <p>
//                   Pg. de Joan de Borbó, 99, Barcelona, 08039, Spain
//                 </p>
//               </div>

//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Germany
//                 </h3>
//                 <p>Bildungscampus 1, 74076 Heilbronn</p>
//               </div>

//               <Link
//                 href="https://app.altan.ai/form/85c78d00-6f5a-44f2-9d8a-64c4e261cd7f"
//                 className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
//               >
//                 Contact us
//               </Link>
             
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Contact End ===== --> */}
//     </>
//   );
// };

// export default Contact;
