interface CustomSelectProps {
  name: string;
  defaultValue: string;
  defaultOption: string;
  options: Array<{ value: string; option: string }>;
}

export default function CustomSelect({
  name,
  defaultValue,
  defaultOption,
  options,
}: CustomSelectProps) {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="border-2 w-full rounded-xl p-3"
    >
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.option}</option>
      ))}
    </select>
  );
}
