export const translate = (responseError: any): any => {
  const { status, statusText, error } = responseError;
  const { code, message } = error;
  if (code && message) {
    return error;
  }
  return {
    code: status,
    message: statusText,
  };
};
