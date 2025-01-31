export interface Altaner {
    template: {
        name: string;
        public_name: string;
        is_visible: boolean;
        entity_type: string;
        entity_id: string;
        details: {
            landing: {
                locales: LocaleContent[];
            };
            cloning_settings: {
                distribution_mode: string;
            };
        };
        is_verified: boolean;
        is_deleted: boolean;
        product_id: string;
        subscription_group_id: string;
        date_creation: string;
        id: string;
    };
}

export interface LocaleContent {
    content: AltanerContent;
    language: string;
}

export interface AltanerContent {
    cta: CTA;
    title: string;
    benefits: Benefit[];
    finalCTA: FinalCTA;
}

export interface CTA {
    link: string;
    text: string;
}

export interface Benefit {
    title: string;
    description: string;
}

export interface FinalCTA {
    title: string;
    buttons: CTA[];
    description: string;
}
