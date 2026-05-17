function Skeleton({ className = '' }) {
  return <span aria-hidden="true" className={`skeleton ${className}`} />;
}

export function HeaderSkeleton() {
  return (
    <div className="header-skeleton">
      <Skeleton className="skeleton-brand" />
      <div className="header-skeleton__links">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <Skeleton className="skeleton-action" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="section hero-section" aria-label="Loading hero">
      <div className="container hero-shell hero-shell--loading">
        <Skeleton className="hero-skeleton__eyebrow" />
        <Skeleton className="hero-skeleton__title" />
        <Skeleton className="hero-skeleton__title hero-skeleton__title--short" />
        <div className="hero-skeleton__actions">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className="container floating-cards floating-cards--loading">
        <Skeleton />
        <Skeleton />
      </div>
    </section>
  );
}

export function PageHeroSkeleton({ variant = 'packages' }) {
  return (
    <section className={`page-hero page-hero--${variant}`} aria-label="Loading page hero">
      <div className="container">
        <div className="page-hero__banner page-hero__banner--loading">
          <Skeleton className="page-hero-skeleton__eyebrow" />
          <Skeleton className="page-hero-skeleton__title" />
          <Skeleton className="page-hero-skeleton__copy" />
          <Skeleton className="page-hero-skeleton__copy page-hero-skeleton__copy--short" />
        </div>
      </div>
    </section>
  );
}

export function CardSkeleton() {
  return (
    <article className="package-card package-card--loading">
      <Skeleton className="package-card__image" />
      <div className="package-card__body">
        <Skeleton className="skeleton-line skeleton-line--sm" />
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <div className="package-card__meta">
          <Skeleton className="skeleton-price" />
          <Skeleton className="skeleton-pill" />
        </div>
      </div>
    </article>
  );
}

export function PackageCardSkeleton() {
  return (
    <article className="package-card package-card--tour package-card--loading">
      <Skeleton className="package-card__image" />
      <div className="package-card__body">
        <div className="package-card__topline">
          <Skeleton className="skeleton-line skeleton-line--title" />
          <Skeleton className="skeleton-badge" />
        </div>
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <div className="package-card__details">
          <Skeleton className="skeleton-line" />
          <Skeleton className="skeleton-line skeleton-line--short" />
        </div>
        <div className="package-card__chips">
          <Skeleton className="skeleton-chip" />
          <Skeleton className="skeleton-chip" />
          <Skeleton className="skeleton-chip" />
        </div>
        <div className="package-card__actions">
          <Skeleton className="skeleton-button" />
          <Skeleton className="skeleton-button" />
        </div>
      </div>
    </article>
  );
}

export function FeatureCardSkeleton() {
  return (
    <article className="feature-card feature-card--soft feature-card--loading">
      <Skeleton className="feature-skeleton__icon" />
      <Skeleton className="skeleton-line skeleton-line--title" />
      <Skeleton className="skeleton-line" />
      <Skeleton className="skeleton-line skeleton-line--short" />
    </article>
  );
}

export function FAQSkeleton() {
  return (
    <div className="faq-list" aria-label="Loading frequently asked questions">
      {[0, 1, 2].map((item) => (
        <article className="faq-item faq-item--loading" key={item}>
          <Skeleton className="skeleton-line skeleton-line--title" />
          <Skeleton className="skeleton-line" />
        </article>
      ))}
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="gallery-grid gallery-grid--loading" aria-label="Loading gallery">
      {[0, 1, 2, 3, 4].map((item) => (
        <Skeleton key={item} className={`gallery-skeleton gallery-skeleton--${item + 1}`} />
      ))}
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="about-layout" aria-label="Loading about section">
      <Skeleton className="about-skeleton__image" />
      <div className="about-copy">
        <Skeleton className="skeleton-line skeleton-line--sm" />
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <Skeleton className="skeleton-pill" />
      </div>
    </div>
  );
}

export function AboutCompanySkeleton() {
  return (
    <div className="about-company" aria-label="Loading company section">
      <Skeleton className="about-company-skeleton__image" />
      <div className="about-company__copy">
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <div className="about-feature-grid">
          <Skeleton className="about-card-skeleton" />
          <Skeleton className="about-card-skeleton" />
        </div>
      </div>
    </div>
  );
}

export function MissionVisionSkeleton() {
  return (
    <div className="mission-grid" aria-label="Loading mission and vision">
      {[0, 1].map((item) => (
        <article className="mission-card mission-card--loading" key={item}>
          <Skeleton className="feature-skeleton__icon" />
          <Skeleton className="skeleton-line skeleton-line--title" />
          <Skeleton className="skeleton-line" />
          <Skeleton className="skeleton-line" />
          <Skeleton className="skeleton-line skeleton-line--short" />
        </article>
      ))}
    </div>
  );
}

export function AboutWhySkeleton() {
  return (
    <div className="about-why-grid" aria-label="Loading reasons to choose us">
      {[0, 1, 2].map((item) => (
        <article className="about-why-card about-why-card--loading" key={item}>
          <Skeleton className="about-why-skeleton__icon" />
          <Skeleton className="skeleton-line skeleton-line--title" />
          <Skeleton className="skeleton-line" />
          <Skeleton className="skeleton-line skeleton-line--short" />
        </article>
      ))}
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="stats-grid" aria-label="Loading stats">
      {[0, 1, 2, 3].map((item) => (
        <article className="stats-card stats-card--loading" key={item}>
          <Skeleton className="stats-skeleton__value" />
          <Skeleton className="stats-skeleton__label" />
        </article>
      ))}
    </div>
  );
}

export function ContactCardsSkeleton() {
  return (
    <div className="contact-card-grid" aria-label="Loading contact cards">
      {[0, 1, 2, 3].map((item) => (
        <article className="contact-card contact-card--loading" key={item}>
          <Skeleton className="contact-skeleton__icon" />
          <Skeleton className="skeleton-line skeleton-line--title" />
          <Skeleton className="skeleton-line skeleton-line--short" />
        </article>
      ))}
    </div>
  );
}

export function QuickContactSkeleton() {
  return (
    <div className="quick-contact__inner" aria-label="Loading quick contact">
      <Skeleton className="hero-skeleton__title hero-skeleton__title--short" />
      <div className="quick-contact__actions">
        <Skeleton className="quick-contact-skeleton__button" />
        <Skeleton className="quick-contact-skeleton__button" />
      </div>
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="contact-map-layout" aria-label="Loading map section">
      <div className="contact-map-copy">
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <Skeleton className="contact-address-skeleton" />
      </div>
      <Skeleton className="contact-map-skeleton" />
    </div>
  );
}

export function GalleryStripSkeleton() {
  return (
    <div className="contact-gallery-strip__inner" aria-label="Loading gallery strip">
      {[0, 1, 2, 3].map((item) => (
        <Skeleton
          className={`contact-gallery-skeleton contact-gallery-item--${item + 1}`}
          key={item}
        />
      ))}
    </div>
  );
}

export function GalleryFilterSkeleton() {
  return (
    <div className="gallery-filter" aria-label="Loading gallery categories">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Skeleton className="gallery-filter-skeleton" key={item} />
      ))}
    </div>
  );
}

export function MasonryGallerySkeleton() {
  return (
    <div className="masonry-grid" aria-label="Loading gallery">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Skeleton
          className={`masonry-item gallery-card-skeleton gallery-card-skeleton--${item + 1}`}
          key={item}
        />
      ))}
    </div>
  );
}

export function TravelExperienceSkeleton() {
  return (
    <div className="travel-experience" aria-label="Loading travel experience">
      <Skeleton className="travel-experience-skeleton__image" />
      <div className="travel-experience__copy">
        <Skeleton className="skeleton-line skeleton-line--sm" />
        <Skeleton className="skeleton-line skeleton-line--title" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line" />
        <Skeleton className="skeleton-line skeleton-line--short" />
        <div className="travel-experience__checks">
          <Skeleton className="skeleton-line skeleton-line--short" />
          <Skeleton className="skeleton-line skeleton-line--short" />
          <Skeleton className="skeleton-line skeleton-line--short" />
        </div>
      </div>
    </div>
  );
}

export function CtaSkeleton() {
  return (
    <section className="section" aria-label="Loading call to action">
      <div className="container">
        <div className="cta-card cta-card--loading">
          <Skeleton className="hero-skeleton__title" />
          <Skeleton className="skeleton-line" />
          <div className="cta-actions">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skeleton;
