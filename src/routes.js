import { HomePage, ErrorPage, Terms, RefundPolicy, PrivacyPolicy,CancellationPolicy, Gifts,AllPerfumes, About } from "./pages";
import { Cart } from "./components";
import Contact from "./pages/Contact";

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
  },
  {
    key: "9",
    path: "cart",
    element: <Cart />,
    errorElement: <ErrorPage/>
  },
  
  {
    key: "10",
    path: "about",
    element: <About />,
    errorElement: <ErrorPage/>
  },
  {
    key: "11",
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage/>
  },

];

export default routes;
