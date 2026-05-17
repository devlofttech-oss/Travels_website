import { contactInfo } from './siteData.js';
import { localImages } from './localImages.js';

export const contactHero = {
  eyebrow: 'Get In Touch',
  title: 'Contact Sri Sai Tours & Travels',
  text: 'Experience the heart of South India with personalized travel experiences. We are here to help you plan your perfect getaway.',
  image: localImages.slider,
  alt: 'Sri Sai Tours and Travels premium travel hero image.',
};

export const contactCards = [
  {
    icon: 'Call',
    title: 'Phone Number',
    text: contactInfo.phoneDisplay,
    href: contactInfo.callHref,
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp',
    text: contactInfo.phoneDisplay,
    href: contactInfo.whatsappHref,
  },
  {
    icon: 'Mail',
    title: 'Email Address',
    text: contactInfo.email,
    href: contactInfo.emailHref,
  },
  {
    icon: 'MapPin',
    title: 'Office Location',
    text: contactInfo.addressLines.join(' '),
    href: contactInfo.mapsHref,
  },
];

export const mapImage = localImages.bus2;

export const galleryStrip = [
  {
    title: 'Premium Fleet',
    image: localImages.bus,
  },
  {
    title: 'Comfort Interior',
    image: localImages.interior2,
  },
  {
    title: 'Premium Car',
    image: localImages.car,
  },
  {
    title: 'Luxury Stay',
    image: localImages.room2,
  },
];

export const contactFaqs = [
  {
    question: 'How do I book a tour?',
    answer:
      'Booking is simple. Click any WhatsApp button to chat with an agent directly, or call our 24/7 helpline to discuss your requirements and secure your dates.',
  },
  {
    question: 'Do you provide airport pickup services?',
    answer:
      'Yes, all our luxury tour packages include seamless airport transfers in premium air-conditioned vehicles to ensure your journey starts and ends comfortably.',
  },
  {
    question: 'Are your tours suitable for families?',
    answer:
      'Absolutely. We specialize in family-friendly itineraries that balance leisure, education, and comfort for all age groups, including children and seniors.',
  },
  {
    question: 'Can I customize my travel itinerary?',
    answer:
      'Customization is our core strength. We work closely with you to tailor destinations, accommodation types, and activities to match your personal preferences and pace.',
  },
];
