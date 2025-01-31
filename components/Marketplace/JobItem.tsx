"use client";
import { Job } from "@/types/job";
import { motion } from "framer-motion";
import Link from "next/link";
// import JobTeam from "../Job/JobTeam";

const JobItem = ({ job }: { job: Job }) => {
  const { title, image, subtitle, team } = job;
  const formatTitle = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  return (
    <>
      <Link href={`/jobs/${formatTitle(title)}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top rounded-lg bg-white p-12 my-9 shadow-solid-8 dark:bg-blacksection"
        >
          <div className="px-4">
            <div className="header-container flex flex-col lg:flex-row justify-between items-center">

              <div className="text-container">
                <h3 className="line-clamp-2 inline-block text-lg font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                  {title}
                </h3>
                {/* <div className="header-container">
                  <img src={image} alt={title} width={32} />
                </div> */}
                <p className="line-clamp-2 block text-lg text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle4">
                  {subtitle}
                </p>
              </div>

              {/* {(team && window.innerWidth > 1024) &&  (
                <JobTeam team={job.team} size={window.innerWidth < 1024 ? "sm" : "lg"} />
              )} */}

            </div>
            {/* {(team && window.innerWidth < 1024) && (
              <div className="mt-4">
               <JobTeam team={job.team} size="md"/>
              </div>
            )} */}
          </div>
        </motion.div>
      </Link>

    </>
  );
};


export default JobItem;
