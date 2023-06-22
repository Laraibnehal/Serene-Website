import { HomePage, ErrorPage } from "./pages";

const routes = [
  {
    key: "1",
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
