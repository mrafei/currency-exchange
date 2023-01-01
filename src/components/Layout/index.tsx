import LayoutAppBar from "./AppBar";
import type { HOCFunctionalComponent } from "@_types/components";

const Layout: HOCFunctionalComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <LayoutAppBar />
      {children}
    </div>
  );
};
export default Layout;
