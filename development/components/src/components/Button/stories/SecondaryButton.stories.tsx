import React from 'react';
import { propsFixture } from '../fixture';
import { SecondaryButton } from '../SecondaryButton';

export default {
  title: 'Buttons/Secondary',
  component: SecondaryButton,
};

export const SecondaryButtonStory = () => (
  <SecondaryButton
    {...propsFixture}
    styles={{
      width: 326,
      height: 66,
    }}
  />
);

SecondaryButtonStory.story = {
  name: 'Secondary button',
};
