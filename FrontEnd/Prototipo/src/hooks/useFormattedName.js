import { useMemo } from 'react';

export const useFormattedName = (fullName) => {
  return useMemo(() => {
    if (!fullName) return '';

    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) return nameParts[0].toUpperCase();

    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    return `${firstName} ${lastName}`.toUpperCase();
  }, [fullName]);
};
