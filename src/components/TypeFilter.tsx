import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useShipsStore } from "../store";
import { ShipTypes } from "../types";
import { stringUnionToArray } from "../helpers";

const TypeFilter = (): JSX.Element => {
  const { findShipFilter, setFindShipFilter } = useShipsStore();
  const shipTypes = stringUnionToArray<ShipTypes>()(
    "",
    "Barge",
    "Cargo",
    "High Speed Craft",
    "Tug"
  );

  return (
    <FormControl sx={{ width: (theme) => theme.spacing(30) }}>
      <InputLabel id="ship-type">Ship type</InputLabel>
      <Select
        labelId="ship-type"
        id="ship-select"
        value={findShipFilter}
        label="Ship type"
        onChange={(e) => setFindShipFilter(e.target.value as ShipTypes)}
      >
        {shipTypes.map((item, index) => (
          <MenuItem key={`${item}-${index}`} value={item}>
            {item === "" ? "Select type" : item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { TypeFilter };
