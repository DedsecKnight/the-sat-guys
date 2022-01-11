export interface RadioItemData {
  id: string;
  value: string;
  option: string;
}

interface RadioItemProps {
  id: string;
  name: string;
  value: string;
  option: string;
  currentValue: string;
}

interface CustomRadioProps {
  name: string;
  currentValue: string;
  options: RadioItemData[];
  onChangeHandler: (value: string) => void;
}

function RadioItem({ id, name, value, option, currentValue }: RadioItemProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-green-300"
        aria-labelledby={id}
        aria-describedby={id}
        checked={value === currentValue}
      />
      <label htmlFor={id} className="text-lg text-gray-900 ml-2 block">
        {option}
      </label>
    </div>
  );
}

export default function CustomRadio({
  name,
  options,
  onChangeHandler,
  currentValue,
}: CustomRadioProps) {
  return (
    <fieldset
      className="p-3"
      onChange={(e) => {
        onChangeHandler((e.target as any).value);
      }}
    >
      {options.map(({ id, value, option }) => (
        <RadioItem
          key={id}
          id={id}
          name={name}
          value={value}
          option={option}
          currentValue={currentValue}
        />
      ))}
    </fieldset>
  );
}
