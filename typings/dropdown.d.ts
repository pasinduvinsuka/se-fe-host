type DropDownProps =  {
  tag?: 'dropDownGray' | 'dropDownLeft' | 'dropDownFull';
  label?: string;
  id: string;
  value: string;
  options: any[];
  focusInputRef?: React.RefCallback<any>;
  onChange: (e: DropdownChangeEvent) => void; //check this is error came
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
}
