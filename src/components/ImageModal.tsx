import React from "react";
import { IconButton, IconButtonProps, Modal, styled } from "@mui/material";
import { useShipsStore } from "../store";
import { Close } from "@mui/icons-material";

const ImageModal = (): JSX.Element => {
  const { ships, isImageModalOpen, toggleImageModal, selectedShip } =
    useShipsStore();
  return (
    <Modal
      open={isImageModalOpen}
      onClose={() => toggleImageModal("")}
      sx={{ display: "grid", placeItems: "center" }}
      aria-labelledby={ships.find((ship) => ship.id === selectedShip)?.name}
      aria-describedby="Ship picture"
    >
      <>
        <CloseModalButton onClick={() => toggleImageModal("")} />
        <StyledModalImage
          src={ships.find((ship) => ship.id === selectedShip)?.image}
          alt={ships.find((ship) => ship.id === selectedShip)?.name}
        />
      </>
    </Modal>
  );
};

const StyledModalImage = styled("img")({
  maxWidth: "90%",
  maxHeight: "90%",
});

const StyledCloseButton = styled(IconButton)({
  position: "absolute",
  right: 8,
  top: 8,
});

interface CloseModalButtonProps {
  onClick: IconButtonProps["onClick"];
}

const CloseModalButton = ({ onClick }: CloseModalButtonProps): JSX.Element => (
  <StyledCloseButton size="small" color="inherit" onClick={onClick}>
    <Close />
  </StyledCloseButton>
);

export { ImageModal };
