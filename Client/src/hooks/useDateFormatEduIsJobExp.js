import { useMemo } from 'react';

export const useDateFormatEduIsJobExp = (date) => {
  return useMemo(() => {
    if (!date) return '';

    const dateParts = date.split('-');

    if (dateParts.length !== 3) return 'Invalid date format';

    const [year, day, month] = dateParts;

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const monthIndex = Number(month) - 1;

    if (monthIndex < 0 || monthIndex > 11) {
      return 'Invalid month';
    }

    return `${monthNames[monthIndex]}.${year}`;
  }, [date]);
};