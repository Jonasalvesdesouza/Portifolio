export const useLinkProject = (project) => {
  const category = project.category.toLowerCase();

  if (category) {
    const link = project.gitHub;
    return link;
  } else {
    return 'www.google.com';
  }
};
