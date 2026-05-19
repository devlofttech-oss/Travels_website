import { packages } from './homeData.js';

export const packagesHero = {
  eyebrow: 'Explore Our Tours',
  title: 'Tour Packages',
  text: 'Discover the hidden gems of South India with curated travel experiences designed for comfort, luxury, and unforgettable memories.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBVatn6PLfOL8NKzsxgRnH7HFSfR8LsJ-pk5YF-w2A4PDeUvZQ_RqtYEOUpkDPEmLhiGpv-vTLeDO-1BjhnQVeEXvOJdAy5EwBx8JP6uH6zDfgOqzLFCSwCjcTmF0F-SHy3SDLMk6szcgFUBZEVXxpFjR4d7px6fhaNLWLyxX_yAdQ0FSc2cek8iqTTivh4DqPG4HDjFyfyo98H1UzG8xCuDZQC-KQPT6fyyUzy5QiQUs0m3zWwc1YWFkcLzAvFt7Xy-TWjz2RMrB6j',
};

export const tourPackages = packages.map((item) => ({
  ...item,
  locations: item.duration,
  tags: [],
}));

export const travelFeatures = [
  {
    icon: 'Car',
    title: 'Comfortable Vehicles',
    text: 'Pristine, well-maintained luxury cars with professional drivers for a smooth ride.',
    tone: 'primary',
  },
  {
    icon: 'BadgeIndianRupee',
    title: 'Affordable Pricing',
    text: 'Transparent rates with no hidden costs, giving you the best value for your tour.',
    tone: 'secondary',
  },
  {
    icon: 'Headset',
    title: 'Friendly Support',
    text: 'Dedicated tour managers available throughout your journey for any assistance.',
    tone: 'tertiary',
  },
];

export const faqs = [
  {
    question: 'What is included in the package price?',
    answer:
      'Our packages typically include premium vehicle rentals, professional driver-cum-guides, hotel accommodations with breakfast, and all parking and toll fees.',
  },
  {
    question: 'Can we customize our itinerary?',
    answer:
      "Yes. We specialize in tailor-made experiences. Contact us on WhatsApp and we'll create a custom tour plan that fits your interests and schedule.",
  },
  {
    question: 'How do I book a tour?',
    answer:
      'Since we offer direct service, you can book by calling us or sending a WhatsApp message. No advanced payment system needed, just confirm your dates.',
  },
];
