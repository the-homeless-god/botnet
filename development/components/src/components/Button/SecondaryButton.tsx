import React from 'react';
import cx from 'classnames';

import { ButtonProps, Button } from './Button';
import css from './Button.module.scss';

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} className={cx(css.secondary, props.className)} />
);
