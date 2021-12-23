interface InputWithImageProps {
  placeholder: string;
}

export default function InputWithImage({ placeholder }: InputWithImageProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        className="p-3 rounded-lg border-2"
        type="text"
        placeholder={placeholder}
      />
      <input type="file" />
    </div>
  );
}
