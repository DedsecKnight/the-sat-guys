import { ChangeEvent } from "react";

interface InputWithImageProps {
  textValue: string;
  onChangeText: (value: string) => void;
  imageValue: File;
  onChangeImage: (value: File) => void;
  placeholder: string;
}

export default function InputWithImage({
  textValue,
  onChangeText,
  imageValue,
  onChangeImage,
  placeholder,
}: InputWithImageProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        className="p-3 rounded-lg border-2"
        type="text"
        value={textValue}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
        placeholder={placeholder}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) onChangeImage(e.target.files[0]);
        }}
      />
    </div>
  );
}
