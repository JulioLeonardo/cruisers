import { Alert, Snackbar } from "@mui/material";
import { ImageModal, ListItem, LoaderPage } from "./";
import React, { useEffect } from "react";

import { Gallery } from "./Gallery";
import { InView } from "react-intersection-observer";
import { ShipsApiResponse } from "../types";
import { getShips } from "../queries/getShips";
import { useQuery } from "@apollo/client";
import { useShipsStore } from "../store";

const Main = (): JSX.Element => {
  const { ships, setShips, findShipFilter, appView } = useShipsStore();

  const { loading, error, data, fetchMore, refetch } =
    useQuery<ShipsApiResponse>(getShips, {
      variables: { offset: 0, limit: 7, type: findShipFilter },
    });

  useEffect(() => {
    void refetch();
  }, [findShipFilter]);

  useEffect(() => {
    if (data?.ships == null) return;

    setShips(data.ships);
  }, [loading, data]);

  if (error !== undefined) {
    return (
      <Snackbar open>
        <Alert severity="error">{error.message}</Alert>
      </Snackbar>
    );
  }

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
