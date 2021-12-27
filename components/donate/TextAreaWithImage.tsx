interface TextAreaWithImageProps {
  placeholder: string;
}

export default function TextAreaWithImage({
  placeholder,
}: TextAreaWithImageProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <textarea
        className="p-3 rounded-lg border-2 w-full"
        rows={5}
        placeholder={placeholder}
      ></textarea>
      <input type="file" />
    </div>
  );
}
