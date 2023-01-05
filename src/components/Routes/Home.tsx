import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Converter from "@components/Converter";
import type { FC } from "react";

const HomeRoute: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={7}>
      <Typography variant="h1">I want to convert</Typography>
      <Converter />
    </Box>
  );
};
export default HomeRoute;
