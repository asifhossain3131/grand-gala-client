import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import EventItemsModal from './EventItemsModal';



type EventType={
_id:string,
place:string,
event_name:string, 
description:string,
date:string,
sevices:string[],
img:string,
status:string
}

type PropType={
    eventStatus:string
}
const EventItemsTable = ({eventStatus}:PropType) => {
    const [relatedEvents,setRelatedEvents]=React.useState([])
    React.useEffect(()=>{
        const fetchRelatedEvents=async()=>{
            try {
                const res=await axios.get(`https://grand-gala-server.vercel.app/allEvents/${eventStatus}`)
                if(res?.data?.success===true){
                     setRelatedEvents(res?.data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchRelatedEvents()
    },[eventStatus])
    // const {refetch}=useEventByStatus(eventStatus)
  const[singleEventId,setSingleEventId]=React.useState('')
  const [singleServiceData,setSingleServiceData]=React.useState({})
  const [modalOpen,setModalOpen]=React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>,serviceId:string) => {
    setSingleEventId(serviceId)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  const closeModal=()=>{
    setSingleServiceData({})
    setSingleEventId('')
    setModalOpen(!modalOpen)
  }

  const handleDeleteService=async()=>{
 try {
  const res=await axios.delete(`https://grand-gala-server.vercel.app/allEvents`,{data:{eventId:singleEventId}})
  if(res.data.success===true){
    setAnchorEl(null)
    // refetch()
  }
 } catch (error) {
  console.log(error)
 }
  }

  const handleServiceUpdateModal=async()=>{
    try {
      const res=await axios.get(`https://grand-gala-server.vercel.app/allServices/${singleEventId}`)
      if(res.data.success===true){
           setSingleServiceData(res.data.data)
           setModalOpen(!modalOpen)
           setAnchorEl(null)
      }
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Event</TableCell>
              <TableCell align="left">Place</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatedEvents?.map(({_id,event_name,date,place,status}:EventType,i:number) => (
              <TableRow
                key={_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                 {i+1}
                </TableCell>
                <TableCell align="left">{event_name}</TableCell>
                <TableCell align="left">{place||'Not available'}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="right"><button><DisplaySettingsIcon></DisplaySettingsIcon></button></TableCell>
                <TableCell align="right"><button onClick={(e)=>handleClick(e,_id)}><PendingActionsIcon></PendingActionsIcon></button>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><button onClick={handleServiceUpdateModal}>Update</button></MenuItem>
        <MenuItem><button onClick={handleDeleteService}>Delete</button></MenuItem>
      </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <EventItemsModal singleServiceData={singleServiceData} action={'update'} isOpen={modalOpen} closeModal={closeModal}></EventItemsModal>
      </TableContainer>
    );
};

export default EventItemsTable;
