"use client";
import { Stack, Typography, Card } from '@mui/material';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';
import Link from 'next/link';
import IconRenderer from './IconRenderer';

const App = ({ connOrApp }) => {
  const appLink = connOrApp.name.toLowerCase().trim().replace(/\s+/g, '-');
  return (
    <Link href={`/apps/${appLink}`}>
      <Card className="p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
        <Stack direction="row" alignItems="center" spacing={1} width="100%" >
          <IconRenderer icon={connOrApp.icon} color={connOrApp?.meta_data?.color} />
          <Typography variant="h5" noWrap className="text-black dark:text-white">
            {connOrApp.name.replace(/\s*\[[^\]]+\]/, '').trim()}
          </Typography>
        </Stack>
        <Typography variant="caption" className="text-black dark:text-white">
          {connOrApp.description}
        </Typography>
      </Card>
    </Link>
  )
}

export default App;