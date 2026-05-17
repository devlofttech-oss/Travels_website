import { localImages } from './localImages.js';

export const galleryHero = {
  eyebrow: 'Travel Memories',
  title: 'Our Gallery',
  text: "A visual journey through the most beautiful destinations and memorable trips we've curated for our travelers.",
  image: localImages.bus3,
  alt: 'Sri Sai Tours premium fleet prepared for a comfortable journey.',
};

export const galleryCategories = [
  'All Moments',
  'Fleet Showcase',
  'Interior Comfort',
  'Premium Vehicles',
  'Luxury Stays',
];

export const galleryItems = [
  {
    category: 'Fleet Showcase',
    title: 'Executive Bus Fleet',
    height: 'tall',
    image: localImages.bus,
  },
  {
    category: 'Fleet Showcase',
    title: 'Group Travel Coach',
    height: 'square',
    image: localImages.bus2,
  },
  {
    category: 'Interior Comfort',
    title: 'Spacious Coach Comfort',
    height: 'wide',
    image: localImages.bus3,
  },
  {
    category: 'Premium Vehicles',
    title: 'Premium Private Car',
    height: 'portrait',
    image: localImages.car,
  },
  {
    category: 'Premium Vehicles',
    title: 'Refined Car Interior',
    height: 'square',
    image: localImages.carInterior,
  },
  {
    category: 'Premium Vehicles',
    title: 'Private Cabin Detail',
    height: 'portrait',
    image: localImages.carInterior2,
  },
  {
    category: 'Interior Comfort',
    title: 'Comfort Seating',
    height: 'square',
    image: localImages.interior,
  },
  {
    category: 'Interior Comfort',
    title: 'Relaxed Travel Interior',
    height: 'wide',
    image: localImages.interior2,
  },
  {
    category: 'Luxury Stays',
    title: 'Curated Stay Room',
    height: 'portrait',
    image: localImages.room1,
  },
  {
    category: 'Luxury Stays',
    title: 'Premium Guest Room',
    height: 'square',
    image: localImages.room2,
  },
  {
    category: 'Luxury Stays',
    title: 'Luxury Accommodation',
    height: 'wide',
    image: localImages.room3,
  },
];

export const travelExperience = {
  eyebrow: 'The Experience',
  title: 'Beyond Just A Journey',
  text: "We believe that travel is more than just reaching a destination; it's about the stories you collect and the moments that take your breath away. Our gallery is a testament to the trust our travelers place in us to deliver seamless, luxurious, and soulful experiences across every mile.",
  image: localImages.interior2,
  checks: [
    { icon: 'ShieldCheck', text: 'Hand-picked premium locations' },
    { icon: 'Sparkles', text: 'Personalized travel storytelling' },
    { icon: 'ShieldUser', text: 'Safety and comfort prioritized' },
  ],
};
