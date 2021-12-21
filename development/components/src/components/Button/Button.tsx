import React, { CSSProperties } from 'react';
import cx from 'classnames';

import css from './Button.module.scss';

export interface ButtonProps {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  styles?: CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className, styles }) => (
  <button className={cx(css.button, css.text, className)} onClick={onClick} style={styles}>
    {text}
  </button>
);
