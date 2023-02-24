export const handleErrorCodes = ({ code }) => {
  const test = 'Error. Try again.';
  const handleErrorObject = {
    'auth/user-not-found': () => 'User not found.',
    'auth/invalid-email': () => 'Invalid email. Try again.',
    'auth/wrong-password': () => 'Wrong password. Try again.',
    'auth/too-many-requests': () =>
      'Too many request. Access to this account has been temporarily disabled due to many failed login attempts.',
  };

  if (typeof handleErrorObject[code] !== 'function') return;
  return handleErrorObject[code]() || test;
};
