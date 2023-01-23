import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/Root";
import Result from "./routes/Result";
import { loader as resultLoader } from "./routes/Result";
import { action as rootAction } from "./routes/Rating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: rootAction,
  },
  {
    path: "/result",
    element: <Result />,
    loader: resultLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
