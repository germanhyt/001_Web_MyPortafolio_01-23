import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import App from "./App";
import ViewPdf from "./components/ViewPdf/ViewPdf";

export const AppRoutes = () => {
  const FnRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <App /> },
      { path: "/pdf", element: <ViewPdf /> }
    ]);
    return routes;
  };

  return (
    <Router>
      <FnRoutes />
    </Router>
  );
};

export default AppRoutes;
