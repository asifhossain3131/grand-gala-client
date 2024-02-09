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
import useServices from '../../../../hooks/useServices';
import ServiceModal from './ServiceModal';



type ServiceType={
  _id:string,
  service_title:string,
  service_description:string
}
const AdminServiceControlTable = () => {
  const {services,serviceRefetch}=useServices()
  const[singleServiceId,setSingleServiceId]=React.useState('')
  const [singleServiceData,setSingleServiceData]=React.useState({})
  const [modalOpen,setModalOpen]=React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>,serviceId:string) => {
    setSingleServiceId(serviceId)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleDeleteService=async()=>{
 try {
  const res=await axios.delete(`http://localhost:5000/allServices`,{data:{serviceId:singleServiceId}})
  if(res.data.success===true){
    serviceRefetch()
    setAnchorEl(null)
  }
 } catch (error) {
  console.log(error)
 }
  }

  const handleServiceUpdateModal=async()=>{
    try {
      const res=await axios.get(`http://localhost:5000/allServices/${singleServiceId}`)
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
              <TableCell align="left">Service</TableCell>
              <TableCell align="left">Service Details</TableCell>
              <TableCell align="right">Check it out</TableCell>
              <TableCell align="right">Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services?.map(({_id,service_title,service_description}:ServiceType,i:number) => (
              <TableRow
                key={_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                 {i+1}
                </TableCell>
                <TableCell align="left">{service_title}</TableCell>
                <TableCell align="left">{service_description||'Not available'}</TableCell>
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
        <ServiceModal singleServiceData={singleServiceData} action={'update'} isOpen={modalOpen} setAddModalOpen={setModalOpen}></ServiceModal>
      </TableContainer>
    );
};

export default AdminServiceControlTable;
