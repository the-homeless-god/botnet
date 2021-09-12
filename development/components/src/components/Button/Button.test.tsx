import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';
import { propsFixture } from './fixture';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

test('renders Button component', () => {
  const component = render(<Button {...propsFixture} />);
  expect(component).toMatchSnapshot();
});

test('renders PrimaryButton component', () => {
  const component = render(<PrimaryButton {...propsFixture} />);
  expect(component).toMatchSnapshot();
});

test('renders SecondaryButton component', () => {
  const component = render(<SecondaryButton {...propsFixture} />);
  expect(component).toMatchSnapshot();
});
