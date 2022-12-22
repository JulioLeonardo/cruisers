type ShipTypes = "High Speed Craft" | "Cargo" | "Tug" | "Barge" | "";

interface Ship {
  id: string;
  active: boolean;
  home_port: string;
  name: string;
  type: ShipTypes;
  image: string;
  url: string;
  year_built: number;
}

interface ShipsStore {
  ships: Ship[];
  findShipFilter: ShipTypes;
}

export type { Ship, ShipTypes, ShipsStore };
