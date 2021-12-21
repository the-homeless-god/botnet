import React from 'react';
import { CardProps } from './Card';

export const propsFixture: CardProps = {
  className: 'className',
  buttonText: 'button text',
  onButtonClick: () => {},
  withButton: true,
  header: 'header',
  withHeader: true,
  withChildren: true,
  withImage: true,
  imageSrc: 'background.png',
  imageAlt: 'alt',
  children: (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      <span style={{ width: '100%' }}>Ехал Грека через реку. </span>
      <span style={{ width: '100%' }}> Видит Грека в реке рак. </span>
      <span style={{ width: '100%' }}>Сунул в реку руку Грека.</span>
      <span style={{ width: '100%' }}> Рак за руку Греку - цап. </span>
    </div>
  ),
};

export const propsFixtureRequiredFields: CardProps = {};

export const propsFixtureWithImageOnly: CardProps = {
  withImage: true,
  imageSrc: 'image src',
  imageAlt: 'alt',
};

export const propsFixtureWithButtonOnly: CardProps = {
  buttonText: 'button text',
  onButtonClick: () => {},
  withButton: true,
};

export const propsFixtureWithHeaderOnly: CardProps = {
  header: 'header',
  withHeader: true,
};

export const propsFixtureWithChildrenOnly: CardProps = {
  children: 'children',
  withChildren: true,
};
