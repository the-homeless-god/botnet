import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';
import {
  propsFixture,
  propsFixtureRequiredFields,
  propsFixtureWithImageOnly,
  propsFixtureWithButtonOnly,
  propsFixtureWithHeaderOnly,
  propsFixtureWithChildrenOnly,
} from './fixture';

test('renders Card component', () => {
  const component = render(<Card {...propsFixture} />);
  expect(component).toMatchSnapshot();
});

test('renders Card component with required fields children', () => {
  const component = render(<Card {...propsFixtureRequiredFields} />);
  expect(component).toMatchSnapshot();
});

test('renders Card component with image only', () => {
  const component = render(<Card {...propsFixtureWithImageOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Card component with button only', () => {
  const component = render(<Card {...propsFixtureWithButtonOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Card component with header only', () => {
  const component = render(<Card {...propsFixtureWithHeaderOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Card component with children only', () => {
  const component = render(<Card {...propsFixtureWithChildrenOnly} />);
  expect(component).toMatchSnapshot();
});
