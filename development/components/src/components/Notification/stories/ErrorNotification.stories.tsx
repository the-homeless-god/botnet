import React from 'react';
import { propsFixture } from '../fixture';
import { ErrorNotification } from '../ErrorNotification';

export default {
  title: 'Notification/Error',
  component: ErrorNotification,
};

export const ErrorNotificationStory = () => <ErrorNotification {...propsFixture} text="error" />;

ErrorNotificationStory.story = {
  name: 'Error notification',
};
