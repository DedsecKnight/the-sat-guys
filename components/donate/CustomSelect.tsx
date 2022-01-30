import { ChangeEvent } from "react";

export interface CustomOptionItemProps {
  value: string;
  option: string;
}
export interface CustomSelectProps {
  name: string;
  value: string;
  defaultOption: string;
  options: Array<CustomOptionItemProps>;
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function CustomSelect({
  name,
  value,
  defaultOption,
  options,
  onChangeHandler,
}: CustomSelectProps) {
  return (
    <select
      name={name}
      value={value}
      className="border-2 w-full rounded-xl p-3"
      onChange={(e) => {
        onChangeHandler(e);
      }}
    >
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.option}
        </option>
      ))}
    </select>
  );
}
