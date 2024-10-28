import { create } from "zustand";

interface IaasStore {
  type: "ssd" | "hdd";
  cpu: number;
  ram: number;
  storage: number;
  price: number;
  backup: number;
  ip: number;
  increaseCpu: () => void;
  decreaseCpu: () => void;
  increaseRam: () => void;
  decreaseRam: () => void;
  increaseStorage: () => void;
  decreaseStorage: () => void;
  increasePrice: () => void;
  decreasePrice: () => void;
  increaseBackup: () => void;
  decreaseBackup: () => void;
  increaseIp: () => void;
  decreaseIp: () => void;
  setType: (type: "ssd" | "hdd") => void;
  setCpu: (cpu: number) => void;
  setRam: (ram: number) => void;
  setStorage: (storage: number) => void;
  setBackup: (backup: number) => void;
  setIp: (ip: number) => void;
}

export const useIaasStore = create<IaasStore>((set, get) => ({
  type: "ssd",
  cpu: 2, // Minimum 2
  ram: 4, // Minimum 4
  storage: 60, // Minimum 60
  price: 3374, // Assuming initial type is "ssd"
  backup: 0, // Minimum 0
  ip: 1, // Minimum 1

  // CPU Actions
  increaseCpu: () =>
    set((state) => ({
      cpu: Math.min(state.cpu + 1, 128), // Maximum 128
    })),
  decreaseCpu: () =>
    set((state) => ({
      cpu: Math.max(state.cpu - 1, 2), // Minimum 2
    })),

  // RAM Actions
  increaseRam: () =>
    set((state) => ({
      ram: Math.min(state.ram + 1, 256), // Maximum 256
    })),
  decreaseRam: () =>
    set((state) => ({
      ram: Math.max(state.ram - 1, 4), // Minimum 4
    })),

  // Storage Actions
  increaseStorage: () =>
    set((state) => ({
      storage: Math.min(state.storage + 1, 8190), // Maximum 8190
    })),
  decreaseStorage: () =>
    set((state) => ({
      storage: Math.max(state.storage - 1, 60), // Minimum 60
    })),

  // Price Actions
  increasePrice: () => {
    const { type, price } = get();
    const increment = type === "ssd" ? 3374 : 643;
    set({ price: price + increment });
  },
  decreasePrice: () => {
    const { type, price } = get();
    const decrement = type === "ssd" ? 3374 : 643;
    set({ price: Math.max(price - decrement, 0) }); // Ensure price doesn't go negative
  },

  // Backup Actions
  increaseBackup: () =>
    set((state) => ({
      backup: Math.min(state.backup + 1, 8190), // Maximum 8190
    })),
  decreaseBackup: () =>
    set((state) => ({
      backup: Math.max(state.backup - 1, 0), // Minimum 0
    })),

  // IP Actions
  increaseIp: () =>
    set((state) => ({
      ip: Math.min(state.ip + 1, 32), // Maximum 32
    })),
  decreaseIp: () =>
    set((state) => ({
      ip: Math.max(state.ip - 1, 1), // Minimum 1
    })),

  // Setter Functions with Validation
  setType: (type) =>
    set((state) => {
      let newPrice = state.price;
      if (type === "ssd" && state.type !== "ssd") {
        newPrice += 3374 - 643; // Adjust price based on type change
      } else if (type === "hdd" && state.type !== "hdd") {
        newPrice += 643 - 3374; // Adjust price based on type change
      }
      return { type, price: Math.max(newPrice, 0) };
    }),
  setCpu: (cpu) => set({ cpu: Math.min(Math.max(cpu, 2), 128) }), // Clamp between 2 and 128
  setRam: (ram) => set({ ram: Math.min(Math.max(ram, 4), 256) }), // Clamp between 4 and 256
  setStorage: (storage) =>
    set({ storage: Math.min(Math.max(storage, 60), 8190) }), // Clamp between 60 and 8190
  setBackup: (backup) => set({ backup: Math.min(Math.max(backup, 0), 8190) }), // Clamp between 0 and 8190
  setIp: (ip) => set({ ip: Math.min(Math.max(ip, 1), 32) }), // Clamp between 1 and 32
}));
