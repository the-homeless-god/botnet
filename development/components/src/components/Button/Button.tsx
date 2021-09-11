import React from 'react';

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
