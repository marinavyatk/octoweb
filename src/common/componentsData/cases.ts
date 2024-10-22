import {CaseCircle, Category} from '@/components/layouts/caseCircle/caseCircle';

export const casesData = [
    {
        category: "ИНТЕРНЕТ-МАГАЗИН",
        tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"],
        img: '/case-de-marko.webp',
        header: "de-marko.ru",
        caseId: "demarko",
    },
    {
        category: "КОРПОРАТИВНЫЙ САЙТ",
        tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"],
        img: '/case-e-kvadrat.webp',
        header: "ekvadrat23.ru",
        caseId: "ekvadrat",
    },
    {
        category: "LANDING PAGE",
        tags: ["DEVELOP", "UI/UX", "SEO"],
        img: '/case-botanica.webp',
        header: "ботаника-хилс.рф",
        caseId: "botanica",
    },
    {
        category: "КОРПОРАТИВНЫЙ САЙТ",
        tags: ["DEVELOP", "UI/UX", "SEO"],
        img: '/case-smxtream.webp',
        header: "smxtream.pro",
        caseId: "smxtream",
    },
    {
        category: "Корпоративный сайт",
        tags: ["Develop", "ux/ui", "seo"],
        img: '/caseCardFullWidth.png',
        header: "de-marko.ru",
        caseId: "demarko",
    },
    {
        category: "ИНТЕРНЕТ-МАГАЗИН",
        tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"],
        img: '/case-de-marko.webp',
        header: "de-marko.ru",
        caseId: "demarko",
    },
    {
        category: "КОРПОРАТИВНЫЙ САЙТ",
        tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"],
        img: '/case-e-kvadrat.webp',
        header: "ekvadrat23.ru",
        caseId: "ekvadrat",
    },
    {
        category: "LANDING PAGE",
        tags: ["DEVELOP", "UI/UX", "SEO"],
        img: '/case-botanica.webp',
        header: "ботаника-хилс.рф",
        caseId: "botanica",
    },
    {
        category: "КОРПОРАТИВНЫЙ САЙТ",
        tags: ["DEVELOP", "UI/UX", "SEO"],
        img: '/case-smxtream.webp',
        header: "smxtream.pro",
        caseId: "smxtream",
    },
    {
        category: "Корпоративный сайт",
        tags: ["Develop", "ux/ui", "seo"],
        img: '/caseCardFullWidth.png',
        header: "de-marko.ru",
        caseId: "demarko",
    },
];


export const circles: CaseCircle[] = [
    { img: '/case-circle-botanica.png', caseId: "botanica", category: "Web" },
    { img: '/case-circle-plastic.png', caseId: "plastic", category: "Ads" },
    { img: '/case-circle-e-kvadrat.png', caseId: "ekvadrat", category: "Seo" },
    { img: '/case-circle-demarko.png', caseId: "demarko", category: "Web" },
    { img: '/case-circle-shortrid.png', caseId: "goodwood", category: "Ads" },
    { img: '/case-circle-botanica.png', caseId: "botanica2", category: "Web" },
    { img: '/case-circle-plastic.png', caseId: "plastic2", category: "Ads" },
    { img: '/case-circle-e-kvadrat.png', caseId: "ekvadrat2", category: "Seo" },
];

export const buttons: Category[] = ["All projects", "Web", "Seo", "Ads"];
//last element is a mock because the replay occurs after 5 cards
export const sizes = ["extraLarge", "large", "small", "medium", "fullWidth"];