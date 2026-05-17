import { useMemo, useState, useEffect } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroBanner from '../components/common/HeroBanner.jsx';
import CTASection from '../components/common/CTASection.jsx';
import GalleryFilter from '../components/gallery/GalleryFilter.jsx';
import MasonryGallery from '../components/gallery/MasonryGallery.jsx';
import StatsCard from '../components/about/StatsCard.jsx';
import Icon from '../components/Icon.jsx';
import {
  CtaSkeleton,
  GalleryFilterSkeleton,
  MasonryGallerySkeleton,
  PageHeroSkeleton,
  StatsSkeleton,
  TravelExperienceSkeleton,
} from '../components/ui/Skeleton.jsx';
import {
  galleryCategories,
  galleryHero,
  galleryItems,
  galleryStats,
  travelExperience,
} from '../data/galleryData.js';

function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Moments');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);

    return () => window.clearTimeout(timer);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Moments') {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header activePage="Gallery" loading={loading} />
      <main id="gallery" className="gallery-page">
        {loading ? <PageHeroSkeleton variant="gallery" /> : <HeroBanner {...galleryHero} variant="gallery" />}
        <section className="gallery-filter-section">
          <div className="container">
            {loading ? (
              <GalleryFilterSkeleton />
            ) : (
              <GalleryFilter
                activeCategory={activeCategory}
                categories={galleryCategories}
                onChange={setActiveCategory}
              />
            )}
          </div>
        </section>
        <section className="gallery-grid-section" aria-label="Travel memories gallery">
          <div className="container">
            {loading ? <MasonryGallerySkeleton /> : <MasonryGallery items={filteredItems} />}
          </div>
        </section>
        <TravelExperienceSection loading={loading} />
        <StatsSection loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            callLabel="Call Now"
            chatLabel="WhatsApp Us"
            text="Connect with our travel experts today and start planning your next premium escape."
            title="Ready To Create New Travel Memories?"
            variant="gallery"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function TravelExperienceSection({ loading }) {
  return (
    <section className="travel-experience-section" aria-labelledby="experience-title">
      <div className="container">
        {loading ? (
          <TravelExperienceSkeleton />
        ) : (
          <div className="travel-experience">
            <div className="travel-experience__media">
              <img src={travelExperience.image} alt="Traveler sitting on a dock beside a serene lake." />
            </div>
            <div className="travel-experience__copy">
              <p className="eyebrow eyebrow--blue">{travelExperience.eyebrow}</p>
              <h2 id="experience-title">{travelExperience.title}</h2>
              <p>{travelExperience.text}</p>
              <ul className="travel-experience__checks">
                {travelExperience.checks.map((item) => (
                  <li key={item.text}>
                    <Icon name={item.icon} size={22} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatsSection({ loading }) {
  return (
    <section className="gallery-stats-section" aria-label="Sri Sai Tours gallery highlights">
      <div className="container">
        {loading ? (
          <StatsSkeleton />
        ) : (
          <div className="stats-grid stats-grid--gallery">
            {galleryStats.map((item) => (
              <StatsCard key={item.label} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryPage;
