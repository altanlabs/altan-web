// import { Job } from "@/types/job";

// export const jobData: Job[] = [
//   {
//     "id": "1",
//     "status": "Ideation",
//     "title": "Meta Ads Automation",
//     "subtitle": "Create and Optimize Your Meta Ad Campaigns for Maximum Reach and ROI",
//     "description": "Boost your business's online presence with targeted ad campaigns on Meta platforms, including Facebook and Instagram. Utilize our specialized tools and expertise to create, manage, and optimize your ads, ensuring they reach the right audience while maximizing engagement and return on investment. Tailor your strategies to meet your specific marketing goals and see substantial business growth.",
//     "tags": ["Meta Advertising"," Facebook Ads", "Instagram Ads", "Digital Marketing", "Ad Optimization"],
//     "author": "Altan",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHOKG-nCRemb6fwNFwru9_WV08DvxvYal3Cmm0SCoTw&s",
//     "agent": null,
//     "portfolio": "RamsNRoses",
//     "team": [
//       {
//         "id": "0",
//         "name": "Adsy",
//         "type": "ai",
//         "about": "Main manager AI, designed to oversee and coordinate ad campaign operations, ensuring alignment with strategic goals and seamless execution.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/1.jpeg"
//       },
//       {
//         "id": "1",
//         "name": "Albert",
//         "type": "human",
//         "about": "Meta Certified Marketing Science Professional with extensive experience in digital marketing and attribution analysis.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/2.jpeg"
//       },
//       {
//         "id": "2",
//         "name": "Analyst",
//         "type": "ai",
//         "about": "Specializes in analyzing campaign performance data and setting up data integrations to ensure accurate tracking and reporting.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/3.jpeg"
//       },
//       {
//         "id": "4",
//         "name": "Budgeter",
//         "type": "ai",
//         "about": "Optimizes budget allocation across campaigns, maximizing ROI through advanced cost management algorithms and real-time adjustments.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/4.jpeg"
//       }
//     ],
//     "workflows": [
//       {
//         "name": "Conversion Data Integration",
//         "description": "Send conversion data back to Meta in a cookieless world.",
//         "benefits": "Enables Meta to better understand the efficiency of campaigns and improve performance.",
//         "impact": "",
//         "learn_more": "",
//         "tags": ["Facebook", "CAPI", "Cookies", "Pixel", "Tracking"],
//         "modules": [
//           { "type": "trigger", "description": "Event detection on website" },
//           { "type": "process", "description": "Data formatting for Meta API" },
//           { "type": "action", "description": "Data transmission to Meta" },
//           { "type": "verification", "description": "Confirmation of data receipt by Meta" }
//         ]
//       },
//       {
//         "name": "Campaign Creation",
//         "description": "Provide creatives, define your objective, and launch your campaign.",
//         "benefits": "Increases online visibility and reach.",
//         "tags": ["Campaign Creation", "Marketing", "Visibility"],
//         "modules": [
//           { "type": "input", "description": "Gather campaign requirements and objectives" },
//           { "type": "task", "description": "Creative design and approval" },
//           { "type": "task", "description": "Media planning and buying" },
//           { "type": "output", "description": "Campaign launch" }
//         ]
//       },
//       {
//         "name": "Campaign Management",
//         "description": "Monitor campaign data and provide actionable insights.",
//         "benefits": "Optimizes campaign performance and maximizes opportunities.",
//         "tags": ["Campaign Management", "Data Analysis", "Optimization"],
//         "modules": [
//           { "type": "monitoring", "description": "Real-time data tracking" },
//           { "type": "analysis", "description": "Data analysis for trends and insights" },
//           { "type": "adjustment", "description": "Making necessary campaign adjustments" },
//           { "type": "reporting", "description": "Report generation and distribution" }
//         ]
//       },
//       {
//         "name": "Automated Reporting",
//         "description": "Integrate data into customizable dashboards in Looker Studio to monitor performance metrics.",
//         "benefits": "Provides real-time insights into campaign effectiveness.",
//         "tags": ["Reporting", "Data Integration", "Looker Studio"],
//         "modules": [
//           { "type": "data collection", "description": "Aggregate data from various sources" },
//           { "type": "data processing", "description": "Process data for dashboard compatibility" },
//           { "type": "visualization", "description": "Create and customize dashboards" },
//           { "type": "distribution", "description": "Distribute dashboards to stakeholders" }
//         ]
//       }
//     ],
//     "apps": []
//   },
//   {
//     "id": "2",
//     "status": "Ideation",
//     "title": "Lead Management Automation",
//     "subtitle": "Streamline Your Lead Generation and Conversion Process",
//     "description": "Enhance your lead management with our automated systems that ensure seamless capture, conversion, and celebration of leads. Our platform helps align your marketing and sales teams, providing a unified view of the customer journey. From capturing leads through various sources to automating follow-ups and integrating data into CRM systems, we optimize every step to increase your conversions and align team efforts.",
//     "tags": ["Lead Management", "Customer Journey", "Sales Alignment", "CRM Integration", "Marketing Automation"],
//     "author": "Altan",
//     "image": "https://example.com/path/to/lead-management-image.jpg",
//     "agent": null,
//     "portfolio": "Altan",
//     "team": [
//       {
//         "id": "5",
//         "name": "LeadCap",
//         "type": "ai",
//         "about": "Automated system for capturing and qualifying leads from multiple channels in real-time.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/1.jpeg"
//       },
//       {
//         "id": "6",
//         "name": "SyncMaster",
//         "type": "ai",
//         "about": "Handles synchronization of lead data across sales and marketing platforms to maintain a unified customer database.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/2.jpeg"
//       },
//       {
//         "id": "7",
//         "name": "Conversion Guru",
//         "type": "ai",
//         "about": "Specializes in optimizing lead conversion rates through automated personalization and timely engagement strategies.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/3.jpeg"
//       },
//       {
//         "id": "8",
//         "name": "AnalytiX",
//         "type": "ai",
//         "about": "Provides in-depth analysis of lead data to drive strategic marketing decisions and enhance campaign effectiveness.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/4.jpeg"
//       }
//     ],
//     "workflows": [
//       {
//         "name": "Lead Capture",
//         "description": "Automatically capture leads from various sources like web forms, social media, and live events.",
//         "benefits": "Ensures immediate lead capture and categorization for further nurturing and follow-up.",
//         "tags": ["Lead Capture", "Automation", "Web Forms", "Social Media"],
//         "modules": [
//           { "type": "input", "description": "Gather lead data from input sources" },
//           { "type": "process", "description": "Qualify and categorize leads based on predefined metrics" },
//           { "type": "output", "description": "Store leads in CRM system and initiate follow-up processes" }
//         ]
//       },
//       {
//         "name": "Lead Nurturing",
//         "description": "Engage with leads through automated email campaigns and personalized follow-ups.",
//         "benefits": "Enhances lead engagement and moves them through the sales funnel effectively.",
//         "tags": ["Email Marketing", "Lead Nurturing", "Personalization"],
//         "modules": [
//           { "type": "trigger", "description": "Detect engagement signals from leads" },
//           { "type": "action", "description": "Send personalized emails and content based on lead behavior" },
//           { "type": "verification", "description": "Track engagement and adjust strategies accordingly" }
//         ]
//       },
//       {
//         "name": "Sales and Marketing Alignment",
//         "description": "Ensure seamless collaboration between sales and marketing teams through shared access to lead data.",
//         "benefits": "Improves communication and strategic alignment between teams, enhancing overall campaign success.",
//         "tags": ["Team Collaboration", "Data Sharing", "CRM"],
//         "modules": [
//           { "type": "monitoring", "description": "Real-time lead data sharing between teams" },
//           { "type": "analysis", "description": "Joint analysis for better targeting and segmentation" },
//           { "type": "adjustment", "description": "Coordinated adjustments to strategies based on shared insights" }
//         ]
//       },
//       {
//         "name": "Real-Time Lead Reporting",
//         "description": "Generate real-time reports on lead status and campaign effectiveness using customizable dashboards.",
//         "benefits": "Provides immediate insights into lead behavior and campaign ROI, enabling quick decision-making.",
//         "tags": ["Reporting", "Real-Time Data", "Dashboards"],
//         "modules": [
//           { "type": "data collection", "description": "Collect data from various lead interactions and touchpoints" },
//           { "type": "data processing", "description": "Process data to fit reporting standards and needs" },
//           { "type": "visualization", "description": "Generate and customize dashboards for different team needs" },
//           { "type": "distribution", "description": "Distribute reports to stakeholders and teams" }
//         ]
//       }
//     ],
//     "apps": []
//   },
//   {
//     "id": "3",
//     "status": "Ideation",
//     "title": "Social Media Management Automation",
//     "subtitle": "Automate Your Social Media to Drive Engagement and Growth",
//     "description": "Unleash the potential of social media automation to maintain and expand your digital presence across multiple platforms. With our robust tools, manage replies, comments, posts, and more—automatically. From scheduling content to generating responses and analyzing interactions, our platform ensures that your social media operations are seamless and efficient.",
//     "tags": ["Social Media Automation", "Content Scheduling", "Engagement Growth", "Digital Marketing", "AI Integration"],
//     "author": "Altan",
//     "image": "https://example.com/path/to/social-media-automation-image.jpg",
//     "agent": null,
//     "portfolio": "Altan",
//     "team": [
//       {
//         "id": "9",
//         "name": "PostMaster",
//         "type": "ai",
//         "about": "Automates posting across platforms, ensuring timely and relevant social media presence.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/5.jpeg"
//       },
//       {
//         "id": "10",
//         "name": "EngageAI",
//         "type": "ai",
//         "about": "Uses AI to analyze interactions and tailor responses, maximizing engagement on posts and ads.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/6.jpeg"
//       },
//       {
//         "id": "11",
//         "name": "ContentCrafter",
//         "type": "ai",
//         "about": "Generates creative content including text, images, and videos, optimized for SEO and social media impact.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/7.jpeg"
//       },
//       {
//         "id": "12",
//         "name": "AnalyticsEngine",
//         "type": "ai",
//         "about": "Provides insights into campaign performance and audience behavior to refine marketing strategies.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/1.jpeg"
//       }
//     ],
//     "workflows": [
//       {
//         "name": "Content Scheduling and Distribution",
//         "description": "Automatically schedule and post content across various social media platforms.",
//         "benefits": "Saves time and maintains a consistent presence online, enhancing brand visibility and engagement.",
//         "tags": ["Scheduling", "Distribution", "Automation"],
//         "modules": [
//           { "type": "input", "description": "Gather content from collaborative platforms" },
//           { "type": "process", "description": "Schedule content based on optimized timings" },
//           { "type": "output", "description": "Distribute content across social platforms" }
//         ]
//       },
//       {
//         "name": "Engagement Optimization",
//         "description": "Analyze interactions and automatically generate tailored responses to enhance engagement.",
//         "benefits": "Increases interaction rates and audience satisfaction, fostering community growth.",
//         "tags": ["Engagement", "AI Responses", "Analysis"],
//         "modules": [
//           { "type": "monitoring", "description": "Track post interactions and audience feedback" },
//           { "type": "analysis", "description": "Analyze feedback for trends and sentiment" },
//           { "type": "adjustment", "description": "Generate and publish responses and follow-up posts" }
//         ]
//       },
//       {
//         "name": "Performance Analytics",
//         "description": "Provide detailed reports on social media campaign performance, including reach, engagement, and conversion metrics.",
//         "benefits": "Delivers actionable insights for continuous improvement of social media strategies.",
//         "tags": ["Analytics", "Reporting", "Optimization"],
//         "modules": [
//           { "type": "data collection", "description": "Collect data from all social media interactions" },
//           { "type": "data processing", "description": "Process data to extract relevant performance metrics" },
//           { "type": "visualization", "description": "Visualize data trends and key performance indicators" },
//           { "type": "distribution", "description": "Share insights with marketing teams to inform strategy" }
//         ]
//       },
//       {
//         "name": "AI-Driven Content Creation",
//         "description": "Utilize AI tools to generate creative, engaging, and SEO-optimized content for social media.",
//         "benefits": "Streamlines content creation, ensuring high-quality, impactful posts that resonate with the audience.",
//         "tags": ["Content Creation", "AI Tools", "SEO Optimization"],
//         "modules": [
//           { "type": "input", "description": "Receive input topics and keywords" },
//           { "type": "task", "description": "Generate text, images, and video content using AI" },
//           {
//             "type": "output", "description": "Publish AI- generated content across social channels" }
//         ]
//       }
//     ],
//     "apps": [
//       "OpenAI (ChatGPT, DALL-E, Whisper)",
//       "Microsoft 365 Excel",
//       "Jasper AI",
//       "Google Sheets",
//       "Eden AI",
//       "Airtable",
//       "Twitter",
//       "Instagram for Business",
//       "Facebook Pages",
//       "LinkedIn",
//       "Telegram Bot",
//       "Pinterest",
//       "reddit",
//       "Discord",
//       "Buffer",
//       "Vimeo",
//       "Remove.bg",
//       "Leap AI",
//       "GIPHY",
//       "Cloudinary",
//       "Bannerbear"
//     ]
//   },
//   {
//     "id": "4",
//     "status": "Ideation",
//     "title": "Supply Chain Management Automation",
//     "subtitle": "Enhance Your Supply Chain Agility with Advanced Automation",
//     "description": "Optimize your supply chain management with our powerful automation tools that help you maintain ideal inventory levels, streamline purchase order generation, and update your clients with shipping statuses. By integrating seamlessly with your existing systems, we prevent costly stock shortages or excesses and keep your operations running smoothly.",
//     "tags": ["Supply Chain Automation", "Inventory Management", "Order Processing", "Shipping Updates", "Operational Efficiency"],
//     "author": "Altan",
//     "image": null,
//     "agent": null,
//     "portfolio": "Altan",
//     "team": [
//       {
//         "id": "13",
//         "name": "Orderly",
//         "type": "ai",
//         "about": "Manages order processing and inventory levels, automatically generating purchase orders when supplies run low.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/8.jpeg"
//       },
//       {
//         "id": "14",
//         "name": "LogistiX",
//         "type": "ai",
//         "about": "Optimizes logistics and shipping operations, ensuring timely updates to customers and reducing delays.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/1.jpeg"
//       },
//       {
//         "id": "15",
//         "name": "StockGuard",
//         "type": "ai",
//         "about": "Monitors inventory levels across multiple channels and triggers alerts and actions based on predefined thresholds.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/5.jpeg"
//       },
//       {
//         "id": "16",
//         "name": "SyncFlow",
//         "type": "ai",
//         "about": "Ensures the synchronization of supply chain data across all platforms, from inventory to CRM systems.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/6.jpeg"
//       }
//     ],
//     "workflows": [
//       {
//         "name": "Inventory Monitoring",
//         "description": "Track and maintain optimal stock levels to prevent overstocking or stockouts.",
//         "benefits": "Reduces inventory costs and enhances the ability to meet customer demand promptly.",
//         "tags": ["Inventory Control", "Stock Levels", "Automation"],
//         "modules": [
//           { "type": "input", "description": "Monitor stock levels across all storage locations" },
//           { "type": "process", "description": "Analyze data to predict inventory needs" },
//           { "type": "output", "description": "Generate alerts and purchase orders when stock levels are low" }
//         ]
//       },
//       {
//         "name": "Order Processing",
//         "description": "Automate the generation of purchase orders and handle supplier communications.",
//         "benefits": "Streamlines procurement processes, ensuring timely replenishment of inventory.",
//         "tags": ["Order Management", "Supplier Communication", "Efficiency"],
//         "modules": [
//           { "type": "trigger", "description": "Trigger when inventory hits minimal thresholds" },
//           { "type": "action", "description": "Automate purchase order creation and supplier notifications" },
//           { "type": "verification", "description": "Confirm orders and update inventory management systems" }
//         ]
//       },
//       {
//         "name": "Shipping and Fulfillment",
//         "description": "Manage shipping processes and update customers on their order status automatically.",
//         "benefits": "Improves customer satisfaction with accurate and timely updates, reducing query and complaint volumes.",
//         "tags": ["Shipping", "Customer Updates", "Real-time Tracking"],
//         "modules": [
//           { "type": "data collection", "description": "Collect shipping data from carriers" },
//           { "type": "data processing", "description": "Process and verify shipping statuses" },
//           { "type": "visualization", "description": "Provide real-time updates to customers via digital platforms" },
//           { "type": "distribution", "description": "Distribute shipping status reports to customer service teams" }
//         ]
//       },
//       {
//         "name": "Supplier Integration",
//         "description": "Seamlessly integrate with suppliers to synchronize supply chain data and enhance coordination.",
//         "benefits": "Ensures that all parts of the supply chain are informed and can adapt to changes rapidly, reducing lead times and costs.",
//         "tags": ["Supplier Coordination", "Data Integration", "Supply Chain Synchronization"],
//         "modules": [
//           { "type": "monitoring", "description": "Monitor supplier performance and compliance" },
//           { "type": "analysis", "description": "Analyze supplier data to assess risk and performance" },
//           {
//             "type": "adjustment", "description": "Adjust orders and stock levels based on supplier feedback and performance metrics" }
//         ]
//       }
//     ],
//     "apps": [
//       "WooCommerce",
//       "Squarespace",
//       "Shopify",
//       "Odoo",
//       "NetSuite",
//       "lexoffice",
//       "Katana Cloud Inventory",
//       "Etsy",
//       "bexio",
//       "Amazon Seller Central",
//       "Zoho Inventory",
//       "Google Sheets",
//       "Slack",
//       "Airtable",
//       "Zoho Sign",
//       "Google Drive",
//       "Revolut Business"
//     ]
//   },
//   {
//     "id": "5",
//     "status": "Ideation",
//     "title": "Invoice Automation",
//     "subtitle": "Streamline Your Accounts Payable and Receivable Processes",
//     "description": "Transform how you manage your financial transactions with our comprehensive invoice automation solution. From creating and sending invoices to managing payments and sending reminders for overdue invoices, our platform seamlessly integrates with your existing financial systems to enhance efficiency, accelerate your payment cycles, and provide real-time insights into your cash flow.",
//     "tags": ["Invoice Automation", "Financial Management", "Payment Processing", "Cash Flow Improvement", "Accounts Payable"],
//     "author": "Altan",
//     "image": "https://example.com/path/to/invoice-automation-image.jpg",
//     "agent": null,
//     "portfolio": "Altan",
//     "team": [
//       {
//         "id": "17",
//         "name": "BillFlow",
//         "type": "ai",
//         "about": "Automates the invoice creation and sending process, ensuring accurate billing and timely delivery.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/8.jpeg"
//       },
//       {
//         "id": "18",
//         "name": "PaymentPro",
//         "type": "ai",
//         "about": "Manages payment processing and reconciliation, reducing errors and speeding up transaction times.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/2.jpeg"
//       },
//       {
//         "id": "19",
//         "name": "RemindR",
//         "type": "ai",
//         "about": "Sends automated reminders for overdue invoices, improving cash flow and reducing debtor days.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/4.jpeg"
//       },
//       {
//         "id": "20",
//         "name": "InsightGen",
//         "type": "ai",
//         "about": "Generates real-time financial reports and insights, helping businesses make informed decisions.",
//         "avatar_url": "https://storage.googleapis.com/logos-chatbot-optimai/avatars/1.jpeg"
//       }
//     ],
//     "workflows": [
//       {
//         "name": "Invoice Creation and Delivery",
//         "description": "Automatically generate and send invoices based on sales orders or service delivery confirmations.",
//         "benefits": "Reduces administrative burden and ensures invoices are sent without delays.",
//         "tags": ["Invoice Generation", "Automated Delivery", "Efficiency"],
//         "modules": [
//           { "type": "input", "description": "Capture data from sales or service systems" },
//           { "type": "task", "description": "Create invoices using predefined templates" },
//           { "type": "output", "description": "Send invoices via email or digital platforms" }
//         ]
//       },
//       {
//         "name": "Payment Processing",
//         "description": "Automate the acceptance and reconciliation of payments, updating financial records in real-time.",
//         "benefits": "Ensures quick payment processing and accurate financial reporting.",
//         "tags": ["Payment Acceptance", "Reconciliation", "Real-time Updates"],
//         "modules": [
//           { "type": "input", "description": "Receive payment information from online gateways" },
//           { "type": "process", "description": "Verify and process payments against outstanding invoices" },
//           { "type": "output", "description": "Update accounting systems and financial records" }
//         ]
//       },
//       {
//         "name": "Debtor Management",
//         "description": "Send automated reminders for overdue invoices and manage communications with debtors.",
//         "benefits": "Improves cash flow by reducing the time invoices remain unpaid.",
//         "tags": ["Debtor Tracking", "Automated Reminders", "Cash Flow Management"],
//         "modules": [
//           { "type": "monitoring", "description": "Track invoice due dates and payment statuses" },
//           { "type": "action", "description": "Send reminder notifications to clients" },
//           { "type": "verification", "description": "Log responses and follow up as necessary" }
//         ]
//       },
//       {
//         "name": "Financial Insights and Reporting",
//         "description": "Generate detailed financial reports based on transaction data to provide insights into business health.",
//         "benefits": "Supports strategic financial planning and compliance with comprehensive, accurate reporting.",
//         "tags": ["Financial Reporting", "Insights", "Compliance"],
//         "modules": [
//           { "type": "data collection", "description": "Collect data from financial transactions" },
//           { "type": "data processing", "description": "Compile and analyze financial data" },
//           { "type": "visualization", "description": "Generate and distribute financial reports" }
//         ]
//       }
//     ],
//     "apps": [
//       "Zoho Invoice",
//       "Xero",
//       "WooCommerce",
//       "Shopify",
//       "QuickBooks",
//       "PDFMonkey",
//       "PDF.co",
//       "Invoice Ninja",
//       "Etsy",
//       "Amazon Seller Central",
//       "Stripe",
//       "Google Sheets",
//       "Wave",
//       "Eledo PDF",
//       "PandaDoc"
//     ]
//   }


//   // {
//   //   "id": "5.1",
//   //   "status": "Prototype",
//   //   "title": "Technical Support",
//   //   "subtitle": "Automate support for physical products with a comprehensive solution.",
//   //   "description": "Optimize technical support with our Unified Technical Support Platform, designed to automate and streamline support for physical products. This platform facilitates direct communication with customers, swift problem resolution, and efficient management of support tickets, enhancing customer satisfaction and operational efficiency.",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": "CompanyName",
//   //   "portfolio": "Salgueda"
//   // },
//   // {
//   //   "id": "5.2",
//   //   "status": "Prototype",
//   //   "title": "AI Enhanced Sales",
//   //   "subtitle": "Leverage AI to supercharge your online sales.",
//   //   "description": "Revolutionize your sales strategy with our AI-Enhanced Sales Platform. Import your product catalog and let our powerful AI agents drive sales by optimizing product placements, personalizing customer interactions, and managing end-to-end sales processes efficiently to boost your revenue and market presence.",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": "CompanyName",
//   //   "portfolio": "Salgueda"
//   // },
//   // {
//   //   "id": "0",
//   //   "status": "Prototype",
//   //   "title": "Google My Business",
//   //   "subtitle": "All you need to make your local business succeed.",
//   //   "description": "Maximize your visibility and engagement on Google My Business with our suite of tools designed to optimize your local search results and improve customer interactions. Benefit from advanced features that boost your Google Maps visibility, enhance customer relations, and provide deep insights into customer feedback, all tailored to support your business growth and reputation management",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": null,
//   //   "portfolio": "Bloome by Sasha"
//   // },
  
//   // {
//   //   "id": "4",
//   //   "status": "Ideation",
//   //   "title": "Appointments",
//   //   "subtitle": "Efficient and Personalized Booking Solutions via WhatsApp",
//   //   "description": "Enhance your customer service and efficiency with our WhatsApp appointment setting services. Perfect for businesses looking to streamline their booking processes and improve client communication. Benefit from a direct, personalized interaction platform that allows for instant confirmation and rescheduling, helping you manage appointments smoothly and effectively.",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": null,
//   //   "portfolio": null
//   // },
  
//   // {
//   //   "id": "6",
//   //   "status": "Ideation",
//   //   "title": "Automated outreach",
//   //   "subtitle": "Efficiently Manage Lead Generation and Communication",
//   //   "description": "Our Automated Outreach Solutions empower your business to effectively find, enrich, and engage leads. This comprehensive service automates the generation of lead data, tailors it to your specific needs, crafts persuasive messaging templates, and reaches out to potential clients. Ideal for businesses looking to increase efficiency in marketing campaigns and drive higher conversion rates.",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": null,
//   //   "portfolio": null
//   // },
//   // {
//   //   "id": "7",
//   //   "status": "Ideation",
//   //   "title": "Real-state automation",
//   //   "subtitle": "11 de abril Fav",
//   //   "description": "",
//   //   "tags": [],
//   //   "author": "Altan",
//   //   "image": null,
//   //   "agent": null,
//   //   "portfolio": null
//   // },
// ]

