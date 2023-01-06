import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import type { FC } from "react";

type TimeSeriesRateTableProps = {
  rates: Record<string, number>;
};
const TimeSeriesRateTable: FC<TimeSeriesRateTableProps> = ({ rates }) => (
  <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {["Date", "Exchange rate"].map((text) => (
            <TableCell key={text} sx={{ backgroundColor: "background.paper" }}>
              <Typography color="text.secondary">{text}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(rates).map(([date, rate]) => (
          <TableRow>
            <TableCell>{date}</TableCell>
            <TableCell>{rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TimeSeriesRateTable;
