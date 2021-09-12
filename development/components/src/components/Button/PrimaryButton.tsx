import React from 'react';
import { ButtonProps, Button } from './Button';
import css from './Button.module.scss';

export const PrimaryButton: React.FC<ButtonProps> = (props) => <Button {...props} className={css.primary} />;
