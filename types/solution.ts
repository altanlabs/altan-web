export type SolutionSection = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    link: string;
    image?: string;
};

export type Solution = {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    sections: SolutionSection[];
    tags: object,
    author: string,
    apps: object
};

