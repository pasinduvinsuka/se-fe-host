type PrimaryButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon?: any;
  loading?: boolean;
  disabled?: boolean;
  key?: string;
  className?: string | undefined;
  labelBtn?: boolean;
};
