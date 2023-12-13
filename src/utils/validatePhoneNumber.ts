export const validatePhoneNumber = (value?: string): boolean => {
  if (!value) {
    return false;
  }

  const numberString = value.replace(/[^0-9]/gu, '');

  return numberString.length === 10;
};
