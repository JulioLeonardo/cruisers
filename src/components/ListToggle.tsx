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
    newView: string
  ): void => {
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
        <ToggleButton value="list" aria-label="left aligned">
          <ListIcon />
        </ToggleButton>
      </ArrowTooltip>
      <ArrowTooltip title="Gallery view">
        <ToggleButton value="gallery" aria-label="centered">
          <CollectionsIcon />
        </ToggleButton>
      </ArrowTooltip>
    </ToggleButtonGroup>
  );
};

export { ListToggle };
