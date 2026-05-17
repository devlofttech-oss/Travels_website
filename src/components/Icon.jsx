import {
  Armchair,
  ArrowRight,
  BadgeIndianRupee,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Clock,
  Eye,
  Camera,
  Headset,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  Share2,
  ShieldCheck,
  ShieldUser,
  Sparkles,
  Stars,
  WalletCards,
  X,
} from 'lucide-react';

const icons = {
  Armchair,
  ArrowRight,
  BadgeIndianRupee,
  Car,
  Call: Phone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Clock,
  Eye,
  Camera,
  Headset,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Rocket,
  Share2,
  ShieldCheck,
  ShieldUser,
  Sparkles,
  Stars,
  WalletCards,
  X,
};

function Icon({ name, size = 24, strokeWidth = 2, className = '', ...props }) {
  const Component = icons[name] || Sparkles;

  return (
    <Component
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}

export default Icon;
