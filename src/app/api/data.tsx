import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Sign up and verify your AyaanExchange account.',
        description: 'Create your profile online or in the app, complete a quick verification process and unlock secure, FCA-compliant transfers tailored for overseas Pakistanis.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Create a transfer.',
        description: 'Choose Pakistan as the receiving country, enter the amount and select your preferred payout method such as bank transfer, mobile wallet or cash pickup.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Add recipient details and pay.',
        description: 'Add your recipient’s bank, wallet or ID information and confirm the transfer by paying with your debit/credit card or online bank transfer through AyaanExchange’s secure payment gateway',
    },
     {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Track your transaction.',
        description: ' Monitor every step of your transfer through the website or mobile app, with status updates that show when your money has been processed and made available in Pakistan.',
    }
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/bank.jpeg'),
        alt: 'Portfolio',
        title: 'Bank Transfer / Bank Deposit',
        slug: 'Cozycasa',
        info: ' Send money directly to Pakistani bank accounts, ideal for family expenses, bill payments or supporting businesses. This option offers traceable, secure delivery with clear confirmation once funds are credited. Send money directly to Pakistani bank accounts, ideal for family expenses, bill payments or supporting businesses. This option offers traceable, secure delivery with clear confirmation once funds are credited.',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cash.jpeg'),
        alt: 'Portfolio',
        title: 'Cash Pickup',
        slug: 'Mars',
        info: 'Where available, recipients can collect cash instantly from partner locations across Pakistan, using valid identification and the transaction reference. This is perfect for families who prefer cash or have limited access to bank accounts.',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mobile.jpeg'),
        alt: 'Mobile Wallet',
        title: 'Mobile Wallet',
        slug: 'rocket-squared',
        info: 'Credit funds to supported mobile wallets in Pakistan so recipients can pay bills, shop or withdraw cash locally. This digital option offers speed and convenience, especially for people who rely on smartphones for daily payments.Credit funds to supported mobile wallets in Pakistan so recipients can pay bills, shop or withdraw cash locally. This digital option offers speed and convenience, especially for people who rely on smartphones for daily payments.',
        Class: 'md:mt-24'
    },


    
]