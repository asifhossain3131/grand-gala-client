import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
    const{data:allBlogs,refetch}=useQuery({
        queryKey:['allBlogs'],
        queryFn:async()=>{
            try {
                const res=await axios.get(`https://grand-gala-server.vercel.app/blogs`)
                if(res?.data?.success===true){
                    return res?.data?.data
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return {allBlogs,refetch}
};

export default useBlogs;