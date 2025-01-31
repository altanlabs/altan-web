"use client";
import IconRenderer from './IconRenderer';
import Image from 'next/image';
import { Stack, Chip, Tooltip } from '@mui/material';
import { Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


const UseAction = ({ action }) => {
  return (
    <section className="mb-5 px-2 pt-35 pb-14">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex">
          <div className="md:w pt-10 px-2">
            <Link href="../">
              <Tooltip
                title={`Go back to all ${action.connection_type.name}'s actions.`}
              >
                <Button className="mb-4">
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <IconRenderer icon="mdi:chevron-left" />
                    <h6>{action.connection_type.name}</h6>
                  </Stack>
                </Button>
              </Tooltip>
            </Link>
            <Stack direction='row' spacing={2} alignItems="center" width="100%">
              <IconRenderer icon={action.connection_type.icon} size={58} color={action.connection_type.meta_data?.color || 'inherit'} />
              <h1 className="text-6xl md:text-7xl font-semibold truncate">
                {action.name.replace(/\s*\[[^\]]+\]/, '').trim()}
              </h1>
            </Stack>
            {action.description &&
              <h2 className="mb-7 text-1xl xl:text-sectiontitle2 mt-4">
                {action.description}
              </h2>
            }
            <a href="https://dashboard.altan.ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="shadow"
                endContent={<Icon icon="maki:arrow" />}
                className="bg-gradient-to-r from-indigo-300 to-blue-300 dark:from-indigo-500 dark:to-blue-500 shadow-lg mt-5">
                Try it out
              </Button>
            </a>
          </div>
        </div>
        <div className="px-8">
          <div className="relative">
            <Image
              src="/images/shape/shape-01.png"
              alt="shape"
              width={46}
              height={246}
              className="absolute -left-11.5 top-0"
            />
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={36.9}
              height={36.7}
              className="absolute bottom-0 right-0 z-10"
            />
            <Image
              src="/images/shape/shape-03.svg"
              alt="shape"
              width={21.64}
              height={21.66}
              className="absolute -right-6.5 bottom-0 z-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseAction;
