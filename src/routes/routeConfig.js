import MainPage from "@containers/MainPage";
import ElementPage from "@containers/ElementPage";
import NotFound from "@containers/NotFound";

const routeConfig = [
  {
    path: "/",
    end: true,
    element: <MainPage />,
  },
  {
    path: "project/:id",
    end: true,
    element: <ElementPage />,
  },
  {
    path: "notfound",
    end: true,
    element: <NotFound />,
  },
  {
    path: "*",
    end: false,
    element: <NotFound />,
  },
];

export default routeConfig;