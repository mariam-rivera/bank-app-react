import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
    session: {
        okay: false,
        message: ''
    }
};

const createLoginSlice = (set) => ({
    ...initialState,
    setGlobalLogin: (session) => set(() => ({ session })) 
});

const useLoginStore = process.env.NODE_ENV === 'development' ? create(devtools(createLoginSlice)) : create(createLoginSlice); 

export default useLoginStore;