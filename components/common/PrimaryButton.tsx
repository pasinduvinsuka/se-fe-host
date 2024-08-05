import { Button } from 'primereact/button';

// Define props type for the PrimaryButton component
type PrimaryButtonProps = {
  type?: 'button' | 'submit' | 'reset'; // Type of the button element
  name?: string; // Name attribute of the button
  key?: string | number; // Key for the button, useful if used in a list
  onClick?: () => void; // Click event handler
  label?: string; // Text label for the button
  icon?: React.ReactNode; // Icon to be displayed on the button
  loading?: boolean; // Show loading state (spinner)
  disabled?: boolean; // Disable the button
  className?: string; // Additional CSS classes
  labelBtn?: boolean; // Conditional flag to apply different styles
};

// PrimaryButton component for styled buttons
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
      loading={loading} // Displays a spinner when loading is true
      className={`border border-[#F38218] ${
        !labelBtn && 'rounded-md hover:scale-105 active:scale-95 transition text-white shadow-xl'
      } bg-[#F38218] px-4 py-2 active:bg-[#F38218] ${className}`} // Conditional styling based on labelBtn
      icon={icon} // Display an icon if provided
      disabled={disabled} // Disable the button if disabled is true
    />
  );
};

export default PrimaryButton;
