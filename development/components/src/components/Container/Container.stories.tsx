import React from 'react';
import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,
};

export const ToStorybook = () => (
  <Container>
    <h1>Hello world</h1>
  </Container>
);

ToStorybook.story = {
  name: 'Container',
};
