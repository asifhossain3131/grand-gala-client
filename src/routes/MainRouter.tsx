import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import EventItemsManagement from "../pages/dashboard pages/admin/event items management/EventItemsManagement";
import AdminServicesControl from "../pages/dashboard pages/admin/services/AdminServicesControl";

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
          index:true,
          // path:'/dashboard/eventItems',
          element:<EventItemsManagement></EventItemsManagement>
        },
        {
          path:'/dashboard/services',
          element:<AdminServicesControl></AdminServicesControl>
        }
      ]
    }
  ]);

  export default router