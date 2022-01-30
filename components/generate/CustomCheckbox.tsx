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
  checked: boolean;
  onChangeHandler: (value: boolean) => void;
}

interface CustomCheckboxProps {
  name: string;
  options: CheckboxItemData[];
  checkedState: boolean[];
  updateCheckedState: (value: boolean[]) => void;
}

function CheckboxItem({
  id,
  name,
  value,
  option,
  checked,
  onChangeHandler,
}: CheckboxItemProps) {
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
        checked={checked}
        onChange={(e) => {
          onChangeHandler(e.target.checked);
        }}
      />
      <label htmlFor={id} className="text-lg text-gray-900 ml-2 block">
        {option}
      </label>
    </div>
  );
}

export default function CustomCheckbox({
  name,
  options,
  checkedState,
  updateCheckedState,
}: CustomCheckboxProps) {
  const onUpdateStateHandler = (idx: number, value: boolean) => {
    const newState = [...checkedState];
    newState[idx] = value;
    updateCheckedState(newState);
  };

  return (
    <fieldset className="p-3">
      {options.map(({ id, value, option }, idx) => (
        <CheckboxItem
          key={id}
          id={id}
          name={name}
          value={value}
          option={option}
          checked={checkedState[idx]}
          onChangeHandler={(value) => {
            onUpdateStateHandler(idx, value);
          }}
        />
      ))}
    </fieldset>
  );
}
