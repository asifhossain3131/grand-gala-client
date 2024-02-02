import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import EventItemsManagement from "../pages/dashboard pages/admin/event items management/EventItemsManagement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/dashboard/eventItems',
          element:<EventItemsManagement></EventItemsManagement>
        }
      ]
    }
  ]);

  export default router