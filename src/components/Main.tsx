import React, { useEffect } from "react";
import { useShipsStore } from "../store";
import { useQuery } from "@apollo/client";
import { getShips } from "../queries/getShips";
import { ImageModal, ListItem, LoaderPage } from "./";
import { ShipsApiResponse } from "../types";
import { Gallery } from "./Gallery";

const Main = (): JSX.Element => {
  const { ships, setShips, findShipFilter, appView } = useShipsStore();
  const shipsFilter: string =
    findShipFilter !== "" ? `, find: { type: "${findShipFilter}"}` : "";

  const { loading, data } = useQuery<ShipsApiResponse>(getShips(shipsFilter));

  useEffect(() => {
    if (data?.ships == null) return;

    setShips(data.ships);
  }, [loading]);

  return loading ? (
    <LoaderPage />
  ) : (
    <main>
      <>
        {appView === "list" &&
          ships.map((ship) => <ListItem key={ship.id} ship={ship} />)}
        {appView === "gallery" && <Gallery ships={ships} />}
        <ImageModal />
      </>
    </main>
  );
};

export { Main };
