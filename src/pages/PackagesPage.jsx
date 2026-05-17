import { useEffect, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroBanner from '../components/common/HeroBanner.jsx';
import CTASection from '../components/common/CTASection.jsx';
import FAQAccordion from '../components/common/FAQAccordion.jsx';
import PackageCard from '../components/home/PackageCard.jsx';
import FeatureCard from '../components/home/FeatureCard.jsx';
import {
  CtaSkeleton,
  FAQSkeleton,
  FeatureCardSkeleton,
  PackageCardSkeleton,
  PageHeroSkeleton,
} from '../components/ui/Skeleton.jsx';
import { faqs, packagesHero, tourPackages, travelFeatures } from '../data/packagesData.js';

function PackagesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Header activePage="Packages" loading={loading} />
      <main id="packages">
        {loading ? <PageHeroSkeleton /> : <HeroBanner {...packagesHero} />}
        <PackagesGrid loading={loading} />
        <WhyTravelWithUs loading={loading} />
        <FAQSection loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            text="Let's make your dream vacation a reality. Get in touch with our experts now for a free consultation and itinerary planning."
            title="Ready To Plan Your Journey?"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function PackagesGrid({ loading }) {
  return (
    <section className="section packages-grid-section" aria-labelledby="packages-grid-title">
      <div className="container">
        <h2 className="sr-only" id="packages-grid-title">
          Tour packages
        </h2>
        <div className="package-grid package-grid--tours">
          {loading
            ? [0, 1, 2].map((item) => <PackageCardSkeleton key={item} />)
            : tourPackages.map((item) => (
                <PackageCard key={item.title} variant="tour" {...item} />
              ))}
        </div>
      </div>
    </section>
  );
}

function WhyTravelWithUs({ loading }) {
  return (
    <section className="section packages-features" aria-labelledby="travel-features-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 id="travel-features-title">Why Travel With Us?</h2>
        </div>
        <div className="feature-grid feature-grid--soft">
          {loading
            ? [0, 1, 2].map((item) => <FeatureCardSkeleton key={item} />)
            : travelFeatures.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  variant="soft"
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                  tone={feature.tone}
                />
              ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ loading }) {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <div className="section-heading section-heading--center">
          <h2 id="faq-title">Frequently Asked Questions</h2>
        </div>
        {loading ? <FAQSkeleton /> : <FAQAccordion items={faqs} />}
      </div>
    </section>
  );
}

export default PackagesPage;
