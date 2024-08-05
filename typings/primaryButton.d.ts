import { MouseEvent } from 'react';

type PrimaryButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon?: React.ReactNode; // Adjusted to React.ReactNode for better compatibility
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  labelBtn?: boolean;
};
