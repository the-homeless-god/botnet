import React from 'react';
import { propsFixture } from '../fixture';
import { ErrorNotification } from '../ErrorNotification';

export default {
  title: 'Notification/Error',
  component: ErrorNotification,
};

export const PrimaryButtonStory = () => <ErrorNotification {...propsFixture} text="error" />;

PrimaryButtonStory.story = {
  name: 'Error notification',
};
