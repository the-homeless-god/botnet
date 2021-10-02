import React, { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode | string;
}

export const Container: React.FC<ContainerProps> = ({ children }) => <>{children}</>;
