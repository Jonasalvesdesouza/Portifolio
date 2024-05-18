export const useCalculateReadingTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
};
