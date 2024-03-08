import { createBrowserRouter } from "react-router-dom";
import AddExpensePage from "./components/Dashboard/AddExpensePage";
import Dashboard from "./components/Dashboard/index";
import LandingPage from "./components/LandingPage";
import Wallet from "./components/Wallet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/add-expense",
    element: <AddExpensePage />,
  },
  {
    path: "/expenses",
    element: <Wallet balance="56475" income="3452" expense="7789" />,
  },
]);
