import React from 'react';
import { propsFixture } from '../fixture';
import { Tag } from '../Tag';

export default {
  title: 'Tags/Tag',
  component: Tag,
};

export const TagStory = () => <Tag {...propsFixture} />;

TagStory.story = {
  name: 'Simple tag',
};
