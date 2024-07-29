import { create } from "zustand";
// import { devtools, persist } from 'zustand/middleware';

const initialState = {
  userName: "",
  score: 0,
};

const globalState = (set) => ({
  ...initialState,
  setUserName: (userName) => set({ userName }),
  setScore: (score) => set({ score }),
});

const useGlobalState = create(globalState);

export default useGlobalState;
