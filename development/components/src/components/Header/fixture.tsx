import React from 'react';
import { HeaderProps } from './Header';
import { HeaderSizes } from './Header.types';

export const ChildrenFixtureComponent = <div>Hello world</div>;

export const propsFixtureFullTextChildren: HeaderProps = {
  size: HeaderSizes.label,
  children: 'children',
  className: 'header',
};

export const propsFixtureFullComponentChildren: HeaderProps = {
  size: HeaderSizes.label,
  children: ChildrenFixtureComponent,
  className: 'header',
};

export const propsFixtureRequiredOnly: HeaderProps = {};

export const propsFixtureChildrenTextOnly: HeaderProps = {
  children: 'children',
};

export const propsFixtureChildrenComponentOnly: HeaderProps = {
  children: ChildrenFixtureComponent,
};

export const propsFixtureSizeOnly: HeaderProps = {
  size: HeaderSizes.medium,
};

export const propsFixtureClassNameOnly: HeaderProps = {
  className: 'header',
};
