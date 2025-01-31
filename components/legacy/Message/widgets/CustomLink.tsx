"use client";
import React, { AnchorHTMLAttributes, ReactNode, FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import ProductWidget from "./ProductWidget";
import FileWidget from './FileWidget';


export function extractMention(message) {
  const pattern = /\[@([^]+)]\(\/member\/([0-9a-fA-F\-]{36})\)/;
  const match = message.match(pattern);

  if (match && match[1] && match[2]) {
    return {
      id: match[2],
      name: match[1]
    };
  }

  return null;
}

interface Resource {
  id: string;
  name: string;
  resourceName: string;
}

function extractResources(message: string): Resource[] {
  const pattern = /\[(.*?)\]\((?:\/)?(.*?)\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})\)/g;
  let match;
  const resources: Resource[] = [];

  while ((match = pattern.exec(message))) {
    if (match[1] && match[2] && match[3]) {
      resources.push({
        id: match[3],
        name: match[1],
        resourceName: match[2]
      });
    }
  }
  return resources;
}

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ children, href, ...props }) => {
  const message = Array.isArray(children) ? `[${children.join('')}](${href})` : `[${children}](${href})`;
  const mention = extractMention(message);
  const resources = extractResources(message);
  if (mention !== null) {
    return (
      <span className="mention">@{mention.name}</span>
    );
  }
  if (resources.length > 0) {
    return resources.map((resource) => {
      switch (resource.resourceName.toLowerCase()) {
        case 'product':
          return null;
          // return <ProductWidget key={resource.id} id={resource.id}/>;
        case 'file':
          return <FileWidget key={resource.id} id={resource.id} name={resource.name} />

        default:
          return href;
      }
    });
  }
}

export default CustomLink;