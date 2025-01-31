// 'use client';
// import React, { useState } from 'react';
// import { Switch, FormControlLabel, Typography } from '@mui/material';
// import SubscriptionGroup from "@/components/@money/@subscriptions/SubscriptionGroup";
// import styles from '../style.module.scss';

// const PricingSection = ({ altanerData }) => {
//   const [showClosedSource, setShowClosedSource] = useState(true);
//   const distributionMode = altanerData?.template?.details?.cloning_settings?.distribution_mode || 'closed';

//   const renderPricingOptions = () => {
//     if (distributionMode === 'closed') {
//       return (
//         <SubscriptionGroup
//           subscriptionIds={[altanerData.template.subscription_group_id]}
//           title=''
//           hideTotal={true}
//           finalMessage='Start 7 day free trial'
//           hideBuilder={true}
//         />
//       );
//     } else if (distributionMode === 'open') {
//       return (
//         <div>
//           <h3>Open Source License</h3>
//           {/* <ProductWidget id={altanerData.template.product_id} disabled={true} /> */}
//         </div>
//       );
//     } else if (distributionMode === 'mixed' ) {
//       return (
//         <>
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={showClosedSource}
//                 onChange={() => setShowClosedSource(!showClosedSource)}
//                 name="sourceToggle"
//                 color="primary"
//               />
//             }
//             label={showClosedSource ? "Closed Source" : "Open Source"}
//           />
//           {showClosedSource ? (
//             altanerData.template.subscription_group_id ? (
//               <SubscriptionGroup
//                 subscriptionIds={[altanerData.template.subscription_group_id]}
//                 stepper={false}
//                 title=''
//                 hideTotal={true}
//                 finalMessage='Start 7 day free trial'
//                 hideBuilder={true}
//               />
//             ) : (
//               <div>
//                 <h3>Subscription information is unavailable.</h3>
//               </div>
//             )
//           ) : (
//             <div>
//               <h3>Open Source License</h3>
//                 {/* <ProductWidget id={altanerData.template.product_id} disabled={true}/> */}
//             </div>
//           )}
//         </>
//       );
//     }
//   };

//   return (
//     <section className={styles.section}>
//       <div className="max-w-screen-lg mx-auto py-16 text-center">
//         <Typography variant="h4" className="mb-4">
//           Pricing Options
//         </Typography>
//         <Typography variant="body1" className="mb-8">
//           {distributionMode === 'mixed'
//             ? "Choose between a closed-source subscription or open-source license."
//             : distributionMode === 'closed'
//               ? "This solution is available as a closed-source subscription."
//               : "This solution is available under an open-source license."}
//         </Typography>
//         {renderPricingOptions()}
//       </div>
//     </section>
//   );
// };

// export default PricingSection;