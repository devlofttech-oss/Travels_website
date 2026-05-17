import Icon from '../Icon.jsx';

function FloatingCard({ icon, title, text, tone = 'primary' }) {
  return (
    <article className="floating-card">
      <div className={`floating-card__icon floating-card__icon--${tone}`}>
        <Icon name={icon} size={24} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default FloatingCard;
