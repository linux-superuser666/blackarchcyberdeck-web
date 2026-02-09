import { create } from "zustand";

type UIState = {
  activeWidget: string | null;
  toggleWidget: (id: string) => void;

  // Tambahan untuk workspace
  activeWorkspace: string;
  setActiveWorkspace: (ws: string) => void;

  occupiedWorkspaces: string[];
  setOccupiedWorkspaces: (arr: string[]) => void;
};

export const useUIStore = create<UIState>((set) => ({
  activeWidget: null,
  toggleWidget: (id) =>
    set((s) => ({
      activeWidget: s.activeWidget === id ? null : id,
    })),

  activeWorkspace: "cyberware",
  setActiveWorkspace: (ws) => set({ activeWorkspace: ws }),

  occupiedWorkspaces: ["cyberware"],
  setOccupiedWorkspaces: (arr) => set({ occupiedWorkspaces: arr }),
}));
