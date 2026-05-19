export const whatsappMessage =
  'Hello Sri Sai Tours & Travels, I would like to know more about your travel packages.';

export const contactInfo = {
  phoneDisplay: '+91 74117 88553',
  callHref: 'tel:+917411788553',
  whatsappHref: `https://wa.me/917411788553?text=${encodeURIComponent(whatsappMessage)}`,
  mapsHref:
    'https://maps.google.com/?q=442,2nd+Cross+Rd,+Siddhartha+Layout,+Mysuru,+Karnataka+570011',
  email: 'info@srisaitours.com',
  emailHref: 'mailto:info@srisaitours.com',
  addressLines: [
    'Sri Sai Tours & Travels',
    '442, 2nd Cross Rd,',
    'Siddhartha Layout,',
    'Mysuru, Karnataka 570011',
  ],
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Fleet', href: '/packages' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Destinations',
    links: [
      { label: 'Mysore to Wayanad', href: '/packages' },
      { label: 'Bangalore to Mysore', href: '/packages' },
      { label: 'Mysore to Ooty', href: '/packages' },
      { label: 'Mysore to Coorg', href: '/packages' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Service', href: '/contact' },
    ],
  },
];
