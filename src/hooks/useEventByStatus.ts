import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEventByStatus = (status:string) => {
    const{data:relatedEvents,refetch}=useQuery({
        queryKey:['eventByStatus'],
        queryFn:async()=>{
            try {
                const res=await axios.get(`https://grand-gala-server.vercel.app/allEvents/${status}`)
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