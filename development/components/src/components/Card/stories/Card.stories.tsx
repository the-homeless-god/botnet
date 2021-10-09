import React from 'react';
import { propsFixture } from '../fixture';
import { Card } from '../Card';

export default {
  title: 'Cards/Card',
  component: Card,
};

export const CardStory = () => <Card {...propsFixture} />;

CardStory.story = {
  name: 'Card',
};
