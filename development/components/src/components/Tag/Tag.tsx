import React, { CSSProperties } from 'react';
import cx from 'classnames';

import css from './Tag.module.scss';

export interface TagProps {
  text?: string;
  isRound?: boolean;
  customCss?: CSSProperties;
}

export const Tag: React.FC<TagProps> = ({ text, isRound, customCss }) => {
  return (
    <div className={cx(css.tag, isRound && css.round)} style={customCss}>
      {text}
    </div>
  );
};
