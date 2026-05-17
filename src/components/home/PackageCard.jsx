import Icon from '../Icon.jsx';
import Button from '../ui/Button.jsx';
import { contactInfo } from '../../data/siteData.js';

function PackageCard({
  image,
  duration,
  title,
  description,
  price,
  locations,
  tags = [],
  variant = 'home',
}) {
  const isDetailed = variant === 'tour';

  return (
    <article className={`package-card package-card--${variant}`}>
      <div className="package-card__media">
        <img src={image} alt={`${title} destination`} loading="lazy" />
      </div>
      <div className="package-card__body">
        {isDetailed ? (
          <div className="package-card__topline">
            <h3>{title}</h3>
            <span className="package-card__badge">{duration}</span>
          </div>
        ) : (
          <>
            <div className="package-card__duration">
              <Icon name="Clock" size={18} />
              <span>{duration}</span>
            </div>
            <h3>{title}</h3>
          </>
        )}
        <p>{description}</p>

        {isDetailed ? (
          <>
            <div className="package-card__details">
              <div>
                <Icon name="MapPin" size={20} />
                <span>{locations}</span>
              </div>
              <div>
                <Icon name="BadgeIndianRupee" size={20} />
                <strong>{price}</strong>
              </div>
            </div>
            <div className="package-card__chips" aria-label={`${title} inclusions`}>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="package-card__actions">
              <Button href={contactInfo.whatsappHref} icon="MessageCircle">
                WhatsApp
              </Button>
              <Button href={contactInfo.callHref} variant="tour-outline" icon="Call">
                Call Now
              </Button>
            </div>
          </>
        ) : (
          <div className="package-card__meta">
            <div>
              <span>Starting Price</span>
              <strong>{price}</strong>
            </div>
            <Button href={contactInfo.whatsappHref} variant="soft" icon="MessageCircle">
              WhatsApp
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

export default PackageCard;
