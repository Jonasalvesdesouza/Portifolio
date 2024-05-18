export const useDateFormatEduIsJobExp = (date) => {
  const formatDate = (dateString) => {
    const isoParts = dateString.split('-');
    if (isoParts.length === 3) {
      const [year, month] = isoParts;

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

      return abbreviatedMonth ? `${abbreviatedMonth}.${year}` : 'Mês inválido';
    } else {
      return 'Formato de data inválido';
    }
  };

  return formatDate(date);
};
