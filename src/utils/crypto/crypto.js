import Crypto from 'crypto-js';

const encryptElement = (value = '') => {
  return Crypto.AES.encrypt(
    value,
    'OH3BxQuInYQGyfPGmXuJ9Idj9iP37KpGYpM5OpeIj+0='
  ).toString();
};

const decryptElement = (value = '') => {
  return Crypto.AES.decrypt(
    value,
    'OH3BxQuInYQGyfPGmXuJ9Idj9iP37KpGYpM5OpeIj+0='
  ).toString(Crypto.enc.Utf8);
};

export { encryptElement, decryptElement };
