'use client';
import { DropDownProps } from '@/typings/dropdown';
import {
  Dropdown
} from 'primereact/dropdown';
import React from 'react';

let labelStyle =
  'flex flex-grow justify-start gap-4 flex-col text text-[#FBE5B6] ';
let dropDownStyle = 'p-2 h-9 items-center bg bg-white text-left rounded-lg text text-black';

const DropDown: React.FC<DropDownProps> = ({
  tag,
  label,
  id,
  value,
  options,
  onChange,
  error,
  disabled = false,
  asterisk = false,
  searchable,
  placeholder,
  editable = false,
  serverSideSearch,
  onFilter,
}) => {
  //handle dropdown and label styles
  if (disabled) {
    labelStyle =
      'flex flex-grow justify-between gap-4 flex-col text text-[#FBE5B6] ';
    dropDownStyle = 'p-1 h-9 items-center w-auto  text-left rounded-lg text text-black';
  }

  switch (tag) {
    case 'dropDownGray':
      labelStyle =
        'flex flex-grow justify-between gap-4 flex-col text text-[#FBE5B6] ';
      dropDownStyle = 'p-1 h-9 items-center w-auto  text-left rounded-lg text text-black';
      break;
    case 'dropDownLeft':
      labelStyle =
        'flex flex-grow gap-4 flex-row justify-start text text-[#FBE5B6]';
      dropDownStyle =
        'p-1 h-9  items-center w-64 bg-white- text-left rounded-lg text text-black';
      break;
    case 'dropDownFull':
      labelStyle =
        'flex flex-grow gap-4 flex-row justify-start text text-[#FBE5B6] ';
      dropDownStyle =
        'p-1 h-9  items-center w-96 flex flex-1 bg-white text-left rounded-lg text text-black';
      break;
  }
  //

  return (
    <div className={labelStyle}>
      {label ? (
        <div className=" justify-start flex flex-row w-40 ">
          <label htmlFor={id} className="text-left ">
            <b>{label}</b>
            {asterisk ? <span className="text-red-600">*</span> : null}
          </label>
        </div>
      ) : null}

      <div className="flex flex-col">
        <Dropdown
          filter={searchable || false}
          onFilter={onFilter || undefined}
          disabled={disabled}
          className={dropDownStyle}
          name={id}
          id={id}
          value={value}
          options={options}
          onChange={onChange}
          placeholder={placeholder}
          
          editable={editable}
        />

        <div>
          {error ? (
            <p className="text text-right text-red-600">{error}</p>
          ) : (
            <p className="text text-right">&nbsp;</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
