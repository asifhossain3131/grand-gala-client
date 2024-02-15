import { motion, AnimatePresence } from 'framer-motion';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import useEventByStatus from '../../../../hooks/useEventByStatus';
import React from 'react';

type Inputs = {
  eventName:string,
  eventImg:string,
  eventDate:string,
  eventDescription:string,
  eventPlace:string
}

const EventItemsModal = ({action, isOpen,closeModal,singleServiceData }:any) => {
  const{refetch}=useEventByStatus('')
  const [status, setStatus] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const eventsArray:[]=[]
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async(data) =>{
    const serverData={...data,providedServices:eventsArray.length>0?eventsArray:singleServiceData?.services_in_array}
    try {
      let res;
    if (action === 'add') {
      const newServiceData={
        event_name:data.eventName,
        img:data.eventImg,
        place:data.eventDescription,
        description:eventsArray,
        status: status,
        services:[],
      }
      res = await axios.post('https://grand-gala-server.vercel.app/allEvents', newServiceData);
    } else if (action === 'update') {
      res = await axios.put(`https://grand-gala-server.vercel.app/allEvents`, {...serverData,serviceId:singleServiceData?._id});
    }
    if (res?.data.success === true) {
      refetch();
      closeModal()
      reset()
    }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModalButton=()=>{
    closeModal()
    reset()
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
              position:'relative'
            }}
          >
                <button onClick={handleCloseModalButton} className='absolute top-2 right-2 text-red-600 font-semibold'>Close</button>
            <h2 className='text-semibold text-lg uppercase'>{action} Event</h2>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col lg:flex-row gap-4 '>
              <TextField defaultValue={singleServiceData?.service_title||''} {...register("eventName", { required: true })}  id="standard-basic" label="Event Name" variant="standard" />
              <TextField defaultValue={singleServiceData?.service_img||''} {...register("eventImg", { required: true })} id="standard-basic" label="Event image link" variant="standard" />
              </div>
             <div className='flex flex-col lg:flex-row gap-4 '>
             <TextField defaultValue={singleServiceData?.service_img||''} {...register("eventDate", { required: true })} id="standard-basic" label="Date" variant="standard" />
             <FormControl variant="standard" className='w-full'>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value={'Completed'}>Completed</MenuItem>
          <MenuItem value={'Upcoming'}>Upcoming</MenuItem>
        </Select>
      </FormControl>
             </div>
             <TextField className='w-full' defaultValue={singleServiceData?.service_title||''} {...register("eventPlace", { required: true })}  id="standard-basic" label="Event place" variant="standard" />
              <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth
          variant="standard"
          defaultValue={singleServiceData?.service_description||''} {...register("eventDescription", { required: true })}
        />
              <button className='bg-green-500 p-2 rounded text-white uppercase' type="submit">{action}</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventItemsModal;
