import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useShipsStore } from "../store";
import { AppView } from "../types";
import { ArrowTooltip } from "./global";

const ListToggle = (): JSX.Element => {
  const { appView, setAppView } = useShipsStore();

  const handleAppView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ): void => {
    if (newView === null) return;

    setAppView(newView as AppView);
  };

  return (
    <ToggleButtonGroup
      value={appView}
      exclusive
      onChange={handleAppView}
      aria-label="text alignment"
    >
      <ArrowTooltip title="List view">
        <ToggleButton
          value="list"
          aria-label="left aligned"
          sx={{
            ...(appView === "list" && {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            }),
          }}
        >
          <ListIcon />
        </ToggleButton>
      </ArrowTooltip>
      <ArrowTooltip title="Gallery view">
        <ToggleButton
          value="gallery"
          aria-label="centered"
          sx={{
            ...(appView === "gallery" && {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            }),
          }}
        >
          <CollectionsIcon />
        </ToggleButton>
      </ArrowTooltip>
    </ToggleButtonGroup>
  );
};

export { ListToggle };
