import Icon from '../Icon.jsx';

function FeatureCard({ className = '', icon, title, text, tone = 'primary', variant = 'interactive' }) {
  return (
    <article className={`feature-card feature-card--${variant} ${className}`.trim()}>
      <div className={`feature-card__icon feature-card__icon--${tone}`}>
        <Icon name={icon} size={32} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
