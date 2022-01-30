import { useRef } from "react";

interface CustomFileInputProps {
  file: File | null;
  updateFile: (value: File) => void;
}

export default function CustomFileInput({
  file,
  updateFile,
}: CustomFileInputProps) {
  const fileInput = useRef(null);

  const handleClick = () => {
    if (!fileInput.current) return;
    (fileInput.current as any).click();
  };

  return (
    <div className="flex flex-row gap-x-2 items-center">
      <button
        type="button"
        className="rounded-lg bg-green-400 text-white p-2"
        onClick={handleClick}
      >
        Upload File
      </button>
      <input
        type="file"
        ref={fileInput}
        onChange={(e) => {
          if (e.target.files) updateFile(e.target.files[0]);
        }}
        style={{ display: "none" }}
      />
      {file && <h1>{file.name}</h1>}
    </div>
  );
}
