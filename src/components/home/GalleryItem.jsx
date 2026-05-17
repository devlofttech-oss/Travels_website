function GalleryItem({ src, alt }) {
  return (
    <figure className="gallery-item">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export default GalleryItem;
