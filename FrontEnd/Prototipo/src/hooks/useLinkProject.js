export const useLinkProject = (project) => {
  const category = project.category.toLowerCase();

  if (category === 'front end') {
    const link = project.webSite;
    return link;
  } else {
    const link = project.gitHub;
    return link;
  }
};
