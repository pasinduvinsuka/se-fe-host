import { InputText } from 'primereact/inputtext';
import { KeyFilterType } from 'primereact/keyfilter';
import React, { ChangeEvent, Ref } from 'react';

interface TextInputProps {
  tag?: 'textInputGray' | 'textInputLeft' | 'large';
  id: string;
  value: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
  label?: React.JSX.Element | string;
  error?: React.ReactNode;
  basic?: boolean;
  info?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  focusInputRef?: React.RefCallback<any>;
  forFilter?: boolean;
  asterisk?: boolean;
  keyfilter?: KeyFilterType;
  labelIcon?: React.JSX.Element | string;
  labelBtn?: React.JSX.Element | string;
}

const TextInput: React.FC<TextInputProps> = ({
  tag,
  id,
  value,
  onChange,
  onBlur,
  ref,
  label,
  error,
  basic = false,
  info = false,
  disabled,
  placeholder = '',
  focusInputRef,
  forFilter = false,
  asterisk = false,
  keyfilter,
  labelIcon,
  labelBtn
}: TextInputProps) => {
  // Default styles
  let labelStyle = 'flex flex-grow justify-start gap-4 flex-col text-[#FBE5B6] text-sm font-semibold';
  let inputTextStyle = 'px-3 h-9 items-center w-auto bg-white  text-black';

  // Conditional styles based on the 'tag' prop
  if (tag === 'textInputGray' || disabled) {
    inputTextStyle = 'px-3 h-9 items-center text-black';
  } else if (tag === 'textInputLeft') {
    labelStyle = 'flex flex-grow justify-start gap-4 flex-row text-sm font-semibold';
    inputTextStyle = 'px-3 h-9 items-center w-64 bg-white text-black';
  } else if (tag === 'large') {
    inputTextStyle = 'px-3 h-44 items-center w-auto bg-white text-black';
  }

  return (
    <div className={labelStyle}>
      {/* Conditionally render the label */}
      {tag === 'textInputLeft' ? (
        <div className="justify-start flex flex-row w-40">
          <label htmlFor={id}>
            <b>{label}</b>
            {asterisk && <span className="text-red-600">*</span>}
          </label>
        </div>
      ) : label ? (
        <div>
          <label htmlFor={id}>
            <b>{label}</b>
            {asterisk && <span className="text-red-600">*</span>}
          </label>
        </div>
      ) : null}

      <div className="flex flex-col">
        <div className={labelIcon ? 'p-inputgroup flex-1' : 'flex flex-row items-center'}>
          <InputText
            disabled={disabled}
            className={inputTextStyle}
            id={id}
            value={value}
            onChange={onChange}
            keyfilter={keyfilter}
            placeholder={placeholder}
            onBlur={onBlur}
            ref={ref}
          />
          {labelIcon && <span className="p-inputgroup-addon">{labelIcon}</span>}
          {labelBtn && <span>{labelBtn}</span>}
        </div>

        {/* Display error message if present */}
        <div>
          {error ? (
            <p className="text-right text-red-600">{error}</p>
          ) : (
            <p className="text-right">&nbsp;</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
