import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { KEY_INIT_SESSION_SESSION_STORAGE } from '../../constants/session-storage/session-storage';
import { getItemSessionStorage } from '../../utils/session-storage/session-storage';

const getItem = getItemSessionStorage(KEY_INIT_SESSION_SESSION_STORAGE);
console.log(getItem);
const initialState = {
  session: {
    okay: getItem ? getItem.okay : false,
    message: getItem ? getItem.message : '',
  },
};

const createLoginSlice = (set) => ({
  ...initialState,
  setGlobalLogin: (session) => set(() => ({ session })),
});

const useLoginStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(createLoginSlice))
    : create(createLoginSlice);

export default useLoginStore;
