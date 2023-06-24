import { HomePage, ErrorPage, Terms, RefundPolicy, PrivacyPolicy,CancellationPolicy, Gifts,AllPerfumes } from "./pages";

const routes = [
  {
    key: "1",
    path: "/",
    element: <HomePage />,
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
  },
  {
    key: "6",
    path: "Cancellation-policy",
    element: <CancellationPolicy />,
    errorElement: <ErrorPage/>
  },
  {
    key: "7",
    path: "gifts",
    element: <Gifts />,
    errorElement: <ErrorPage/>
  },
  {
    key: "8",
    path: "all-perfumes",
    element: <AllPerfumes />,
    errorElement: <ErrorPage/>
  }
];

export default routes;
