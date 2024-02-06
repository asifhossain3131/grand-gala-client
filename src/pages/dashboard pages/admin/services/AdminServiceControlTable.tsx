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



type ServiceType={
    services:[]
}
const AdminServiceControlTable = ({services}:ServiceType) => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Service</TableCell>
              <TableCell align="left">Service Details</TableCell>
              <TableCell align="right">Check it out</TableCell>
              <TableCell align="right">Actions</TableCell>
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
                <TableCell align="right"><button><PendingActionsIcon></PendingActionsIcon></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default AdminServiceControlTable;
