import { Fab } from "@mui/material";
import AdminServiceControlTable from "./AdminServiceControlTable";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import ServiceModal from "./ServiceModal";

const AdminServicesControl = () => {
    const [addModalOpen,setAddModalOpen]=useState(false)
    const closeAddModal=()=>{
        setAddModalOpen(!addModalOpen)
    }
    return (
        <div className="max-w-[1000px] mx-auto mt-12">
            <Fab  onClick={()=>setAddModalOpen(!addModalOpen)} style={{marginBottom:'10px'}} color="success" aria-label="add">
        <AddIcon />
      </Fab>
           <AdminServiceControlTable ></AdminServiceControlTable>
           <ServiceModal action={'add'} isOpen={addModalOpen} closeModal={closeAddModal}></ServiceModal>
        </div>
    );
};

export default AdminServicesControl;