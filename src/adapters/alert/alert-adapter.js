export const handleErrorCodes = (error) => {
  let message = '';
  switch (error.code) {
    case 'auth/user-not-found':
      message = 'User not found.';
      return message;
    case 'auth/invalid-email':
      message = 'Invalid email. Try again.';
      return message;
    case 'auth/wrong-password':
      message = 'Wrong password. Try again.';
      return message;
    case 'auth/too-many-requests':
      message =
        'Too many request. Access to this account has been temporarily disabled due to many failed login attempts.';
      return message;
    default: {
      message = 'Error. Try again.';
      return message;
    }
  }
};
