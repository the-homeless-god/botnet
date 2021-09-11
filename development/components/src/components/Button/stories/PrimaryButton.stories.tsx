import React from 'react';
import { propsFixture } from '../fixture';
import { PrimaryButton } from '../PrimaryButton';

export default {
  title: 'Buttons/Primary',
  component: PrimaryButton,
};

export const PrimaryButtonStory = () => <PrimaryButton {...propsFixture} text="Primary" />;

PrimaryButtonStory.story = {
  name: 'Primary button',
};
