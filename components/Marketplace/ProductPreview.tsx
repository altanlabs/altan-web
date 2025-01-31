"use client";
import { Stack, Typography } from '@mui/material';
import Agent from './resource/Agent';
import Flow from './resource/Flow';
import Action from './resource/Action';
import Webhook from './resource/Webhook';
import { useCallback } from 'react';
import { IntegrationCard } from '../Landing/integrations/integrations-card';

export default function ProductPreview({ type, products }) {
  // Function to determine and render the correct component
  const renderProduct = useCallback((product, index) => {
    switch (type) {
      case 'agent':
        return <Agent agent={product} />;
      case 'flow':
        return <Flow flow={product} />;
      // case 'product':
      //   return <ProductWidget id={product.id} />;
      case 'app':
        return <IntegrationCard item={product} index={index}/>;
      case 'action':
        return <Action action={product} />
      case 'webhook':
        return <Webhook webhook={product} />
      default:
        return <Typography variant="body2">{product?.name}</Typography>;
    }
  }, [type]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
          renderProduct(product, index)
      ))}
    </div>
  );
}