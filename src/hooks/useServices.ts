import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useServices = () => {
  const{data:services,refetch}=useQuery({
    queryKey:['allServices'],
    queryFn:async()=>{
        try {
            const res=await axios.get('http://localhost:5000/allServices')
            if(res.data.success===true){
              return res.data.data
            }
        } catch (error) {
            console.log(error)
        }
    }
  })
  return {services,refetch}
};

export default useServices;