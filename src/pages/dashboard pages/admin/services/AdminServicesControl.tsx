import { Fab } from "@mui/material";
import AdminServiceControlTable from "./AdminServiceControlTable";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import ServiceModal from "./ServiceModal";

const AdminServicesControl = () => {
    const [addModalOpen,setAddModalOpen]=useState(false)
    return (
        <div className="max-w-[1000px] mx-auto mt-12">
            <button onClick={()=>setAddModalOpen(!addModalOpen)}> <Fab style={{marginBottom:'10px'}} color="success" aria-label="add">
        <AddIcon />
      </Fab></button>
           <AdminServiceControlTable ></AdminServiceControlTable>
           <ServiceModal action={'add'} isOpen={addModalOpen} setAddModalOpen={setAddModalOpen}></ServiceModal>
        </div>
    );
};

export default AdminServicesControl;