export interface CheckboxItemData {
  id: string;
  value: string;
  option: string;
}

interface CheckboxItemProps {
  id: string;
  name: string;
  value: string;
  option: string;
}

interface CustomCheckboxProps {
  name: string;
  options: CheckboxItemData[];
}

function CheckboxItem({ id, name, value, option }: CheckboxItemProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-green-300"
        aria-labelledby={id}
        aria-describedby={id}
      />
      <label htmlFor={id} className="text-lg text-gray-900 ml-2 block">
        {option}
      </label>
    </div>
  );
}

export default function CustomCheckbox({ name, options }: CustomCheckboxProps) {
  return (
    <fieldset className="p-3">
      {options.map(({ id, value, option }) => (
        <CheckboxItem id={id} name={name} value={value} option={option} />
      ))}
    </fieldset>
  );
}
