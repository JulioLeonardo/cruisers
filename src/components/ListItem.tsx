import React from "react";
import { Ship } from "../types";
import { Box, Card, Link, Typography } from "@mui/material";
import { InfoChip } from "./";
import {
  Circle,
  Flag,
  Foundation,
  Image,
  Mouse,
  TitleOutlined,
} from "@mui/icons-material";
import { useShipsStore } from "../store";

const ListItem = ({ ship }: { ship: Ship }): JSX.Element => {
  const { toggleImageModal } = useShipsStore();

  return (
    <Card sx={{ padding: 3, marginBottom: 1 }}>
      <Typography variant="h5" sx={{ paddingBottom: 1 }}>
        {ship.name}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <InfoChip
          title="Status"
          icon={
            <Circle
              color={ship.active ? "success" : "error"}
              sx={{ width: (theme) => theme.spacing(1.8) }}
            />
          }
          label={ship.active ? "Active" : "Inactive"}
          shouldNotRenderInfoShip={ship.active === null}
        />
        <InfoChip
          title="Type"
          icon={
            <TitleOutlined
              color="secondary"
              sx={{ width: (theme) => theme.spacing(2.5) }}
            />
          }
          label={ship.type}
          shouldNotRenderInfoShip={ship.type === null}
        />
        <InfoChip
          title="Home port"
          icon={
            <Flag color="info" sx={{ width: (theme) => theme.spacing(2.5) }} />
          }
          label={ship.home_port}
          shouldNotRenderInfoShip={ship.home_port === null}
        />
        <InfoChip
          title="Year built"
          icon={
            <Foundation
              color="action"
              sx={{ width: (theme) => theme.spacing(2.5) }}
            />
          }
          label={String(ship.year_built)}
          shouldNotRenderInfoShip={ship.year_built === null}
        />
        <Box
          onClick={() => toggleImageModal(String(ship.id))}
          display={ship.image === null ? "none" : "block"}
        >
          <InfoChip
            title="Image"
            icon={
              <Image
                color="primary"
                sx={{ width: (theme) => theme.spacing(2.5) }}
              />
            }
            label="Photo"
            shouldNotRenderInfoShip={ship.image === null}
          />
        </Box>
        <Link target="_blank" href={ship.url}>
          <InfoChip
            title="Link - Marine Traffic"
            icon={
              <Mouse
                color="action"
                sx={{ width: (theme) => theme.spacing(2.5) }}
              />
            }
            label="Marine Traffic - Ship page"
            shouldNotRenderInfoShip={ship.url === null}
          />
        </Link>
      </Box>
    </Card>
  );
};

export { ListItem };
