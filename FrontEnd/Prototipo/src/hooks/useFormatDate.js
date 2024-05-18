export const useFormtDate = (dateString) => {
  if (!dateString) return ''; // Retorna uma string vazia se a data for nula ou indefinida

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ''; // Retorna uma string vazia se a data for inválida

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
