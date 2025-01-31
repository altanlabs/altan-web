import { Metadata } from "next";
import TemplateMarketplace from "@/components/Marketplace/TemplateMarketplace";
import Marketplace from "@/components/mp/Marketplace";

export const metadata: Metadata = {
  title: "Automation Marketplace | Altan - Streamline Your Business Processes",
  description: "Explore the largest library of business automations. Find and implement AI-powered solutions to run your business more efficiently.",
  keywords: "business automation, AI solutions, workflow optimization, productivity tools, Altan marketplace",
  openGraph: {
    title: "Automation Marketplace | Altan",
    description: "Discover AI-powered automations to streamline your business processes",
    images: [{ url: "/images/marketplace-og.jpg", width: 1200, height: 630, alt: "Altan Automation Marketplace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Marketplace | Altan",
    description: "Discover AI-powered automations to streamline your business processes",
    images: ["/images/marketplace-twitter.jpg"],
  },
};

const MarketplacePage = async () => {
  return (
    <main>
      <Marketplace templateType="altaner"/>
    </main>
  );
};

export default MarketplacePage;
