import Icon from '../Icon.jsx';

function ContactCard({ href, icon, text, title }) {
  return (
    <a className="contact-card" href={href}>
      <div className="contact-card__icon">
        <Icon name={icon} size={30} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </a>
  );
}

export default ContactCard;
