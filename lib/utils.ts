import { validateEmailProps } from './types';

export const validateEmail = (value: validateEmailProps, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else if (error && error instanceof Object && 'message' in error) {
    return String(error.message);
  } else {
    return 'Something went wrong';
  }
};
