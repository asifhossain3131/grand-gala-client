import { Fab } from "@mui/material";
import useServices from "../../../../hooks/useServices";
import AdminServiceControlTable from "./AdminServiceControlTable";
import AddIcon from '@mui/icons-material/Add';

const AdminServicesControl = () => {
    const {services,refetch}=useServices()
    return (
        <div className="max-w-[1000px] mx-auto mt-12">
             <Fab style={{marginBottom:'10px'}} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
           <AdminServiceControlTable services={services} refetch={refetch}></AdminServiceControlTable>
        </div>
    );
};

export default AdminServicesControl;