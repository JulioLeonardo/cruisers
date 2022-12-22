import React from "react";
import { useQuery } from "@apollo/client";
import { useShipsStore } from "../store";
import {getShips} from "../queries/getShips";

const Home = (): JSX.Element => {
  const shipsFilterValue = useShipsStore((state) => state.findShipFilter);
  const shipsFilter: string = (shipsFilterValue !== "") ? `, find: { type: "${shipsFilterValue}"}` : '';

  const { loading, data } = useQuery(getShips(shipsFilter));

  return loading ? <>loading...</> : <>{JSON.stringify(data)}</>;
};

export { Home };
