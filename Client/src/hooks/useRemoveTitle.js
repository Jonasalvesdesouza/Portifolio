export const useRemoveTitle = (htmlString, tagName = 'h1') => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const titleElement = doc.querySelector(tagName);

  let title = '';
  let remainingText = htmlString;

  if (titleElement) {
    title = titleElement.textContent || titleElement.innerText || '';
    titleElement.remove();

    const emptyParagraphs = doc.querySelectorAll(
      'p:empty, p:only-child:empty, p > br:only-child',
    );
    emptyParagraphs.forEach((el) => el.remove());

    remainingText = doc.body.innerHTML.trim();
  }

  return { title, remainingText };
};
