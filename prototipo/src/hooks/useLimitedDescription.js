export const useLimitedDescription = (description, maxLength) => {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...'
      }
      return description

}