import Icon from '../Icon.jsx';

function AboutFeatureCard({ icon, text, title }) {
  return (
    <article className="about-feature-card">
      <Icon name={icon} size={40} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default AboutFeatureCard;
