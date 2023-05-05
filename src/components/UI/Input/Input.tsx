import { IInput } from '../../../redux/types/types';

import './Input.css';

const Input = ({
  onValue = (value) => value,
  type = 'string',
  className = 'input',
  titleInput,
  style,
  value,
  required,
  name,
  readonly,
  width,
  id,
}: IInput) => {
  return (
    <input
      onChange={(e) => onValue(e.target.value)}
      placeholder={titleInput}
      type={type}
      readOnly={readonly}
      value={value}
      id={id}
      name={name}
      required={required}
      style={{ ...style, maxWidth: width, width: '100%' }}
      className={className}
    />
  );
};

export default Input;
