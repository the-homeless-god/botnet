import React, { ReactNode } from 'react';
import { HeaderSizes } from './Header.types';
import { HeaderTag } from './HeaderTag';

export interface HeaderProps {
  size?: HeaderSizes;
  children?: ReactNode | string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ size, children, className }) => {
  return (
    <div className={className}>
      <HeaderTag size={size}>{children}</HeaderTag>
    </div>
  );
};
