import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import useServices from '../../../../hooks/useServices';

type Inputs = {
  serviceTitle:string,
  serviceImg:string,
  serviceDescription:string,
}

const ServiceModal = ({action, isOpen,closeModal,singleServiceData }:any) => {
  const{serviceRefetch}=useServices()
  const[service_in_array,setServicesInArray]=React.useState<string[]>([])
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async(data) =>{
    const serverData={...data,providedServices:service_in_array.length>0?service_in_array:singleServiceData?.services_in_array}
    try {
      let res;
    if (action === 'add') {
      res = await axios.post('http://localhost:5000/allServices', serverData);
    } else if (action === 'update') {
      res = await axios.put(`http://localhost:5000/allServices`, {...serverData,serviceId:singleServiceData?._id});
    }
    if (res?.data.success === true) {
      serviceRefetch();
      closeModal
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
            <h2 className='text-semibold text-lg uppercase'>{action} service</h2>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col lg:flex-row gap-4 '>
              <TextField defaultValue={singleServiceData?.service_title||''} {...register("serviceTitle", { required: true })}  id="standard-basic" label="Service Name" variant="standard" />
              <TextField defaultValue={singleServiceData?.service_img||''} {...register("serviceImg", { required: true })} id="standard-basic" label="Service image link" variant="standard" />
              </div>
              <div>
                <h1 className='text-gray-600'>Service features :</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  {action==='update' && singleServiceData?.services_in_array?.map((service:string,i:number)=>
                    <TextField key={i} size='small' defaultValue={service} id="standard-basic"   label={`Service feature-${i+1}`} variant="standard" />
                    )}
                  {(action==='add'||singleServiceData?.service_in_array?.length===0) && 
                  <>
                       <TextField size='small'  id="standard-basic"   label="Service feature-1" variant="standard" />
                <TextField size='small'  id="standard-basic"  label="Service feature-2" variant="standard" />
                <TextField size='small' id="standard-basic"  label="Service feature-3" variant="standard" />
                <TextField size='small' id="standard-basic"  label="Service feature-4" variant="standard" />
                <TextField size='small' id="standard-basic"  label="Service feature-4" variant="standard" />
                <TextField size='small' id="standard-basic"  label="Service feature-5" variant="standard" />
                  </>
                  }
                </div>
              </div>
              <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth
          variant="standard"
          defaultValue={singleServiceData?.service_description||''} {...register("serviceDescription", { required: true })}
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
