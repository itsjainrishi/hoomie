const getBase64ImageUrl = async(image: string) => {
  const response = await fetch(image);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64")
  return `data:image/jpeg;base64,${base64}`;
}

export default getBase64ImageUrl;