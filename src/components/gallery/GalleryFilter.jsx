function GalleryFilter({ activeCategory, categories, onChange }) {
  return (
    <div className="gallery-filter" aria-label="Gallery categories">
      {categories.map((category) => (
        <button
          className={`gallery-filter__button ${activeCategory === category ? 'is-active' : ''}`}
          key={category}
          onClick={() => onChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default GalleryFilter;
