function GalleryStrip({ items }) {
  return (
    <div className="contact-gallery-strip__inner">
      {items.map((item, index) => (
        <figure className={`contact-gallery-item contact-gallery-item--${index + 1}`} key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

export default GalleryStrip;
