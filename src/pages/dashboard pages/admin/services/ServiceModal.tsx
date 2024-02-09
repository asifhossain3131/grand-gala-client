import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import useServices from '../../../../hooks/useServices';

type Inputs = {
 service_title:string,
 service_img:string,
 service_description:string,
}

const ServiceModal = ({action, isOpen,setAddModalOpen,singleServiceData }:any) => {
  const{serviceRefetch}=useServices()
  const[service_in_array,setServicesInArray]=useState<string[]>([])
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async(data) =>{
    const serverData={...data,service_in_array}
    try {
      const res=await axios.post('http://localhost:5000/allServices',serverData)
      if(res.data.success===true){
        serviceRefetch()
       setAddModalOpen(!isOpen)
      }
    } catch (error) {
      console.log(error)
    }
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
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            <h2 className='text-semibold text-lg uppercase'>{action} service</h2>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col lg:flex-row gap-4 '>
              <TextField defaultValue={singleServiceData?.service_title||''} {...register("service_title", { required: true })}  id="standard-basic" label="Service Name" variant="standard" />
              <TextField defaultValue={singleServiceData?.service_img||''} {...register("service_img", { required: true })} id="standard-basic" label="Service image link" variant="standard" />
              </div>
              <div>
                <h1 className='text-gray-600'>Service features : <span><button><AddCircleOutlineIcon className='text-green-600'></AddCircleOutlineIcon></button></span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <TextField   id="standard-basic"   label="Service feature-1" variant="standard" />
                <TextField  id="standard-basic"  label="Service feature-2" variant="standard" />
                <TextField id="standard-basic"  label="Service feature-3" variant="standard" />
                <TextField id="standard-basic"  label="Service feature-4" variant="standard" />
                </div>
              </div>
              <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth
          variant="standard"
          defaultValue={singleServiceData?.service_description||''} {...register("service_description", { required: true })}
        />
              <button className='bg-green-500 p-2 rounded text-white uppercase' type="submit">{action}</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
