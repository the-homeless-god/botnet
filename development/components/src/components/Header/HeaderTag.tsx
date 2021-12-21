import React from 'react';

import { HeaderSizes } from './Header.types';

export interface HeaderTagProps {
  size?: HeaderSizes;
  children: React.ReactNode | string;
}

export const HeaderTag: React.FC<HeaderTagProps> = ({ size, children }) => {
  switch (size) {
    case HeaderSizes.largest:
      return <h1>{children}</h1>;

    case HeaderSizes.large:
      return <h2>{children}</h2>;

    case HeaderSizes.medium:
      return <h3>{children}</h3>;

    case HeaderSizes.small:
      return <h4>{children}</h4>;

    case HeaderSizes.tiny:
      return <h5>{children}</h5>;

    case HeaderSizes.largeParagraph:
      return <p>{children}</p>;

    case HeaderSizes.mediumParagraph:
      return <p>{children}</p>;

    case HeaderSizes.smallParagraph:
      return <p>{children}</p>;

    case HeaderSizes.label:
      return <label>{children}</label>;

    default:
      return null;
  }
};
