import { IButton } from '../../../redux/types/types';

// Styles
import './Button.css';

const Button = ({
  onClick,
  title,
  style,
  className = 'button',
  width,
}: IButton) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        ...style,
        maxWidth: width,
        width: '100%',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
