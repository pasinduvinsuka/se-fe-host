import { DropdownChangeEvent, DropdownFilterEvent } from 'primereact/dropdown';
import { ReactNode } from 'react';

type DropDownProps = {
  tag?: 'dropDownGray' | 'dropDownLeft' | 'dropDownFull';
  label?: string;
  id: string;
  value: string;
  options: { label: string; value: string }[]; // Adjusted type for options to be an array of objects with label and value
  focusInputRef?: React.RefCallback<HTMLSelectElement>; // Adjusted to specific type
  onChange: (e: DropdownChangeEvent) => void;
  error?: ReactNode;
  basic?: boolean;
  disabled?: boolean;
  forFilters?: boolean;
  asterisk?: boolean;
  element?: string;
  optionIcon?: string;
  searchable?: boolean;
  placeholder?: string;
  editable?: boolean;
  serverSideSearch?: boolean;
  onFilter?: (e: DropdownFilterEvent) => void;
};
