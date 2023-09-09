import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Body /> },
      { path: "Body", element: <Body /> },
      { path: "Protfolio", element: <Portfolio /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
