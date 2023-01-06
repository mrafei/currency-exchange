import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import type { FC } from "react";

type TimeSeriesRateTableProps = {
  rates: Record<string, number>;
};
const TimeSeriesStatisticsTable: FC<TimeSeriesRateTableProps> = ({ rates }) => {
  const values = Object.values(rates);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const avg = values.reduce((acc, num) => acc + num, 0) / (values.length || 1);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {["Statistics", ""].map((text) => (
              <TableCell key={text}>
                <Typography color="text.secondary">{text}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries({
            Lowest: min,
            Highest: max,
            Average: avg.toFixed(6),
          }).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TimeSeriesStatisticsTable;
