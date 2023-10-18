/**
 * Validates an email address using a regular expression.
 *
 * @param email - The email address to validate.
 * @returns True if the email is valid, false otherwise.
 */
const validateEmail = (email: string): boolean => {
  // Regular expression pattern for validating an email address
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Test if the provided email matches the pattern
  const isValid = emailPattern.test(email);

  return isValid;
};

export default validateEmail;
