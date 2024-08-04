import { Button } from 'primereact/button';

const PrimaryButton = ({
  type = 'button',
  name,
  key,
  onClick,
  label,
  icon,
  loading,
  disabled = false,
  className,
  labelBtn,
}: PrimaryButtonProps) => {
  return (
    <Button
      key={key}
      name={name}
      type={type}
      onClick={onClick}
      label={label}
      loading={loading}
      className={`border border-[#F38218] ${
        !labelBtn && 'rounded-md hover:scale-105 active:scale-95 transition text-white shadow-xl'
      } bg-[#F38218]  px-4 py-2 active:bg-[#F38218] ${className}`}
      icon={icon}
      disabled={disabled}
    />
  );
};

export default PrimaryButton;
