import create from 'zustand';

type State = {
  isSubmitting: boolean;
  toggleSubmitting: () => void;
  setSubmitting: (value: boolean) => void;
};

const useStore = create<State>() ((set) => ({
  isSubmitting: false,
  toggleSubmitting: () => set((state) => ({ isSubmitting: !state.isSubmitting })),
  setSubmitting: (value: boolean) => set({ isSubmitting: value }),
}));

export default useStore;