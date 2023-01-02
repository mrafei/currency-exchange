import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LayoutAppBar from "./AppBar";
import type { HOCFunctionalComponent } from "@_types/components";

const Layout: HOCFunctionalComponent = (props) => {
  const { children } = props;
  return (
    <Box>
      <LayoutAppBar />
      <Container>
        <Box p={4} height="100%" flex={1}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};
export default Layout;
