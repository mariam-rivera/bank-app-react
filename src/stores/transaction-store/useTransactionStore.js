import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  transaction: {
    transactions: [],
  },
};

const createTransactionStore = (set) => ({
  ...initialState,
  setGlobalTransaction: (transactions) => set(() => ({ transactions })),
});

const useTransactionStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(createTransactionStore))
    : create(createTransactionStore);

export default useTransactionStore;
