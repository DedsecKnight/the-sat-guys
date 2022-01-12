export const convertFileToBase64 = (
  file: File | null
): Promise<string | ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    if (!file) resolve("");
    const reader = new FileReader();
    reader.readAsDataURL(file!!);
    reader.onload = () => resolve(reader.result || "");
    reader.onerror = (err) => reject(err);
  });
};
