import { create } from "zustand";

type UIState = {
  activeWidget: string | null;
  toggleWidget: (id: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  activeWidget: null,
  toggleWidget: (id) =>
    set((s) => ({
      activeWidget: s.activeWidget === id ? null : id,
    })),
}));
