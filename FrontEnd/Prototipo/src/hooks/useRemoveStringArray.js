export const useRemoveStringFromArray = (initialArray, stringToRemove) => {
  const updatedArray = initialArray.filter((item) => {
    if (stringToRemove === '/articlepage') {
      return item.router !== '/blog';
    }
    return item.router !== stringToRemove;
  });

  return updatedArray;
};
