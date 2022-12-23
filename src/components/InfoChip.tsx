import { ArrowTooltip } from "./global";
import { Chip } from "@mui/material";
import React, { ReactElement } from "react";

interface InfoChipProps {
  title: string;
  icon: ReactElement;
  label: string;
}

const InfoChip = ({ title, icon, label }: InfoChipProps): JSX.Element => {
  return (
    <ArrowTooltip title={title} sx={{ cursor: "pointer" }}>
      <Chip icon={icon} label={label} />
    </ArrowTooltip>
  );
};

export { InfoChip };
