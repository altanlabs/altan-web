// "use client";

// import React, { useState } from 'react';
// import { MultiStepLoader as Loader } from "../legacy/ui/multi-step-loader";


// const JobWorkflows = ({ job }) => {
//   return (
//     <>
//       <section className="py-10 lg:py-15 xl:py-10 px-2">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <h3 className='mb-10 text-3xl font-bold  xl:text-sectiontitle2'> Workflows</h3>
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
//             {job.workflows.map((workflow, index) => (
//               <div className="card" key={index}>
//                 <div className="card-body">
//                   <div>
//                   <h4 className='text-2xl '>{workflow.name}</h4>
//                   <p className="text-gray-600">{workflow.benefits}</p>
//                   </div>
//                   <Loader key={index} loadingStates={workflow.modules} loading={true} duration={2000} />      
//                 </div>
//                 <div className="card-footer">
//                   <p>Tags: {workflow.tags.join(', ')}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default JobWorkflows;


