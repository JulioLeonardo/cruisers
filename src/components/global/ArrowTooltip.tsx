import React from "react";
import { Fade, Tooltip, TooltipProps } from "@mui/material";

interface ArrowTooltipProps extends TooltipProps {
  title: string;
}

const ArrowTooltip = ({
  children,
  title,
  ...rest
}: ArrowTooltipProps): JSX.Element => {
  return (
    <Tooltip
      title={title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      arrow
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export { ArrowTooltip };
