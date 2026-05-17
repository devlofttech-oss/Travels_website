function GalleryCard({ category, height = 'square', image, title }) {
  return (
    <article className={`masonry-item gallery-card gallery-card--${height}`}>
      <img src={image} alt={title} loading="lazy" />
      <div className="gallery-card__overlay">
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </article>
  );
}

export default GalleryCard;
