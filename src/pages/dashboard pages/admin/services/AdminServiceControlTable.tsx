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



type ServiceType={
    services:[],
    refetch:any
}
const AdminServiceControlTable = ({services,refetch}:ServiceType) => {
  const [modalOpen,setModalOpen]=React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleDeleteService=async(id:string)=>{
 try {
  const res=await axios.delete(`http://localhost:5000/allServices`,{data:id})
  if(res.data.success){
    refetch()
    setModalOpen(!modalOpen)
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
            {services?.map(({_id,service_title,description},i) => (
              <TableRow
                key={_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                 {i+1}
                </TableCell>
                <TableCell align="left">{service_title}</TableCell>
                <TableCell align="left">{description||'Not available'}</TableCell>
                <TableCell align="right"><button><DisplaySettingsIcon></DisplaySettingsIcon></button></TableCell>
                <TableCell align="right"><button onClick={handleClick}><PendingActionsIcon></PendingActionsIcon></button>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><button onClick={()=>setModalOpen(!modalOpen)}>Update</button></MenuItem>
        <MenuItem><button onClick={()=>handleDeleteService(_id)}>Delete</button></MenuItem>
      </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default AdminServiceControlTable;
