import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ROUTES from "@constants/routes";
import type { FC } from "react";

const LayoutAppBar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense" sx={{ gap: 2 }}>
        <Box display="flex" gap={1} alignItems="center">
          <img src={"/logo.png"} />
          <Typography>CurrencyExchange</Typography>
        </Box>
        <Box flex={1}>
          <Tabs value={pathname} onChange={(_, path) => navigate(path)}>
            <Tab label="CURRENCY CONVERTER" value={ROUTES.HOME} />
            <Tab label="VIEW CONVERSION HISTORY" value={ROUTES.HISTORY} />
          </Tabs>
        </Box>
        <Button>LOGOUT</Button>
      </Toolbar>
    </AppBar>
  );
};
export default LayoutAppBar;
