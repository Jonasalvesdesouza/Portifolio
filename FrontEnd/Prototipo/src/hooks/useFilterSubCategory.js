export const useFilterSubCategory = (array, criterion) => {
  const filter = array?.filter((object) => object.subCategory === criterion);

  return filter;
};
