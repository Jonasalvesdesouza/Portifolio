export const shouldUseWhiteColor = (colorBar, headerClass) => {
  if (!colorBar) {
    return false;
  }

  return headerClass === 'headerSection1' || headerClass === 'headerSection3';
};
