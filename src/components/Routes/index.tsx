import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom";
import Loading from "@kit/Loading";
import Layout from "@components/Layout";
import ROUTES from "@constants/routes";
import type { FC } from "react";

const Home = lazy(() => import("./Home"));
const History = lazy(() => import("./History"));

const routes = [
  { path: ROUTES.HOME, index: true, element: <Home /> },
  { path: ROUTES.HISTORY, index: true, element: <History /> },
];
const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRouter>
          {routes.map(({ element, ...route }) => (
            <Route
              key={route.path}
              {...route}
              element={<Suspense fallback={<Loading />}>{element}</Suspense>}
            />
          ))}
        </ReactRouter>
      </Layout>
    </BrowserRouter>
  );
};
export default Routes;
