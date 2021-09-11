import React, { CSSProperties } from 'react';
import cx from 'classnames';
import css from './Notification.module.scss';

export interface NotificationProps {
  text: string;
  className?: string;
  styles?: CSSProperties;
}

export const Notification: React.FC<NotificationProps> = ({ text, className, styles }) => (
  <div className={cx(css.container, css.text, className)} style={styles}>
    {text}
  </div>
);
