const parseJwt = (token) => {
  if (token) return JSON.parse(atob(token.split('.')[1]));
};

export const AuthVerify = (access, refresh) => {
  const decodedAccess = parseJwt(access);
  const decodedRefresh = parseJwt(refresh);

  if (decodedAccess.exp * 1000 < Date.now()) {
    return 'Access Token Expired';
  }

  if (decodedRefresh.exp * 1000 < Date.now()) {
    return 'Refresh Token Expired';
  }

  return true;
};
