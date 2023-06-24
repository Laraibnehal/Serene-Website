import { HomePage, ErrorPage, HomeFragrance, Terms, RefundPolicy, PrivacyPolicy } from "./pages";

const routes = [
  {
    key: "1",
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    key: "2",
    path: "/home-fragrances",
    element: <HomeFragrance />,
    errorElement: <ErrorPage />,
  },
  {
    key: "3",
    path: "/terms",
    element: <Terms />,
    errorElement: <ErrorPage />,
  },
  {
    key: "4",
    path: "refund-policy",
    element: <RefundPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    key: "5",
    path: "privacy-policy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
