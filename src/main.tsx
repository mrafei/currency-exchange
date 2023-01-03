import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "@components/Routes";
import ThemeProvider from "@contexts/ThemeProvider";
import QueryClientProvider from "@contexts/QueryClientProvider";
import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
