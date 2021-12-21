import React from 'react';
import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,
};

export const ContainerStory = () => (
  <Container>
    <h1>Hello world</h1>
  </Container>
);

ContainerStory.story = {
  name: 'Container',
};
