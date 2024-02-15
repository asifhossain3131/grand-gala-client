import { Fab, Tab, Tabs } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import EventItemsTable from "./EventItemsTable";
import EventItemsModal from "./EventItemsModal";

const EventItemsMangement = () => {
    const [addModalOpen,setAddModalOpen]=useState(false)
    const [value, setValue] = React.useState(0);
    const eventStatus=value===0?'Upcoming':'Completed'

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event.target)
      setValue(newValue);
    };
    const closeAddModal=()=>{
        setAddModalOpen(!addModalOpen)
    }
    return (
        <div className="max-w-[1000px] mx-auto mt-12">
        <div className="flex items-center justify-between">
        <Fab  onClick={()=>setAddModalOpen(!addModalOpen)} style={{marginBottom:'10px'}} color="success" aria-label="add">
        <AddIcon />
      </Fab>
      <Tabs className="bg-white" value={value} onChange={handleChange} centered>
        <Tab label="Upcoming" />
        <Tab label="Completed" />
      </Tabs>
        </div>
           <EventItemsTable eventStatus={eventStatus}></EventItemsTable>
           <EventItemsModal action={'add'} isOpen={addModalOpen} closeModal={closeAddModal}></EventItemsModal>
        </div>
    );
};

export default EventItemsMangement;