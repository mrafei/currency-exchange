import { HOCFunctionalComponent } from "@_types/components";

const Layout: HOCFunctionalComponent = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
export default Layout;
