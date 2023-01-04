import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

const headCells = ["Date", "Event", "Actions"];
const HistoryHead: FC = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((text) => (
          <TableCell key={text}>
            <Typography color="text.secondary">{text}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default HistoryHead;
