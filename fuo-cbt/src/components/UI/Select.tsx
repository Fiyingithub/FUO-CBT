import React from 'react';
import Select, { type SingleValue } from 'react-select';

export type OptionType = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: OptionType[];
  value: OptionType | null;
  className?: string;
  onChange: (option: OptionType | null) => void;
  placeholder?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  className,
  placeholder = 'Select an option',
}) => {
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    onChange(selectedOption ?? null);
  };

  return (
    <Select<OptionType, false>
      options={options}
      className={className}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      isClearable
    />
  );
};

export default CustomSelect;
