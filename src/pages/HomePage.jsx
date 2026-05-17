import { useEffect, useRef, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import Button from '../components/ui/Button.jsx';
import Icon from '../components/Icon.jsx';
import PackageCard from '../components/home/PackageCard.jsx';
import GalleryItem from '../components/home/GalleryItem.jsx';
import FeatureCard from '../components/home/FeatureCard.jsx';
import CTASection from '../components/common/CTASection.jsx';
import {
  AboutSkeleton,
  CardSkeleton,
  CtaSkeleton,
  GallerySkeleton,
  HeroSkeleton,
} from '../components/ui/Skeleton.jsx';
import {
  aboutImage,
  features,
  galleryImages,
  heroImage,
  packages,
  trustItems,
} from '../data/homeData.js';
import { contactInfo } from '../data/siteData.js';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Header loading={loading} />
      <main id="home">
        {loading ? <HeroSkeleton /> : <HeroSection />}
        <TrustStrip />
        <FeaturedPackages loading={loading} />
        <GalleryPreview loading={loading} />
        <WhyChooseUs />
        <AboutPreview loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            callLabel="Call Now"
            chatLabel="WhatsApp Now"
            text="Don't wait for the perfect moment. Book your dream trip today and explore the beauty of South India with Sri Sai Tours & Travels."
            title="Ready For Your Next Journey?"
            variant="home"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="section hero-section" aria-labelledby="hero-title">
      <div className="container hero-wrap">
        <div className="hero-shell">
          <img
            className="hero-shell__image"
            src={heroImage}
            alt="Luxury SUV driving through lush South Indian tea plantations."
          />
          <div className="hero-shell__overlay" />
          <div className="hero-content">
            <p className="eyebrow">Explore South India Comfortably</p>
            <h1 id="hero-title">Experience Memorable Journeys With Sri Sai</h1>
            <div className="hero-actions">
              <Button href="/packages" icon="ArrowRight" iconPosition="right">
                View Packages
              </Button>
              <Button href={contactInfo.whatsappHref} variant="glass" icon="MessageCircle">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Travel benefits">
      <div className="container trust-strip__inner">
        {trustItems.map((item) => (
          <div className="trust-item" key={item.label}>
            <Icon name={item.icon} size={32} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedPackages({ loading }) {
  const gridRef = useRef(null);
  const scrollPackages = (direction) => {
    gridRef.current?.scrollBy({
      left: direction * 320,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <h2 id="packages-title">Popular Tour Packages</h2>
            <span aria-hidden="true" />
          </div>
          <div className="section-controls">
            <button type="button" onClick={() => scrollPackages(-1)} aria-label="Previous packages">
              <Icon name="ChevronLeft" size={22} />
            </button>
            <button type="button" onClick={() => scrollPackages(1)} aria-label="Next packages">
              <Icon name="ChevronRight" size={22} />
            </button>
          </div>
        </div>

        <div className="package-grid" ref={gridRef}>
          {loading
            ? [0, 1, 2].map((item) => <CardSkeleton key={item} />)
            : packages.map((item) => <PackageCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview({ loading }) {
  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 id="gallery-title">Travel Memories</h2>
          <p>
            Capture moments from our previous trips across the diverse landscapes of South
            India.
          </p>
        </div>

        {loading ? (
          <GallerySkeleton />
        ) : (
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <GalleryItem key={item.src} {...item} />
            ))}
          </div>
        )}

        <div className="section-action">
          <Button href="/gallery" variant="outline">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="features-title">
      <div className="container">
        <h2 className="sr-only" id="features-title">
          Why choose Sri Sai Tours and Travels
        </h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview({ loading }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        {loading ? (
          <AboutSkeleton />
        ) : (
          <div className="about-layout">
            <div className="about-media">
              <img src={aboutImage} alt="Sri Sai Tours premium travel coach." loading="lazy" />
              <div className="experience-badge">
                <strong>15+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow--blue">Our Story</p>
              <h2 id="about-title">Passionate about Creating Unforgettable Memories</h2>
              <p>
                Sri Sai Tours & Travels started with a simple vision: to make South India's
                hidden gems accessible and comfortable for everyone. Over the last decade, we
                have grown into one of the most trusted names in personalized travel.
              </p>
              <p>
                We don't just provide cars; we provide experiences. Our drivers are local
                experts who know the best routes, the cleanest stops, and the most authentic
                food joints, ensuring your road trip is as beautiful as the destination.
              </p>
              <Button href="/about" variant="secondary">
                Read Full Story
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
