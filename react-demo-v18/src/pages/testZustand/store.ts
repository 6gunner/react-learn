import { create } from 'zustand'

interface BaseState {
  bears: number;
}

interface Action {
  increasePopulation: () => void
  removeAllBears: () => void;
  updateBears: (newBears: number) => void
}

export const useStore = create<BaseState & Action>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))