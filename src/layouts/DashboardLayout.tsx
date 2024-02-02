import { Outlet } from "react-router-dom";
import DashboardSideboard from "../components/dashboard components/sidebar/DashboardSideboard";

const DashboardLayout = () => {
    return (
        <div className='flex'>
        <DashboardSideboard></DashboardSideboard>
        <div className='w-full'>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;