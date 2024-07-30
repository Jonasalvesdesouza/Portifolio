export const useDateFormatEduIsJobExp = (date) => {
  const formatDate = (dateString) => {
    const dateParts = dateString.split('/');
    if (dateParts.length === 3) {
      const [day, month, year] = dateParts;

      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const abbreviatedMonth = monthNames[Number(month) - 1];

      return abbreviatedMonth ? `${abbreviatedMonth}.${year}` : 'Invalid month';
    } else {
      return 'Invalid date format';
    }
  };

  return formatDate(date);
};
