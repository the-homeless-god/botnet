import React from 'react';
import { propsFixture } from '../fixture';
import { SuccessNotification } from '../SuccessNotification';

export default {
  title: 'Notification/Success',
  component: SuccessNotification,
};

export const PrimaryButtonStory = () => <SuccessNotification {...propsFixture} text="success" />;

PrimaryButtonStory.story = {
  name: 'Success notification',
};
