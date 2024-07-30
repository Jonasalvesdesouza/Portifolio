export const useSaveArticlePageRender = (object, setArticleData) => {
  const article = { ...object, id: crypto.randomUUID() };
  return setArticleData(article);
};
