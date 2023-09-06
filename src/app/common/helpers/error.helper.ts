export const translate = (responseError: any): any => {
  if (!responseError){
    return responseError;
  }
  const { status, statusText, error } = responseError;
  if (!error){
    return null
  }
  const { code, message } = error;

  if (code && message) {
    return error;
  }
  return {
    code: status,
    message: statusText,
  };
};
