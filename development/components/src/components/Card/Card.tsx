import React, { ReactNode } from 'react';

import cx from 'classnames';

import { PrimaryButton } from '../Button/PrimaryButton';
import { Header } from '../Header';
import { HeaderSizes } from '../Header/Header.types';

import css from './Card.module.scss';

export interface CardProps {
  className?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  header?: string;
  withImage?: boolean;
  withHeader?: boolean;
  withChildren?: boolean;
  withButton?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  buttonText,
  onButtonClick,
  className,
  header,
  imageSrc,
  imageAlt,
  children,
  withHeader,
  withChildren,
  withButton,
  withImage,
}) => {
  return (
    <div className={cx(css.card, className)}>
      {withImage && <img className={css.image} src={imageSrc} alt={imageAlt} />}
      {withHeader && (
        <Header className={css.header} size={HeaderSizes.medium}>
          {header}
        </Header>
      )}
      {withChildren && <div className={css.content}>{children}</div>}
      {withButton && (
        <div className={css.buttonContainer}>
          <PrimaryButton className={css.button} text={buttonText} onClick={onButtonClick} />
        </div>
      )}
    </div>
  );
};
