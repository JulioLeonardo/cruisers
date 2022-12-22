import create from "zustand";
import {Ship, ShipsStore, ShipTypes} from "../types";

const useShipsStore = create<ShipsStore>((set) => ({
  ships: [],
  setShips: (ships: Ship[]) => {
    set(state => ({
      ...state,
      ships: [
          ...state.ships,
          ...ships
      ]

    }))
  },
  findShipFilter: "",
  setFindShipFilter: (filter: ShipTypes) => {
    set(state =>({
      ...state,
      findShipFilter: filter,
    }))
  }
}));

export { useShipsStore };
