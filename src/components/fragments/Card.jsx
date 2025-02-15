import { CardProps } from '../../proptypes';

function Card({ className = '', children }) {
  return <article className={className}>{children}</article>;
}

function Header({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

function Body({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className = '', children }) {
  return <footer className={className}>{children}</footer>;
}

function Badge({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

Card.propTypes = CardProps;
Header.propTypes = CardProps;
Body.propTypes = CardProps;
Footer.propTypes = CardProps;
Badge.propTypes = CardProps;

// subcomponent composition
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Badge = Badge;

export default Card;
