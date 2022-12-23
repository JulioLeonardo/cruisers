import React, { useEffect } from "react";
import { useShipsStore } from "../store";
import { useQuery } from "@apollo/client";
import { getShips } from "../queries/getShips";
import { ImageModal, ListItem, LoaderPage } from "./";
import { ShipsApiResponse } from "../types";
import { Gallery } from "./Gallery";
import { InView } from "react-intersection-observer";

const Main = (): JSX.Element => {
  const { ships, setShips, findShipFilter, appView } = useShipsStore();
  const shipsFilter: string =
    findShipFilter !== "" ? `, find: { type: "${findShipFilter}"}` : "";

  const { loading, data, fetchMore } = useQuery<ShipsApiResponse>(
    getShips(shipsFilter),
    { variables: { offset: 0, limit: 7 } }
  );

  console.log({ loading }, { data }, { ships });

  useEffect(() => {
    if (data?.ships == null) return;

    setShips(data.ships);
  }, [loading, data]);

  return loading ? (
    <LoaderPage />
  ) : (
    <main>
      <>
        {appView === "list" &&
          ships.map((ship) => <ListItem key={ship.id} ship={ship} />)}
        {appView === "gallery" && <Gallery ships={ships} />}
        {ships.length > 0 && (
          <InView
            onChange={(inView: boolean) => {
              void (async () => {
                const currentLength = ships.length;
                if (inView) {
                  await fetchMore({
                    variables: {
                      offset: currentLength,
                      limit: 5,
                    },
                  });
                }
              })();
            }}
          />
        )}
        <ImageModal />
      </>
    </main>
  );
};

export { Main };
