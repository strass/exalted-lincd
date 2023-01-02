import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CharmsIndexRoute, { loader as charmsIndexLoader } from "./routes/Charms";
import CharmAddRoute, { action as charmAddAction } from "./routes/Charms/Add";
import CharmViewRoute, {
  CharmViewError,
  loader as charmViewLoader,
} from "./routes/Charms/View";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "charms",
          children: [
            {
              index: true,
              element: <CharmsIndexRoute />,
              loader: charmsIndexLoader,
            },
            {
              path: "new",
              element: <CharmAddRoute />,
              action: charmAddAction,
            },
            {
              path: ":id",
              element: <CharmViewRoute />,
              errorElement: <CharmViewError />,
              loader: charmViewLoader,
            },
          ],
        },
      ],
    },
  ],
  {
    basename:
      process.env.NODE_ENV !== "development" ? "/exalted-lincd" : undefined,
  }
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
