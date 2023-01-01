import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom";
import Layout from "@components/Layout";

const Home = lazy(() => import("./Home"));
const History = lazy(() => import("./History"));

import type { FC } from "react";
import Loading from "@kit/Loading";

const routes = [
  { path: "/", index: true, element: <Home /> },
  { path: "/history", index: true, element: <History /> },
];
const Routes: FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <ReactRouter>
          {routes.map(({ element, ...route }) => (
            <Route
              {...route}
              element={<Suspense fallback={<Loading />}>{element}</Suspense>}
            />
          ))}
        </ReactRouter>
      </BrowserRouter>
    </Layout>
  );
};
export default Routes;
