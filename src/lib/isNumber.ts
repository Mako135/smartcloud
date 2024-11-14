export const isValidPhoneNumber = (phoneNumber: string) => {
  return /^\+?[0-9]{10,15}$/.test(phoneNumber);
};
