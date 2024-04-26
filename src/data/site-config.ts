export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '2nd Brain',
    subtitle: 'Tech Notes and Learnings from the field',
    description: 'Braindump of the day to day learnings in the life of Rajat Pandit',
    image: {
        src: '/8B8A8821.jpeg',
        alt: 'Rajat Pandit'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Github',
            href: 'https://github.com/rajatpandit'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rajatpandit/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/therunnerdad/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/rajatpandit'
        }
    ],
    hero: {
        title: 'Decoding the Tech Landscape: A Tech Sales Executive\'s Insights',
        text: "Currently working for Google, ~~Tesco~~, ~~Accenture~~, ~~Time Inc~~, ~~Yahoo!~~, ~~HCL~~. Pre-sales Engineering Leadership - bringing the best of core engineering, consulting and business ownership to the table - coupled with unparalleled execution excellence - to bring industry transforming results for our customers",
        image: {
            src: '/8B8A8821.jpeg',
            alt: 'Rajat Pandit presenting at Machine Learning Developers Conference 2022'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
