import { useEffect, useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroBanner from '../components/common/HeroBanner.jsx';
import CTASection from '../components/common/CTASection.jsx';
import FAQAccordion from '../components/common/FAQAccordion.jsx';
import Button from '../components/ui/Button.jsx';
import ContactCard from '../components/contact/ContactCard.jsx';
import MapSection from '../components/contact/MapSection.jsx';
import GalleryStrip from '../components/contact/GalleryStrip.jsx';
import {
  ContactCardsSkeleton,
  CtaSkeleton,
  FAQSkeleton,
  GalleryStripSkeleton,
  MapSkeleton,
  PageHeroSkeleton,
  QuickContactSkeleton,
} from '../components/ui/Skeleton.jsx';
import { contactCards, contactFaqs, contactHero, galleryStrip } from '../data/contactData.js';
import { contactInfo } from '../data/siteData.js';

function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Header activePage="Contact" loading={loading} />
      <main id="contact">
        {loading ? <PageHeroSkeleton variant="contact" /> : <HeroBanner {...contactHero} variant="contact" />}
        <ContactInfoSection loading={loading} />
        <QuickContactSection loading={loading} />
        <section className="contact-map-section" id="map" aria-labelledby="map-title">
          <div className="container">{loading ? <MapSkeleton /> : <MapSection />}</div>
        </section>
        <GalleryPreview loading={loading} />
        <FAQSection loading={loading} />
        {loading ? (
          <CtaSkeleton />
        ) : (
          <CTASection
            callLabel="Call Now"
            chatLabel="WhatsApp Us"
            text="Let our travel experts craft the perfect South Indian experience just for you. Contact us today and travel in style."
            title="Ready For Your Next Journey?"
            variant="contact"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function ContactInfoSection({ loading }) {
  return (
    <section className="contact-info-section" aria-label="Contact information">
      <div className="container">
        {loading ? (
          <ContactCardsSkeleton />
        ) : (
          <div className="contact-card-grid">
            {contactCards.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function QuickContactSection({ loading }) {
  return (
    <section className="quick-contact" aria-labelledby="quick-contact-title">
      <div className="container">
        {loading ? (
          <QuickContactSkeleton />
        ) : (
          <div className="quick-contact__inner">
            <h2 id="quick-contact-title">Prefer a Direct Connection?</h2>
            <div className="quick-contact__actions">
              <Button href={contactInfo.whatsappHref} icon="MessageCircle" className="quick-contact__primary">
                Chat on WhatsApp
              </Button>
              <Button href={contactInfo.callHref} variant="outline" icon="Call">
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryPreview({ loading }) {
  return (
    <section className="contact-gallery-strip" aria-label="Travel gallery preview">
      {loading ? <GalleryStripSkeleton /> : <GalleryStrip items={galleryStrip} />}
    </section>
  );
}

function FAQSection({ loading }) {
  return (
    <section className="section contact-faq-section" aria-labelledby="contact-faq-title">
      <div className="container container--faq">
        <div className="section-heading section-heading--center">
          <h2 id="contact-faq-title">Frequently Asked Questions</h2>
        </div>
        {loading ? <FAQSkeleton /> : <FAQAccordion items={contactFaqs} />}
      </div>
    </section>
  );
}

export default ContactPage;
