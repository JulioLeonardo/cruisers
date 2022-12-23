import React from "react";
import { Ship } from "../types";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import placeholder from "../assets/images/placeholder.webp";
import { useShipsStore } from "../store";

const GalleryItem = ({ ship }: { ship: Ship }): JSX.Element => {
  const { toggleImageModal } = useShipsStore();

  return (
    <ImageListItem onClick={() => toggleImageModal(ship.id)}>
      <img
        src={ship.image === null ? placeholder : ship.image}
        alt="Ship photo"
        loading="lazy"
      />
      <ImageListItemBar
        title={ship.name}
        subtitle={ship.type}
        position="below"
      />
    </ImageListItem>
  );
};

export { GalleryItem };
