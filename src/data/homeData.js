import { localImages } from './localImages.js';

export const heroImage = localImages.slider;

export const floatingHighlights = [
  {
    icon: 'Stars',
    title: 'Premium Fleet',
    text: 'Comfortable SUVs & Sedans',
    tone: 'primary',
  },
  {
    icon: 'Compass',
    title: 'Expert Drivers',
    text: 'Fluent in Local Knowledge',
    tone: 'tertiary',
  },
];

export const trustItems = [
  { icon: 'Armchair', label: 'Comfortable Travel' },
  { icon: 'ShieldCheck', label: 'Trusted Service' },
  { icon: 'WalletCards', label: 'Affordable Packages' },
  { icon: 'MapPinned', label: 'Experienced Drivers' },
];

export const packages = [
  {
    title: 'Royal Heritage Tour',
    duration: '4 Days / 3 Nights',
    price: '₹14,999/-',
    description:
      'Explore the majestic palaces and vibrant culture of the historical South Indian dynasties with curated stays.',
    image: localImages.bus,
  },
  {
    title: 'Kerala Backwaters',
    duration: '5 Days / 4 Nights',
    price: '₹18,500/-',
    description:
      "Experience serenity on a houseboat through the emerald backwaters and palm-fringed canals of God's Own Country.",
    image: localImages.room1,
  },
  {
    title: 'Misty Hills Escape',
    duration: '3 Days / 2 Nights',
    price: '₹9,999/-',
    description:
      'A refreshing getaway to the cloud-kissed peaks of Ooty and Coonoor, perfect for families and couples.',
    image: localImages.car,
  },
];

export const galleryImages = [
  {
    src: localImages.bus2,
    alt: 'Sri Sai Tours premium bus fleet exterior.',
  },
  {
    src: localImages.interior,
    alt: 'Comfortable travel interior seating.',
  },
  {
    src: localImages.carInterior,
    alt: 'Premium vehicle interior for private trips.',
  },
  {
    src: localImages.room2,
    alt: 'Luxury stay room arranged for guests.',
  },
  {
    src: localImages.room3,
    alt: 'Premium accommodation prepared for a luxury stay.',
  },
];

export const features = [
  {
    icon: 'ShieldUser',
    title: 'Safe & Comfortable',
    text: 'Our vehicles undergo rigorous safety checks and our drivers are trained for professional, smooth driving on all terrains.',
  },
  {
    icon: 'BadgeIndianRupee',
    title: 'Affordable Pricing',
    text: "Premium travel doesn't have to break the bank. We offer competitive rates without compromising on quality or experience.",
  },
  {
    icon: 'Headset',
    title: 'Friendly Support',
    text: 'From booking your trip to the final drop-off, our support team is available 24/7 to ensure a hassle-free journey.',
  },
];

export const aboutImage = localImages.bus3;
