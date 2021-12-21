import React from 'react';
import cx from 'classnames';

import { ButtonProps, Button } from './Button';
import css from './Button.module.scss';

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} className={cx(css.primary, props.className)} />
);
