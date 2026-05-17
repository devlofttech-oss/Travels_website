import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';

function Button({
  children,
  href,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classNames = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  const content = (
    <>
      {icon && iconPosition === 'left' ? <Icon name={icon} size={20} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <Icon name={icon} size={20} /> : null}
    </>
  );

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link className={classNames} to={href} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <a className={classNames} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type="button" {...props}>
      {content}
    </button>
  );
}

export default Button;
