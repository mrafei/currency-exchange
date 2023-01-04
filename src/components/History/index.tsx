import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import HistoryItem from "./Item";
import HistoryHead from "./Head";
import useConvertHistory from "@hooks/useConvertHistory";
import type { FC } from "react";

const History: FC = () => {
  const { history, removeHistoryLog } = useConvertHistory();
  return (
    <TableContainer component={Paper}>
      <Table>
        <HistoryHead />
        <TableBody>
          {history.map((item) => (
            <HistoryItem key={item.id} remove={removeHistoryLog} {...item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default History;
