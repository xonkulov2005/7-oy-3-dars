import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { loader as HomeLoader } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "./about",
          element: <Home />,
        },
        {
          path: "./contact",
          element: <Home />,
        },
      ],
    },
  ]);
}

export default App;
