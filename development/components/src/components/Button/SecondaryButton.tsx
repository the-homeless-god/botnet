import React from 'react';
import { ButtonProps, Button } from './Button';
import css from './Button.module.scss';

export const SecondaryButton: React.FC<ButtonProps> = (props) => <Button {...props} className={css.secondary} />;
