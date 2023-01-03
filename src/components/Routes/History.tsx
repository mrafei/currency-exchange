import Box from "@mui/material/Box";
import type { FC } from "react";
import useConvertHistory from "@hooks/useConvertHistory";
import Typography from "@mui/material/Typography";

const History: FC = () => {
  const { history } = useConvertHistory();
  return (
    <Box>
      {history.map((item) => (
        <Typography>{item.date}</Typography>
      ))}
    </Box>
  );
};
export default History;
