import React, { Suspense } from "react";
import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../queries/shipsQuery";

const Home = (): JSX.Element => {
  const { data } = useQuery(GET_SHIPS);
  console.log({ data });

  return <Suspense fallback={<>Loading...</>}>{JSON.stringify(data)}</Suspense>;
};

export { Home };
