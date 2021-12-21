import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './Container';
import { propsFixtureWithoutChildren, propsFixtureWithTextChildren } from './fixture';

test('renders Container component without children', () => {
  const component = render(<Container {...propsFixtureWithoutChildren} />);
  expect(component).toMatchSnapshot();
});

test('renders Container component with text children', () => {
  const component = render(<Container {...propsFixtureWithTextChildren} />);
  expect(component).toMatchSnapshot();
});

test('renders Container component with text children', () => {
  const component = render(<Container {...propsFixtureWithTextChildren} />);
  expect(component).toMatchSnapshot();
});
