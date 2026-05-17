import Button from '../ui/Button.jsx';
import { contactInfo } from '../../data/siteData.js';

function CTASection({
  callLabel = 'Call Us Directly',
  chatLabel = 'Chat on WhatsApp',
  text,
  title,
  variant = 'compact',
}) {
  return (
    <section className={`section cta-section cta-section--${variant}`} aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card__shape" aria-hidden="true" />
          <div className="cta-card__content">
            <h2 id="cta-title">{title}</h2>
            {text ? <p>{text}</p> : null}
            <div className="cta-actions">
              <Button href={contactInfo.whatsappHref} variant="light" icon="MessageCircle">
                {chatLabel}
              </Button>
              <Button href={contactInfo.callHref} variant="ghost-light" icon="Call">
                {callLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
