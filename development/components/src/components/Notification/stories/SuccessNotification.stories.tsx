import React from 'react';
import { propsFixture } from '../fixture';
import { SuccessNotification } from '../SuccessNotification';

export default {
  title: 'Notification/Success',
  component: SuccessNotification,
};

export const SuccessNotificationStory = () => <SuccessNotification {...propsFixture} text="success" />;

SuccessNotificationStory.story = {
  name: 'Success notification',
};
