import type { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HistoryItemActions from "./Actions";
import type { HistoryItemType } from "@_types/history";

export type ItemType = {
  remove: (date: HistoryItemType["id"]) => void;
} & HistoryItemType;

const HistoryItem: FC<ItemType> = (item) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover .history-actions": { visibility: "visible" },
      }}
    >
      <TableCell>{item.date}</TableCell>
      <TableCell>{`Converted an amount of ${item.amount} from ${item.source} to ${item.dest}`}</TableCell>
      <TableCell>
        <HistoryItemActions {...item} />
      </TableCell>
    </TableRow>
  );
};
export default HistoryItem;
