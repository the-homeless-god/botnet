import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import {
  propsFixtureFullTextChildren,
  propsFixtureFullComponentChildren,
  propsFixtureRequiredOnly,
  propsFixtureClassNameOnly,
  propsFixtureSizeOnly,
  propsFixtureChildrenTextOnly,
  propsFixtureChildrenComponentOnly,
} from './fixture';

test('renders Header component with full text children', () => {
  const component = render(<Header {...propsFixtureFullTextChildren} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with full component children', () => {
  const component = render(<Header {...propsFixtureFullComponentChildren} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with required fields children', () => {
  const component = render(<Header {...propsFixtureRequiredOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with class name only', () => {
  const component = render(<Header {...propsFixtureClassNameOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with size only', () => {
  const component = render(<Header {...propsFixtureSizeOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with text children only', () => {
  const component = render(<Header {...propsFixtureChildrenTextOnly} />);
  expect(component).toMatchSnapshot();
});

test('renders Header component with component children only', () => {
  const component = render(<Header {...propsFixtureChildrenComponentOnly} />);
  expect(component).toMatchSnapshot();
});
