import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import History from "@components/History";
import type { FC } from "react";

const HistoryRoute: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={7}>
      <Typography variant="h1">Conversion History</Typography>
      <History />
    </Box>
  );
};
export default HistoryRoute;
