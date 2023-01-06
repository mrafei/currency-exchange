import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import type { FC } from "react";
import type { ItemType } from "@components/History/Item/index";

const HistoryItemActions: FC<ItemType> = ({ remove, ...item }) => {
  return (
    <Box
      display="flex"
      gap={2}
      className="history-actions"
      sx={{ visibility: "hidden" }}
    >
      <Link
        to={`/?amount=${item.amount}&source=${item.source}&dest=${item.dest}`}
      >
        <Button size="small" startIcon={<RemoveRedEyeIcon />}>
          View
        </Button>
      </Link>
      <Button
        onClick={() => remove(item.id)}
        size="small"
        color="error"
        startIcon={<RemoveRedEyeIcon />}
      >
        Delete from history
      </Button>
    </Box>
  );
};
export default HistoryItemActions;
