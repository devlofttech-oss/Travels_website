function HeroBanner({
  alt = 'Scenic South India travel landscape',
  eyebrow,
  image,
  text,
  title,
  variant = 'packages',
}) {
  return (
    <section className={`page-hero page-hero--${variant}`} aria-labelledby="page-hero-title">
      <div className="container">
        <div className="page-hero__banner">
          <img src={image} alt={alt} />
          <div className="page-hero__overlay" />
          <div className="page-hero__content">
            <p>{eyebrow}</p>
            <h1 id="page-hero-title">{title}</h1>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
