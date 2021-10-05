import React from 'react';

import { NotificationProps, Notification } from './Notification';
import css from './Notification.module.scss';

export const SuccessNotification: React.FC<NotificationProps> = (props) => (
  <Notification {...props} className={css.success} />
);
