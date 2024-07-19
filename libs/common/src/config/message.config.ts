/**
 * Description - Constant Error Messages
 */
export const errorMessages = {
  UNEXPECTED_ERROR: 'Unexpected Error',
  UNIQUE_DATA: 'should be unique',
  IS_EXPIRED: 'is expired',
  DATA_NOT_FOUND: 'not found or already deleted',
  SENT_EMAIL_FAILED: 'Something went wrong while sent email',
  EMAIL_VERIFICATION_EXPIRED: 'Email verification link is expired or invalid',
  EMAIL_VERIFICATION_UNSUCCESSFUL: 'Email Verification Failed.',
  INCORRECT_PASSWORD: 'Invalid Email or Password.',
  RESET_PASSWORD_EXPIRED: 'Reset Password link is expired or invalid',
  TOKEN_EXPIRED: 'Session Expired, Please login again',
  INTERNAL_SERVER: 'Internal Server Error.',
  USER_UNAUTHORIZED: 'Unauthorized user.',
};

/**
 * Description - Constant Success Messages
 */
export const successMessages = {
  DATA_CREATED: 'created successfully',
  DATA_FETCHED: 'details fetched successfully',
  DATA_DELETED: 'deleted successfully',
  DATA_UPDATED: 'details updated successfully',
  USER_SIGNUP:
    'The account has been created successfully, and a verification email has been sent.',
  EMAIL_VERIFIED: 'Email verified successfully, please sign in to continue.',
  USER_LOGGED_IN: 'You have been signed in successfully',
  FORGOT_PASSWORD: 'A reset link has been sent to your email address.',
  PASSWORD_RESET: 'Password changed successfully.',
};

/**
 * Description - Constant Validation Messages
 */
export const validationMessages = {
  FIRST_NAME_IS_ALPHA:
    'Invalid input. Special characters or numbers are not allowed in the first name',
  LAST_NAME_IS_ALPHA:
    'Invalid input. Special characters or numbers are not allowed in the last name',
  INVALID_PASSWORD:
    'Password must be 8-16 characters, containing 1 lowercase, 1 uppercase letter, 1 number, and 1 special character',
  INVALID_EMAIL_FORMAT: 'Please enter a valid email address',
  NON_EMPTY: 'should not be empty',
  INVALID_STRING: 'should be in string.',
  INVALID_ALPHA_NUMERIC_STRING: 'should be alpha numeric string.',
  INVALID_NUMBER: 'should be in number.',
  INVALID_ARRAY: 'should be array.',
  INVALID_BOOLEAN: 'should be boolean.',
  INVALID_DATA: 'Invalid',
  INVALID_DATE: 'should be date string',
  ALREADY_EXIST: 'already exist.',
};

/**
 * Description - Common function for required field validation message
 * @param fieldName string
 * @returns Validation message
 */
export const fieldRequired = (fieldName: string): string => {
  return `Invalid input. The field is required.${fieldName}`;
};

/**
 * Description - Common function for invalid field validation message
 * @param fieldName string
 * @returns Validation message
 */
export const fieldInvalid = (fieldName: string): string => {
  return `${fieldName} is invalid`;
};

/**
 * Description - Common function for minimum length field validation
 * @param fieldName string
 * @param length number
 * @returns Validation message
 */
export const minimumLength = (fieldName: string, length: number): string => {
  return `${fieldName} should have at least ${length} characters`;
};

/**
 * Description - Common function for maximum length field validation
 * @param fieldName string
 * @param length number
 * @returns Validation message
 */
export const maximumLength = (fieldName: string, length: number): string => {
  return `${fieldName} should have maximum ${length} characters`;
};
