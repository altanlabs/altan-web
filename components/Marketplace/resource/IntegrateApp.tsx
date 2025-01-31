"use client";
import IconRenderer from './IconRenderer';
import Image from 'next/image';
import { Stack, Chip } from '@mui/material';
import { Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const IntegrateApp = ({ app }) => {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-32">
          <div className="md:w pt-10 px-2">
            <Stack direction='row' spacing={2} style={{ alignItems: 'center' }}>
              <IconRenderer icon={app.icon} size={64} color={app?.meta_data?.color || 'inherit'} />
              <h1 className="text-6xl md:text-7xl font-semibold">
                {app.name.replace(/\s*\[[^\]]+\]/, '').trim()}
              </h1>
            </Stack>
            {app.description &&
              <h2 className="mb-7 text-1xl xl:text-sectiontitle2 mt-4">
                {app.description}
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

export default IntegrateApp;
