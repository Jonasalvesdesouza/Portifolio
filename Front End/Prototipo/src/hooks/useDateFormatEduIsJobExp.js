export const useDateFormatEduIsJobExp = (date) => {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const abbreviatedMonth = monthNames[Number(month) - 1];
    return `${abbreviatedMonth}.${year}`;
  }

  return formatDate(date)
}
