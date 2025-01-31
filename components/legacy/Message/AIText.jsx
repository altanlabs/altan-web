"use client";

import { useEffect, useState, useRef } from "react";
import {  Stack } from "@mui/material";
import ReactMarkdown from "react-markdown";
import styled from '@emotion/styled';
import { Icon } from "@iconify/react";
import CustomLink from "./widgets/CustomLink";

const StyledReactMarkdown = styled(ReactMarkdown)`
  padding: 1px;
  overflow-x: auto;
  width: 100%;
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  text-align: left;
  font-family: Inter, Lato, Open Sans, sans-serif; /* Corrected property */
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }


  li {
    line-height: 1.75; 
    margin-bottom: 0.5rem; 
    list-style-position: outside;
    padding-left: 1rem;
  }
  
  
  ol, ul {
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 1.5rem;
  }

  ol {
    list-style-type: decimal;
  }

  ol li, ol li>p, ol ol, ol ul, ul li, ul li>p, ul ol, ul ul {
    margin: 0;
  }

  code {
    font-weight: bold;
    // margin-left: 2px;
    // margin-right: 2px;
  }

  pre {
    position: relative;
    width: 100%;
    margin: 0px !important;
    padding: 0px !important;
    .prism-code {
      padding: 6px;
      padding-bottom: 0px;
      padding-top: 0px;
    }
    border-radius: 3px;
    overflow-x: auto;
    background: transparent;
  }
`;


export default function AIText({ description }) {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 10;
    let index = 0;
    let interval;

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting && !isComplete) {
        interval = setInterval(() => {
          setText(prevText => description.substring(0, prevText.length + 1));
          index++;
          if (index === description.length) {
            clearInterval(interval);
            setIsComplete(true);
          }
        }, typingSpeed);
      }
    }, { threshold: 0.1 });

    observer.observe(elementRef.current);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [description]);

  return (
    <div ref={elementRef} style={{ width: '100%' }}>
      <StyledReactMarkdown components={{
        a: CustomLink,
        sup({ children, ...props }) {
          return <sup {...props}>{children}</sup>;
        },
      }}
        children={text} />
    </div>
  );
}