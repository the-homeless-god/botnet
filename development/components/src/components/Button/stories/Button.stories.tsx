import React from 'react';
import { Button } from '../Button';
import { propsFixture } from '../fixture';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';

export default {
  title: 'Buttons/Basic',
  component: Button,
};

export const ButtonStory = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Button {...propsFixture} />
    <PrimaryButton {...propsFixture} text="Primary" />
    <SecondaryButton {...propsFixture} text="Secondary" />
  </div>
);

ButtonStory.story = {
  name: 'Basic button',
};
