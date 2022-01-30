interface PreviewEntryProps {
  text: string;
  image: File | null;
  imgWidth?: string;
}

export default function PreviewEntry({
  text,
  image,
  imgWidth,
}: PreviewEntryProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-lg">{text}</h1>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          style={{
            width: imgWidth || "100%",
            objectFit: "contain",
          }}
        />
      )}
    </div>
  );
}
