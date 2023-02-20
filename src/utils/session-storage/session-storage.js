import { encryptElement, decryptElement } from './../crypto/crypto';

export const setItemSessionStorage = (key, value) =>
  sessionStorage.setItem(key, encryptElement(JSON.stringify({ ...value })));

export const getItemSessionStorage = (key) => {
  const getItem = sessionStorage.getItem(key);
  const newKey = decryptElement(`${getItem}`);
  if (!newKey) {
    return;
  }
  return JSON.parse(newKey);
};

export const clearSessionStorage = () => sessionStorage.clear();