import Icon from '../Icon.jsx';
import { mapImage } from '../../data/contactData.js';
import { contactInfo } from '../../data/siteData.js';

function MapSection() {
  return (
    <div className="contact-map-layout">
      <div className="contact-map-copy">
        <h2 id="map-title">Visit Our Office</h2>
        <p>
          Our office is located in Mysuru. Stop by for a coffee and let's
          plan your next adventure together.
        </p>
        <a className="contact-address-card" href={contactInfo.mapsHref}>
          <Icon name="MapPin" size={24} />
          <div>
            <h3>Sri Sai Tours & Travels</h3>
            <p>{contactInfo.addressLines.slice(1).join(' ')}</p>
          </div>
        </a>
      </div>

      <a className="contact-map-visual" href={contactInfo.mapsHref} aria-label="Open Google Maps directions">
        <img src={mapImage} alt="Sri Sai Tours fleet image for office directions." loading="lazy" />
        <div className="contact-map-badge">
          <span aria-hidden="true" />
          <strong>Sri Sai Tours HQ</strong>
        </div>
      </a>
    </div>
  );
}

export default MapSection;
