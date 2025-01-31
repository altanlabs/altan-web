"use client"
import { Avatar, Card, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconRenderer from './IconRenderer';
import ConnectionType from './ConnectionType';

interface FlowProps {
  flow: {
    id: string;
    name: string;
    is_verified: boolean;
    description: string;
    public_details: {
      demo: string;
      connection_types: string[];
    };
    product: {
      price: number;
      account: {
        company: {
          logo_url: string;
          name?: string;
        }
      }
    };
  };
}

const Flow: React.FC<FlowProps> = ({ flow }) => {
  if (!flow) return null;
  return (
    <Card className="p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" style={{ height: 'auto', width: '100%' }}>
      <div className="flex-1 min-w-0 text-black dark:text-white">
        <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
          {flow.is_verified && <Icon icon="material-symbols-light:verified" color="#006BFF" width={26} />}
          <Typography variant="h6" noWrap>{flow.name}</Typography>
        </Stack>

        <Typography>{flow.description}</Typography>

        <div className="flex space-x-4 overflow-x-auto mb-2">
          {flow?.public_details?.connection_types.map(id => <ConnectionType key={id} id={id} />)}
        </div>
      </div>
      <Stack sx={{ alignItems: 'center', width: '100%' }} spacing={1}>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
          <a href={`https://dashboard.altan.ai/flows?template=${flow.id}`} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button variant="shadow" endContent={<Icon icon="clarity:clone-line" />}>
              Clone for {`${flow.product.price / 100}€`}
            </Button>
          </a>
          {flow.public_details?.demo &&
            <a href={flow.public_details?.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="shadow" endContent={<Icon icon="maki:arrow" />}
                className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 shadow-lg">
                Try out for free
              </Button>
            </a>
          }
        </Stack>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          
          <Avatar src={flow?.product?.account?.company?.logo_url} sx={{ width: 15, height: 15 }} />
          <Typography className="text-black dark:text-white" variant="caption">by {flow?.product?.account?.company?.name || "anonymous"}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Flow;