export const shouldUseWhiteColor = (colorBar, headerClass) => {
  if (!colorBar) {
    console.log('error');
    return false;
  }

  return headerClass === 'headerSection1' || headerClass === 'headerSection3';
};
