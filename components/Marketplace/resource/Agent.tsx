"use client";
import { Avatar, Stack, Typography, Card, CardActionArea } from '@mui/material';
import Link from 'next/link';
import ProductWidget from '@/components/legacy/Message/widgets/ProductWidget';

export default function Agent({ agent }) {
  const agentLink = agent.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/marketplace/agent/${agentLink}`}>
      {/* <ProductWidget id={agent.product_id} disabled={true}/> */}
      {/* <Card className="p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" style={{ height: '150px' }}>
        <>
          <Stack direction="row" spacing={2} sx={{ alignContent: 'center', alignItems: 'center' }}>
            <Avatar alt={agent.name} src={agent?.avatar_url} sx={{ width: 100, height: 120 }} variant="rounded" />
            <Stack>
              <Typography variant="h6" noWrap>{agent.name}</Typography>
              <Typography style={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>{agent?.description || "No description"}</Typography>
            </Stack>
          </Stack>
        </>
      </Card> */}
    </Link>

  );
}
