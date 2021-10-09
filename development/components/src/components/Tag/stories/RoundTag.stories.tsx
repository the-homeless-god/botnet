import React from 'react';
import { propsFixture } from '../fixture';
import { Tag } from '../Tag';

export default {
  title: 'Tags/Round',
  component: Tag,
};

export const RoundTagStory = () => <Tag {...propsFixture} isRound />;

RoundTagStory.story = {
  name: 'Round tag',
};
