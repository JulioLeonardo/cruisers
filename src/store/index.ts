import create from "zustand";
import { ShipsStore } from "../types";

const useShipsStore = create<ShipsStore>((set) => ({
  ships: [],
  setShips: (ships) => {
    set((state) => ({
      ...state,
      ships: [...ships],
    }));
  },
  findShipFilter: "",
  setFindShipFilter: (filter) => {
    set((state) => ({
      ...state,
      findShipFilter: filter,
    }));
  },
  appView: "list",
  setAppView: (view) => {
    set((state) => ({
      ...state,
      appView: view,
    }));
  },
  isImageModalOpen: false,
  selectedShip: "",
  toggleImageModal: (id) => {
    set((state) => ({
      ...state,
      isImageModalOpen: !state.isImageModalOpen,
      selectedShip: id,
    }));
  },
}));

export { useShipsStore };
