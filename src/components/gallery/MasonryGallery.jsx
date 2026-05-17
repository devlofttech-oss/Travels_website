import GalleryCard from './GalleryCard.jsx';

function MasonryGallery({ items }) {
  return (
    <div className="masonry-grid">
      {items.map((item) => (
        <GalleryCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default MasonryGallery;
