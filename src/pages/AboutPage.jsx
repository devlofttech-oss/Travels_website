import { useEffect, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroBanner from '../components/common/HeroBanner.jsx';
import CTASection from '../components/common/CTASection.jsx';
import AboutFeatureCard from '../components/about/AboutFeatureCard.jsx';
import MissionVisionCard from '../components/about/MissionVisionCard.jsx';
import WhyChooseCard from '../components/about/WhyChooseCard.jsx';
import StatsCard from '../components/about/StatsCard.jsx';
import {
  AboutCompanySkeleton,
  AboutWhySkeleton,
  CtaSkeleton,
  MissionVisionSkeleton,
  PageHeroSkeleton,
  StatsSkeleton,
} from '../components/ui/Skeleton.jsx';
import {
  aboutHero,
  aboutReasons,
  companyHighlights,
  companyImage,
  missionVision,
  stats,
} from '../data/aboutData.js';

function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Header activePage="About" loading={loading} />
      <main id="about">
        {loading ? <PageHeroSkeleton variant="about" /> : <HeroBanner {...aboutHero} variant="about" />}
        <AboutCompanySection loading={loading} />
        <MissionVisionSection loading={loading} />
        <WhyChooseSection loading={loading} />
        <StatsSection loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            callLabel="Call Now"
            chatLabel="WhatsApp Us"
            title="Let’s Make Your Next Journey Memorable"
            variant="about"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function AboutCompanySection({ loading }) {
  return (
    <section className="section about-company-section" aria-labelledby="company-title">
      <div className="container">
        {loading ? (
          <AboutCompanySkeleton />
        ) : (
          <div className="about-company">
            <div className="about-company__media">
              <img src={companyImage} alt="Comfortable Sri Sai Tours vehicle interior." loading="lazy" />
            </div>
            <div className="about-company__copy">
              <h2 id="company-title">Pioneering Premium Exploration Since 2012</h2>
              <p>
                Sri Sai Tours & Travels was born from a passion for showing the world the
                hidden gems of South India. We believe that travel shouldn't just be about the
                destination, but the seamless comfort of the path taken.
              </p>
              <p>
                With a decade of expertise, we have specialized in high-end road journeys,
                spiritual circuits, and family getaways. Our commitment is to provide a fleet
                that feels like home and a service that feels like family.
              </p>
              <div className="about-feature-grid">
                {companyHighlights.map((item) => (
                  <AboutFeatureCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function MissionVisionSection({ loading }) {
  return (
    <section className="section mission-section" aria-label="Mission and vision">
      <div className="container">
        {loading ? (
          <MissionVisionSkeleton />
        ) : (
          <div className="mission-grid">
            {missionVision.map((item) => (
              <MissionVisionCard key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function WhyChooseSection({ loading }) {
  return (
    <section className="section about-why-section" aria-labelledby="why-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 id="why-title">Why Choose Us</h2>
          <p>
            Discover the difference of traveling with a team that cares about every detail of
            your journey.
          </p>
        </div>
        {loading ? (
          <AboutWhySkeleton />
        ) : (
          <div className="about-why-grid">
            {aboutReasons.map((item) => (
              <WhyChooseCard key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatsSection({ loading }) {
  return (
    <section className="stats-section" aria-label="Sri Sai Tours highlights">
      <div className="container">
        {loading ? (
          <StatsSkeleton />
        ) : (
          <div className="stats-grid">
            {stats.map((item) => (
              <StatsCard key={item.label} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutPage;
