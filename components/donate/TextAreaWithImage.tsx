import CustomFileInput from "./CustomFileInput";

interface TextAreaWithImageProps {
  textValue: string;
  onChangeText: (value: string) => void;
  imageValue: File | null;
  onChangeImage: (value: File) => void;
  placeholder: string;
}

export default function TextAreaWithImage({
  placeholder,
  textValue,
  onChangeImage,
  onChangeText,
  imageValue,
}: TextAreaWithImageProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <textarea
        className="p-3 rounded-lg border-2 w-full"
        rows={5}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
        placeholder={placeholder}
        value={textValue}
      ></textarea>
      <CustomFileInput
        file={imageValue}
        updateFile={(value) => {
          onChangeImage(value);
        }}
      />
    </div>
  );
}
