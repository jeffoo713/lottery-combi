import React from 'react';

import './custom-button.styles.scss';

interface Props {
  children: HTMLElement | string;
  type: 'button' | 'submit' | 'reset';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<Props> = ({ children, ...props }) => (
  <button className='custom-button' {...props}>
    {children}
  </button>
);

export default CustomButton;
