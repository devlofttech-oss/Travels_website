import { useEffect, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroBanner from '../components/common/HeroBanner.jsx';
import CTASection from '../components/common/CTASection.jsx';
import MissionVisionCard from '../components/about/MissionVisionCard.jsx';
import WhyChooseCard from '../components/about/WhyChooseCard.jsx';
import {
  AboutWhySkeleton,
  CtaSkeleton,
  MissionVisionSkeleton,
  PageHeroSkeleton,
} from '../components/ui/Skeleton.jsx';
import { aboutHero, aboutReasons, missionVision } from '../data/aboutData.js';

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
        <MissionVisionSection loading={loading} />
        <WhyChooseSection loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            callLabel="Call Now"
            chatLabel="WhatsApp Us"
            title="Letâ€™s Make Your Next Journey Memorable"
            variant="about"
          />
        )}
      </main>
      <Footer />
    </>
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

export default AboutPage;
