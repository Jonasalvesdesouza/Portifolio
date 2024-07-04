export const useShouldUseWhiteColor = (colorBar, headerClass) => {
  if (!colorBar) {
    return false;
  }
  if (colorBar && !headerClass) {
    return true;
  }

  return headerClass === 'headerSection1' || headerClass === 'headerSection3';
};
