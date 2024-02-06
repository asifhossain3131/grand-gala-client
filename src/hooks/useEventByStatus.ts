import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEventByStatus = (status:string) => {
    const{data:relatedEvents,refetch}=useQuery({
        queryKey:['eventBySttatus'],
        queryFn:async()=>{
            try {
                const res=await axios.get(`http://localhost:5000/allEvents/${status}`)
                if(res?.data?.success===true){
                    return res?.data?.data
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return {relatedEvents,refetch}
};

export default useEventByStatus;