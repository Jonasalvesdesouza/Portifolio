export const useGetLinkObject = (array, name) => {
  const object =
    array.find((object) => {
      const objectName = object.name.toLowerCase();
      const filteringCriteria = name.toLowerCase();
      return objectName === filteringCriteria;
    }) || null;

  const linkObject = object ? object.link : 'Social Media Not Found';

  return linkObject;
};
