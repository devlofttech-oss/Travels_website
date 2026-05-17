import { contactInfo } from './siteData.js';

export const contactHero = {
  eyebrow: 'Get In Touch',
  title: 'Contact Sri Sai Tours & Travels',
  text: 'Experience the heart of South India with personalized travel experiences. We are here to help you plan your perfect getaway.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOaDid_JmDiPBVUEDoQ2-VsFpqNrkQU4Cni2CV8ndmbN6vZkng1m3LMnIFryB7aHyTxSLDiKyMYTQu1FBimPu8eGj3xXdFT9dycROkET9OexJpWefc2zni8SsmdTt-Rr_ZjLLIJ1PYCsA4svwMeUjmju1rSBnUDhOy1I1_tSSRQPU7Bmpq_BznPzM8HzTjr3IiRNc5qv0YVGqo_Ryu85xtpwDuKEnm4PTiPz25xEdF8ZBgKH5irNSILlGGNKovC27k7hpqHo7vIaz_',
  alt: 'Sunrise over green Western Ghats mountains and tea plantations.',
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

export const mapImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ybFuWntYjVm61UyyPgabnLILMJ8QoVM0gp9bOXao_jvqZb2nNJHAkKn4X2TkA_r6At59uHVhiXNsLFPuZojzBcS6TfYOXJaSC4J3bJgrtP-gJ3w8w05n5l0dX00DdMspDOwJdKGQaM--1Kk2on9bdktq4UeM12EwQLwoFEXvDMF1B-6Lc92OTH4W9MWVagfo-9zcsE795N28zmPsGg3E_wmt4uQn6rxiUm6eVAukG9wUtXqPcFiedcliNmcPyeHBpfTQppozLzwN';

export const galleryStrip = [
  {
    title: 'Taj Mahal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqqXU6XvxsJmNZG0_h8XAHUc_R94FFHX6aJNPnXiFlxWpPE8nwe5W3wtOoScwqZtBTCTLf1BKmiEBGhoYR2Wwn_95NpjSk6DOI07rjzh5crlgihv2o9NCH6E8EJUueZt6mD6kAUwvBAp5dwowIQKnUqxp7eaiht1dQu6CjfL6hgsDbGeWH9oN8kiM0s1e-CYAvjXIBHPqzjR0tDd7bETHuHdCZR9BWQ_ZNo-jDWhkpig5iOV8h9NxIa8qJiVNdfyB2RN6XKt41AhLQ',
  },
  {
    title: 'Kerala Backwaters',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIh0ziPjbx5DlzlcVzu6M8RYvHcytyHQj8_M5dhPFWTzY1OkqVuJdEAzaNQ-mxT6kv7qMjJXddrsDoUriyMIi-HeuMtbfjrq5Lg7zFrcu7OYZAFsvSUvGhvwf-NC1Io7C_cRPSzl8rNsTmPD1C9PR1Fxl3xooUc6P4vQ6F7ZLKscZ9jjCfG_9MRiHgKhrFxRcfXLu9_cM_pe38vRh35yFa3H9rAk3xrMP84Q04cBkPGWILtDPR5wzu_ibLewljRhM88scTdZpZTdVY',
  },
  {
    title: 'Jaipur Palace',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKqrmlXCrIQiBdwzNZ2UFC-BnW_NcvJBlzyXGRdjyTdmt2V8bMYFHRzjozeTxNRQ7KNAxDQ6jjitV0-HBXu1UYiu5_Vig02E4Fkp5Q9sRJsHKSlorFoolL_S0EfQTbEjUW0DQThmd3qvSJKHeZafvweoVQnUCESVxjT1kBFGxXQjw5awexZLZtrP8qbcp71zmnyBd2-oAjAr8mocIJwq_Em3KZ5nmlP7TZFfNOgOT8jOPTkSBqlwfDscRf00-9yG4aO2LmOdBwTnLS',
  },
  {
    title: 'Hampi Ruins',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFfu95yWeapYMTfb4Xp9ha692b1tsW-JvHFzIQDDpATMeAlOje8DcGg_SkphaAMcEO77eFn4SPLFCkOyG_YxLCuNFRJnFvKEMzrxTgYxbocrn6ciskUiEPu4MYgYgjGeyBMBmqaE5hJny2qri89vtgYLXgEUYvqs7XWTIgX4gdDMDeSLa47vlgVOV7aeGcepbRyxqiK8UIHVtp1pfv-xV5LQfSKCI66gpEI9Qk6uEMCrVXP_AQ9LSh0fR2-KIB1L9t8v0VHOrRU9NL',
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
