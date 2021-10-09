import React from 'react';
import { propsFixture } from '../fixture';
import { Tag } from '../Tag';

export default {
  title: 'Tags/Tags',
  component: Tag,
};

export const ButtonStory = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <Tag customCss={{ margin: 10 }} {...propsFixture} />
    <Tag customCss={{ margin: 10 }} {...propsFixture} isRound />;
  </div>
);

ButtonStory.story = {
  name: 'Basic tags',
};
