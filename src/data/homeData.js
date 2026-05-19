import { localImages } from './localImages.js';

export const heroImage = localImages.slider;

export const trustItems = [
  { icon: 'Armchair', label: 'Comfortable Travel' },
  { icon: 'ShieldCheck', label: 'Trusted Service' },
  { icon: 'WalletCards', label: 'Affordable Packages' },
  { icon: 'MapPinned', label: 'Experienced Drivers' },
];

export const packageImages = {
  coorg: localImages.coorg,
  coorg2: localImages.coorg2,
  mysore: localImages.mysore,
  mysore2: localImages.mysore2,
  ooty: localImages.ooty,
  tirupati: localImages.tirupati,
  wayanad: localImages.wayanad,
  wayanad2: localImages.wayanad2,
};

export const packages = [
  {
    title: 'Mysore to Wayanad',
    duration: '1 DAY TOUR',
    price: '₹6,200.00',
    description: 'A one-day taxi tour from Mysore to the green hills and scenic viewpoints of Wayanad.',
    image: packageImages.wayanad,
  },
  {
    title: 'Bangalore to Mysore',
    duration: 'DAY SIGHTSEEING',
    price: '₹5,700.00',
    description: 'A quick sightseeing trip from Bangalore to Mysore for palace visits and city highlights.',
    image: packageImages.mysore,
  },
  {
    title: 'Mysore to Ooty',
    duration: 'SAME DAY PACKAGE',
    price: '₹5,700.00',
    description: 'A same-day hill station drive from Mysore to Ooty with cool views and relaxed stops.',
    image: packageImages.ooty,
  },
  {
    title: 'Mysore to Coorg',
    duration: 'SINGLE DAY TRIP',
    price: '₹4,700.00',
    description: 'A single-day Mysore to Coorg trip covering coffee country, viewpoints, and local charm.',
    image: packageImages.coorg,
  },
  {
    title: 'Mysore-Coorg-Wayanad',
    duration: '4 DAYS - 3 NIGHTS',
    price: '₹19,000.00',
    description: 'A 4-day route through Mysore, Coorg, and Wayanad with hills, forests, and waterfalls.',
    image: packageImages.wayanad2,
  },
  {
    title: 'Mysore City Tour',
    duration: 'CITY DAY TOUR',
    price: '₹3,000.00',
    description: 'A city day tour covering Mysore Palace, landmarks, markets, and heritage spots.',
    image: packageImages.mysore2,
  },
  {
    title: 'Mysore-Ooty-Coorg',
    duration: '4 DAYS - 3 NIGHTS',
    price: '₹18,000.00',
    description: 'A 4-day journey through Mysore, Ooty, and Coorg with palaces, hills, and coffee estates.',
    image: packageImages.coorg2,
  },
  {
    title: 'Mysore to Tirupati',
    duration: '2 DAYS - 1 NIGHTS',
    price: '₹15,000.00',
    description: 'A 2-day Mysore to Tirupati temple package planned for a comfortable darshan trip.',
    image: packageImages.tirupati,
  },
];

export const featuredPackages = packages.slice(0, 3);

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
