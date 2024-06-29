export const useLinkProject = (project) => {
  const category = project.category.toLowerCase();

  let link = 'https://www.google.com';

  if (category) {
    link = project.gitHub;
  }

  if (!/^https?:\/\//i.test(link)) {
    link = `http://${link}`;
  }

  return link;
};
