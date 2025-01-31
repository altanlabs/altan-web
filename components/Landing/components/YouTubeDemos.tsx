"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

interface YouTubeDemoItem {
  name: string;
  youtubeLink: string;
}

export default function YouTubeDemos() {
  const youtubeDemos: YouTubeDemoItem[] = [
    { name: "Interfaces", youtubeLink: "https://youtu.be/0Mzly8982aQ" },

    { name: "Databases", youtubeLink: "https://youtu.be/0Mzly8982aQ" },
    {
      name: "Workflows",
      youtubeLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      name: "AI Agents",
      youtubeLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      name: "Forms",
      youtubeLink: "https://www.youtube.com/watch?v=example2",
    },
    // Add more YouTube demos as needed
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleDemoClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex flex-col items-center max-w-6xl mx-auto px-4 py-24">
      {/* Demo Selector */}
      <div className="text-center mb-12">
        <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-1">
          All-in-one platform
        </div>
        <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          Features
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Altan gives you the power to build without code.
        </p>
      </div>

      <div className="flex space-x-4 mb-8">
        {youtubeDemos.map((demo, index) => (
          <button
            key={index}
            onClick={() => handleDemoClick(index)}
            className={`px-4 py-2 rounded-lg transition ${
              activeIndex === index
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {demo.name}
          </button>
        ))}
      </div>

      {/* Video Display */}
      <div
        className="w-full max-w-3xl rounded-lg overflow-hidden"
        style={{ aspectRatio: "16/9", minHeight: "400px" }}
      >
        <ReactPlayer
          url={youtubeDemos[activeIndex].youtubeLink}
          controls
          width="100%"
          height="100%"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
