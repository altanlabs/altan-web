interface Subcategory {
    id: string;
    name: string;
    description?: string;
}

interface Category {
    id: string;
    name: string;
    subcategories: Subcategory[];
}


const categories: Category[] = [
    {
        id: 'sales',
        name: 'Sales',
        subcategories: [
            {
                id: 'lead-generation',
                name: 'Lead Generation',
                description: 'Tools and services to identify and capture potential leads. Automated workflow: Lead capture and tracking.'
            },
            {
                id: 'lead-enrichment',
                name: 'Lead Enrichment',
                description: 'Enhance lead data with additional insights and information. Automated workflow: Data enrichment and verification.'
            },
            {
                id: 'lead-qualification',
                name: 'Lead Qualification',
                description: 'Assess leads to determine their potential for conversion. Automated workflow: Lead scoring and prioritization.'
            },
            {
                id: 'lead-outreach',
                name: 'Lead Outreach',
                description: 'Engage with leads through various communication channels. Automated workflow: Outreach scheduling and follow-up.'
            },
            {
                id: 'sales-automation',
                name: 'Sales Automation',
                description: 'Automate sales processes to improve efficiency and productivity. Automated workflow: Sales pipeline management.'
            },
            {
                id: 'crm',
                name: 'CRM',
                description: 'Customer Relationship Management tools for managing customer interactions. Automated workflow: Customer interaction logging.'
            },
            {
                id: 'b2b-lead-generation',
                name: 'B2B Lead Generation',
                description: 'Identify and capture potential business leads. Automated workflow: B2B lead generation and enrichment.'
            }
        ]
    },
    {
        id: 'marketing',
        name: 'Marketing',
        subcategories: [
            {
                id: 'content-generation',
                name: 'Content Generation',
                description: 'Create and distribute valuable content to attract and engage audiences. Automated workflow: Content creation and distribution.'
            },
            {
                id: 'content-distribution',
                name: 'Content Distribution',
                description: 'Create and distribute valuable content to attract and engage audiences. Automated workflow: Content creation and distribution.'
            },
            {
                id: 'seo',
                name: 'SEO',
                description: 'Optimize website visibility and user traffic through search engines. Automated workflow: SEO analysis and reporting.'
            },
            {
                id: 'paid-marketing',
                name: 'Paid Ads',
                description: 'Use social media platforms to connect with your audience and build your brand. Automated workflow: Social media scheduling and monitoring.'
            },
            {
                id: 'email-marketing',
                name: 'Email Outreach',
                description: 'Create and send targeted email campaigns to your audience. Automated workflow: Email campaign management.'
            },
            {
                id: 'email-marketing',
                name: 'Phone Outreach',
                description: 'Create and send targeted email campaigns to your audience. Automated workflow: Email campaign management.'
            },
            {
                id: 'affiliate-marketing',
                name: 'Affiliate Marketing',
                description: 'Partner with affiliates to promote your products and services. Automated workflow: Affiliate tracking and reporting.'
            },
            {
                id: 'marketing-analytics',
                name: 'Marketing Analytics',
                description: 'Analyze marketing data to measure performance and improve strategies. Automated workflow: Marketing data analysis.'
            }
        ]
    },
    {
        id: 'customer-experience',
        name: 'Customer Experience',
        subcategories: [
            {
                id: 'customer-support',
                name: 'Customer Support',
                description: 'Assist customers with their inquiries and issues. Automated workflow: Support ticket management.'
            },
            {
                id: 'help-desk',
                name: 'Help Desk',
                description: 'Provide technical support and assistance. Automated workflow: Help desk ticketing.'
            },
            {
                id: 'customer-feedback',
                name: 'Customer Feedback',
                description: 'Collect and analyze customer feedback to improve services. Automated workflow: Feedback collection and analysis.'
            },
            {
                id: 'crm',
                name: 'CRM',
                description: 'Manage customer relationships and interactions. Automated workflow: CRM data integration.'
            },
            {
                id: 'customer-satisfaction',
                name: 'Customer Satisfaction',
                description: 'Measure and improve customer satisfaction levels. Automated workflow: Satisfaction survey distribution.'
            },
            {
                id: 'customer-intelligence',
                name: 'Customer Intelligence',
                description: 'Gather and analyze data on customer behavior and preferences. Automated workflow: Customer data analysis.'
            },
            {
                id: 'reviews-management',
                name: 'Reviews Management',
                description: 'Manage and respond to customer reviews. Automated workflow: Automated reviews management system.'
            }
        ]
    },
    {
        id: 'operations',
        name: 'Operations',
        subcategories: [
            {
                id: 'supply-chain-management',
                name: 'Supply Chain Management',
                description: 'Oversee the flow of goods and services. Automated workflow: Supply chain tracking.'
            },
            {
                id: 'inventory-management',
                name: 'Inventory Management',
                description: 'Manage and control inventory levels and processes. Automated workflow: Inventory replenishment.'
            },
            {
                id: 'project-management',
                name: 'Project Management',
                description: 'Plan, execute, and close projects effectively. Automated workflow: Project task management.'
            },
            {
                id: 'logistics',
                name: 'Logistics',
                description: 'Coordinate and manage the transportation of goods. Automated workflow: Logistics scheduling and tracking.'
            },
            {
                id: 'quality-control',
                name: 'Quality Control',
                description: 'Ensure products and services meet quality standards. Automated workflow: Quality inspection and reporting.'
            },
            {
                id: 'real-estate-finder',
                name: 'Real Estate Finder',
                description: 'Locate and evaluate potential real estate properties. Automated workflow: Automated real estate finder.'
            }
        ]
    },
    {
        id: 'finance',
        name: 'Finance',
        subcategories: [
            {
                id: 'accounting',
                name: 'Accounting',
                description: 'Manage financial records and transactions. Automated workflow: Financial record keeping.'
            },
            {
                id: 'financial-planning',
                name: 'Financial Planning',
                description: 'Plan and manage financial resources and strategies. Automated workflow: Financial forecasting.'
            },
            {
                id: 'expense-management',
                name: 'Expense Management',
                description: 'Track and control business expenses. Automated workflow: Expense tracking and reporting.'
            },
            {
                id: 'billing-invoicing',
                name: 'Billing and Invoicing',
                description: 'Generate and manage invoices and billing processes. Automated workflow: Invoice generation and follow-up.'
            },
            {
                id: 'tax-compliance',
                name: 'Tax Compliance',
                description: 'Ensure compliance with tax regulations and requirements. Automated workflow: Tax filing and compliance checks.'
            },
            {
                id: 'financial-document-processing',
                name: 'Financial Document Processing',
                description: 'Automate the processing of financial documents. Automated workflow: Automated financial document processing.'
            }
        ]
    },
    {
        id: 'it',
        name: 'IT',
        subcategories: [
            {
                id: 'integration',
                name: 'Integration',
                description: 'Design, develop, and maintain software applications. Automated workflow: Software deployment pipeline.'
            },
            {
                id: 'it-support',
                name: 'IT Support',
                description: 'Provide technical assistance and support to users. Automated workflow: IT support ticketing.'
            },
            {
                id: 'api-documentation',
                name: 'Generate API Docs and Schemas',
                description: 'Utilize cloud computing for scalable and flexible IT solutions. Automated workflow: Cloud resource provisioning.'
            },
            {
                id: 'scrapping',
                name: 'Scrapping',
                description: 'Design, develop, and maintain software applications. Automated workflow: Software deployment pipeline.'
            }
        ]
    },
    {
        id: 'people',
        name: 'People',
        subcategories: [
            {
                id: 'recruitment',
                name: 'Recruitment',
                description: 'Tools for hiring the best talent for your organization. Automated workflow: Candidate sourcing and screening.'
            },
            {
                id: 'employee-engagement',
                name: 'Employee Engagement',
                description: 'Strategies and tools to improve employee satisfaction and productivity. Automated workflow: Employee feedback collection.'
            },
            {
                id: 'performance-management',
                name: 'Performance Management',
                description: 'Tools for evaluating and improving employee performance. Automated workflow: Performance review scheduling.'
            },
            {
                id: 'payroll',
                name: 'Payroll',
                description: 'Systems for managing employee compensation and benefits. Automated workflow: Payroll processing and compliance.'
            },
            {
                id: 'training-development',
                name: 'Training and Development',
                description: 'Programs to enhance employee skills and career growth. Automated workflow: Training program scheduling.'
            },
            {
                id: 'compliance',
                name: 'Compliance',
                description: 'Ensure adherence to labor laws and company policies. Automated workflow: Compliance monitoring and reporting.'
            },
            {
                id: 'video-call-transcription',
                name: 'Video Call Transcription',
                description: 'Transcribe, summarize, and save all video calls. Automated workflow: Automated transcription and summarization.'
            }
        ]
    },
    {
        id: 'productivity',
        name: 'Productivity',
        subcategories: [
            {
                id: 'collaboration',
                name: 'Human-AI Collaboration',
                description: 'Enhance team collaboration and communication. Automated workflow: Collaboration platform integration.'
            },
            {
                id: 'email-management',
                name: 'Email Management',
                description: 'Enhance team collaboration and communication. Automated workflow: Collaboration platform integration.'
            },
            {
                id: 'office-management',
                name: 'Office Management',
                description: 'Manage office operations and administration. Automated workflow: Office resource management.'
            },
            {
                id: 'time-management',
                name: 'Time Management',
                description: 'Tools to manage and optimize time usage. Automated workflow: Time tracking and analysis.'
            },
            {
                id: 'task-management',
                name: 'Task Management',
                description: 'Organize and prioritize tasks effectively. Automated workflow: Task scheduling and tracking.'
            },
            {
                id: 'document-management',
                name: 'Document Management',
                description: 'Store and manage organizational documents. Automated workflow: Document archiving and retrieval.'
            },
            {
                id: 'video-management',
                name: 'Video Management',
                description: 'Automate video processing and distribution. Automated workflow: Automated video management and distribution system.'
            }
        ]
    }
];

export default categories;