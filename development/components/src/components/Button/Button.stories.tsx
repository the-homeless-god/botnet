import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonStory = () => <Button text="primary" onClick={() => {}} />;

ButtonStory.story = {
  name: 'Button',
};
