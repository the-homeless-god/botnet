import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from './Tag';
import { propsFixture } from './fixture';

test('renders Tag component', () => {
  const component = render(<Tag {...propsFixture} />);
  expect(component).toMatchSnapshot();
});
