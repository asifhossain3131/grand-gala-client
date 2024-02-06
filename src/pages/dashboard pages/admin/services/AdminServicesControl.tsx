import useServices from "../../../../hooks/useServices";
import AdminServiceControlTable from "./AdminServiceControlTable";

const AdminServicesControl = () => {
    const {services}=useServices()
    return (
        <div className="max-w-[1000px] bg-red-600 mx-auto mt-12">
           <AdminServiceControlTable services={services}></AdminServiceControlTable>
        </div>
    );
};

export default AdminServicesControl;