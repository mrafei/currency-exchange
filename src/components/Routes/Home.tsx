import Box from "@mui/material/Box";
import Converter from "@components/Converter";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={7}>
      <Typography variant="h1">I want to convert</Typography>
      <Converter />
      <Divider />
    </Box>
  );
};
export default Home;
