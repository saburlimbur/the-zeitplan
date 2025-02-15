import { ButtonProps } from '../../proptypes';

function Button({ children, onClick, className, type }) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = ButtonProps;

export default Button;
