"use client"
import Image from 'next/image'
import Particles from './particles'
// import Illustration from '@/public/images/glow-bottom.svg'
import { useTranslation } from 'react-i18next';
import { useState, useRef, MutableRefObject } from 'react';
import { Icon } from '@iconify/react';
import LoadingButton from '@mui/lab/LoadingButton';

interface ImageItem {
  url: string | ArrayBuffer | null;
  file: File;
}

// Add proper types for the TextAreaWithButtons props
interface TextAreaWithButtonsProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleCreate: (images: ImageItem[]) => void;
  loading: boolean;
}

function TextAreaWithButtons({ inputValue, setInputValue, handleCreate, loading }: TextAreaWithButtonsProps) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (items) {
      for (let item of items) {
        if (item.type.indexOf('image') !== -1) {
          const file = item.getAsFile();
          handleImageAdd(file);
        }
      }
    }
  };

  const handleImageAdd = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const target = e.target;
        if (target && target.result) {
          setImages(prev => [...prev, { url: target.result, file }]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Fix the file input handler
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageAdd(e.target.files[0]);
    }
  };

  const handleRemoveImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      // You might want to add a toast notification here
      return;
    }
    handleCreate(images);
  };

  return (
    <div className="relative">
      <div className="w-full bg-[#2a2b36]/80 rounded-lg shadow-lg">
        <textarea
          className="w-full px-4 py-3 min-h-[170px] bg-transparent rounded-lg focus:outline-none focus:ring-2 text-slate-200 placeholder-slate-500 resize-none pb-14 scrollbar-hide"
          placeholder={"A landing page for my SaaS startup."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPaste={handlePaste}
        />

        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
          <div className="flex items-center gap-2 h-8">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileInputChange}
              multiple
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <Icon icon="mdi:image-plus" className="w-5 h-5" />
            </button>

            <div className="flex gap-2 items-center h-8 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <div key={index} className="relative group flex-shrink-0">
                  <img
                    src={image.url as string}
                    alt="Preview"
                    className="h-8 w-8 object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon icon="mdi:close" className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <LoadingButton
            onClick={handleSubmit}
            loading={loading}
            endIcon={<Icon icon="noto:sparkles" />}
            loadingPosition="end"
            variant="contained"
            disabled={!inputValue.trim()}
            sx={{
              backgroundColor: "white",
              color: "#0f172a",
              "&:hover": {
                backgroundColor: "#f1f5f9",
              },
              "&:disabled": {
                backgroundColor: "#94a3b8",
                color: "#475569",
              },
              mb:.9,
              mr:-.34,
              minWidth: "100px",
              padding: "8px 16px",
              fontSize: "0.875rem",
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
          >
            Generate 
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation(["common", "home"]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ideas = [
    {
      name: "Start-up dashboard",
      prompt: `Prototype UI for a dashboard to track my startup's operations.
• Use a sidebar + navbar layout to navigate between all sections
• Add some data visualisations`
    },
    {
      name: "Crypto portfolio tracker",
      prompt: `Help me get an overview of my crypto assets by making an app that:
• Uses the CoinCap API for data
• Ranks assets by market cap
• Lets me click on an asset and see details (including graph with its price development)
• Uses a strong neo brutalist theme`
    },
    {
      name: "Job board",
      prompt: `A job board application with:
• Search and filter by location/type
• Company profiles
• Job detail pages
Just the UI first, I'll add database persistence later.`
    },
    {
      name: "AI image generator",
      prompt: `A dashboard with beautiful charts using recharts.
• UI only first, I'll connect real data later.`
    },
    {
      name: "Social media dashboard",
      prompt: `A social media management dashboard showing:
• Analytics across platforms
• Scheduled posts
• Engagement metrics`
    },
    {
      name: "SaaS landing page",
      prompt: `A landing page for my SaaS startup.
• Highlight key features and benefits
• Include customer testimonials
• Provide a clear call-to-action`
    },
    {
      name: "E-commerce platform",
      prompt: `Design a user-friendly e-commerce platform with:
• Product listings and categories
• Shopping cart and checkout process
• User reviews and ratings`
    },
    {
      name: "Fitness app",
      prompt: `Create a fitness tracking app that includes:
• Workout routines and progress tracking
• Nutrition and diet plans
• Integration with wearable devices`
    },
    {
      name: "Travel itinerary planner",
      prompt: `Develop an app to plan travel itineraries with:
• Destination recommendations
• Day-by-day activity scheduling
• Budget tracking and expense management`
    }
  ];

  // Add type for scroll direction
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -150 : 150,
        behavior: 'smooth'
      });
    }
  };

  const handleCreate = async (images: ImageItem[] = []) => {
    setLoading(true);
    try {
      const attachmentPromises = images.map(async (image) => {
        const fileContent = typeof image.url === 'string' && image.url.startsWith('data:') 
          ? image.url.split(',')[1] 
          : image.url;

        return {
          file_name: image.file.name || `image_${Date.now()}.png`,
          mime_type: image.file.type || 'image/png',
          file_content: fileContent
        };
      });

      const attachments = await Promise.all(attachmentPromises);

      const payload = {
        name: "My app",
        idea: inputValue,
        attachments: attachments
      };

      const response = await fetch('https://api.altan.ai/platform/idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const id = data.id;
      window.location.href = `https://dashboard.altan.ai/?idea=${id}`;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Particles className="absolute inset-1 -z-99" />
{/* 
        <div
          className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-999 w-[800px] aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-black rounded-full blur-[120px] opacity-100"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-black rounded-full blur-[80px] opacity-100"></div>
        </div> */}

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logos/horizontalWhite.png"
                alt="Hero Image"
                width={400}
                height={550}
              />
            </div>

            <h3
              className="text-slate-300 mb-8"
              style={{ fontSize: "1.38rem" }}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {t("common:title")}
            </h3>

            <div
              className="max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="relative flex flex-col">
                <TextAreaWithButtons
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleCreate={handleCreate}
                  loading={loading}
                />
                <div className="mt-4 flex items-center">
                  <button
                    onClick={() => scroll("left")}
                    className="text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    &lt;
                  </button>
                  <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-2 scrollbar-hide"
                  >
                    {ideas.map((idea, index) => (
                      <div
                        key={index}
                        className="px-2 py-0.5 text-sm bg-slate-800 text-slate-200 rounded-full cursor-pointer hover:bg-slate-700 transition-colors whitespace-nowrap"
                        onClick={() => setInputValue(idea.prompt)}
                      >
                        {idea.name}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scroll("right")}
                    className="text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


{/* <div
  className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
  data-aos="fade-down"
  data-aos-delay="400"
>
  <div>
    <a
      className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
      href="https://dashboard.altan.ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("common:get_started_free")}{" "}
      <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
        -&gt;
      </span>
    </a>
  </div>
  <div>
    <a
      className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
      href="https://calendar.app.google/6FU2fXyuE1NLwph9A"
      target="_blank"
      rel="noopener noreferrer"
    >

      <span>{t("common:bookdemo")}</span>
    </a>
  </div>
</div>; */}



{
  /* <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <a
                  className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow"
                  href="https://dashboard.altan.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    {t("common:get_started_free")}
                    <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div> */
}
{
  /* <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Create an app at the speed of thought
            </h1> */
}



{
  /* <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
  data-aos="fade-down"
  data-aos-delay="400"
>
  <div>
    <a
      className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
      href="https://dashboard.altan.ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("common:get_started_free")}{" "}
      <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
        -&gt;
      </span>
    </a>
  </div>
  <div>
    <a
      className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
      href="https://calendar.app.google/6FU2fXyuE1NLwph9A"
      target="_blank"
      rel="noopener noreferrer"
    >

      <span>{t("common:bookdemo")}</span>
    </a>
  </div>
</div>; */
}
       