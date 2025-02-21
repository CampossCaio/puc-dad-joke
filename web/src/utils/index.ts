export const getInitialsFrom = (name: string): string => {
  const words = name.trim().split(" ");
  if (words.length < 2) return ""; // Ensure at least two words exist
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
};
