type ShipTypes = "High Speed Craft" | "Cargo" | "Tug" | "Barge" | "";
type AppView = "list" | "gallery";

interface Ship {
  __typename: string;
  id: string;
  active: boolean;
  home_port: string;
  name: string;
  type: ShipTypes;
  image: string;
  url: string;
  year_built: number;
}

interface ShipsApiResponse {
  ships: Ship[];
}

interface ShipsStore {
  ships: Ship[];
  setShips: (ships: Ship[]) => void;
  findShipFilter: ShipTypes;
  setFindShipFilter: (filter: ShipTypes) => void;
  appView: AppView;
  setAppView: (view: AppView) => void;
  isImageModalOpen: boolean;
  selectedShip: string;
  toggleImageModal: (id: string) => void;
}

type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

export type {
  AppView,
  MustInclude,
  NonEmptyArray,
  Ship,
  ShipsApiResponse,
  ShipsStore,
  ShipTypes,
};
