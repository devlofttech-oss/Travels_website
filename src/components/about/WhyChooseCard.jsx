import Icon from '../Icon.jsx';

function WhyChooseCard({ icon, text, title }) {
  return (
    <article className="about-why-card">
      <div className="about-why-card__icon">
        <Icon name={icon} size={40} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default WhyChooseCard;
