import { ArrowTooltip } from "./global";
import { Chip } from "@mui/material";
import React, { ReactElement } from "react";

interface InfoChipProps {
  title: string;
  icon: ReactElement;
  label: string;
  shouldNotRenderInfoShip: boolean;
}

const InfoChip = ({
  title,
  icon,
  label,
  shouldNotRenderInfoShip,
}: InfoChipProps): JSX.Element => {
  if (shouldNotRenderInfoShip) return <></>;

  return (
    <ArrowTooltip title={title} sx={{ cursor: "pointer" }}>
      <Chip icon={icon} label={label} />
    </ArrowTooltip>
  );
};

export { InfoChip };
