import React from "react";
import { Ship } from "../types";
import { ImageList } from "@mui/material";
import { GalleryItem } from "./GalleryItem";

const Gallery = ({ ships }: { ships: Ship[] }): JSX.Element => {
  return (
    <ImageList gap={12}>
      {ships.map((ship) => (
        <GalleryItem key={ship.id} ship={ship} />
      ))}
    </ImageList>
  );
};

export { Gallery };
