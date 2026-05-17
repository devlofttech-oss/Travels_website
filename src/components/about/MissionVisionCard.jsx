import Icon from '../Icon.jsx';

function MissionVisionCard({ icon, text, title, tone = 'primary' }) {
  return (
    <article className="mission-card">
      <div className={`mission-card__icon mission-card__icon--${tone}`}>
        <Icon name={icon} size={32} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default MissionVisionCard;
